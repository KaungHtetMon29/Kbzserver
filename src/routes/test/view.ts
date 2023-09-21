import { add } from "./controller";

const express=require('express')

const router=express.Router();
router.post("/",add);
export default router;