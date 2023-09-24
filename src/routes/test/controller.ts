import testtable  from "../../entity/testtable";
import AppDataSource from "../../db/data-source";
import { Request, Response } from "express";
const testrepo=AppDataSource.getRepository(testtable)
export async function add(req:Request,res:Response) {
    let testsome=testrepo.create({id:1,name:"kaung"});
    console.log(req.body)
    const testdata=await testrepo.save(testsome);
    return res.status(200).json({success:true})
}
