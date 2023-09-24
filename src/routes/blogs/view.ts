import {
  Selectcat,
  add,
  deletepost,
  findAll,
  findone,
  update,
} from "./controller";
const express = require("express");
const router = express.Router();
router.post("/", add);
router.get("/", findAll);
router.get("/recandcat", Selectcat);
router.get("/:postid", findone);
router.patch("/:postid", update);
router.delete("/:postid", deletepost);

export default router;
