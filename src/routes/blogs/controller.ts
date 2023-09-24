import { Request, Response } from "express";
import AppDataSource from "../../db/data-source";
import post from "../../entity/post";
// const fs = require("fs");

const postrepo = AppDataSource.getRepository(post);
export async function add(req: Request, res: Response) {
  const { img, title, date, post, benefits, category, tag, userid } = req.body;
  //   const tos=fs.readFile(path, (err, data) => {
  //     if (err) {
  //       console.error(`Error reading the image: ${err}`);
  //     } else {
  //       imgdata = data.toString("base64");

  //     }
  //   });
  let postdata = postrepo.create({
    img: img,
    title: title,
    date: date,
    post: post,
    benefit: benefits,
    category: category,
    tag: tag,
    userid: userid,
  });
  const addpost = postrepo.save(postdata);
  return res.status(200).json({ message: "success" });
}
export async function Selectcat(req: Request, res: Response) {
  const cats = await postrepo
    .createQueryBuilder("post")
    .select(["post.category", "COUNT(post.category)"])
    .groupBy("post.category")
    .getRawMany();
  console.log(cats);
  let gettags = await postrepo.find({ select: { tag: true } });
  const Rposts = await postrepo.find({ take: 4, order: { postid: "DESC" } });
  const Related = await await postrepo.query(
    "Select p.*, u.name as uname,u.img as uimg from post p LEFT OUTER JOIN useracc u on p.userid=u.id LIMIT 3"
  );
  const Posts = await postrepo.query(
    "Select p.*, u.name as uname,u.img as uimg from post p LEFT OUTER JOIN useracc u on p.userid=u.id"
  );
  // const Posts = await postrepo.createQueryBuilder("post").leftJoinAndSelect("user.img","uimg").leftJoinAndSelect("user.name","uname").where("post.userid=:id",{post.userid})
  console.log(Posts);
  return res.status(200).json({
    tag: gettags,
    cats: cats,
    recents: Rposts,
    posts: Posts,
    related: Related,
  });
}
export async function findone(req: Request, res: Response) {
  const postid = req.params.postid;
  const Singlepost = await postrepo.findOne({ where: { postid: postid } });
  console.log(Singlepost);
  return res.status(200).json(Singlepost);
}
export async function findAll(req: Request, res: Response) {
  const Singlepost = await postrepo.find({
    where: { userid: req.query.user },
    take: req.query.count,
    skip: (req.query.page - 1) * req.query.count,
  });
  const count = await postrepo.count();
  console.log(req.query);
  return res.status(200).json({ post: Singlepost, count: count });
}
export async function update(req: Request, res: Response) {
  const postid = req.params.postid;
  console.log(req.body);
  const { img, title, date, post, benefits, category, tag, userid } = req.body;
  let postdata = postrepo.create({
    img: img,
    title: title,
    date: date,
    post: post,
    benefit: benefits,
    category: category,
    tag: tag,
    userid: userid,
  });
  await postrepo
    .createQueryBuilder("post")
    .update("post")
    .set(postdata)
    .where("post.postid = :postid", { postid: postid })
    .execute();
  return res.status(200).json({ message: "success" });
}
export async function deletepost(req: Request, res: Response) {
  const postid = req.params.postid;
  console.log("ran");
  await postrepo
    .createQueryBuilder("post")
    .delete()
    .where("post.postid = :postid", { postid: postid })
    .execute();
  return res.status(200).json({ message: "success" });
}
