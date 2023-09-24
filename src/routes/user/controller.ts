import useracc from "../../entity/user";
import AppDataSource from "../../db/data-source";

import { Request, Response } from "express";
const fs = require("fs");
const bcrypt = require("bcrypt");
const userrepo = AppDataSource.getRepository(useracc);
const path = "C:/Users/User/Downloads/20746889-[Converted] 1.png";
export async function add(req: Request, res: Response) {
  let imgdata = "";
  console.log(req.body);
  const { name, pw, img } = req.body;
  //   fs.readFile(path, (err, data) => {
  //     if (err) {
  //       console.error(`Error reading the image: ${err}`);
  //     } else {
  //       // Convert the binary data to a binary string
  //       imgdata = data.toString("base64");
  //       // 'binaryString' now contains the binary data of the image as a binary string

  //       // You can process or send this binary string as needed
  //     }
  //   });
  const repeat = await userrepo.findOne({ where: { name: name } });
  console.log(repeat);
  if (repeat === null) {
    const hashed = await bcrypt.hash(pw, 10);
    let raw = userrepo.create({ name: name, pw: hashed, img: img });
    let userdata = userrepo.save(raw);
    console.log("work");
    return res.status(200).json({ msg: "success" });
  } else {
    res.status(200).json({ msg: "duplicate" });
  }
}

export async function findone(req: Request, res: Response) {
  const data = await userrepo.findOne({ where: { id: 1 } });
  return res.status(200).json();
}
export async function singin(req: Request, res: Response) {
  const { name, pw } = req.body;
  console.log(req.body);
  const data = await userrepo.findOne({ where: { name: name } });
  if (data !== null) {
    const auth = await bcrypt.compare(pw, data.pw);
    if (auth) {
      return res
        .status(200)
        .json({ userid: data.id, name: data.name, img: data.img });
    } else {
      return res.status(401).json({ message: "wrong password" });
    }
  } else {
    return res.status(401).json({ message: "user not found" });
  }
}
