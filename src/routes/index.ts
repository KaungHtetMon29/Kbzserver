import express from "express";
import test from "./test/view"
import user from "./user/view"
import post from "./blogs/view"

const route=express.Router();
route.use("/test",test)
route.use("/user",user)
route.use("/post",post)
export default route