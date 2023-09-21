import express from "express";
import test from "./test/view"
const route=express.Router();
route.use("/test",test)
export default route