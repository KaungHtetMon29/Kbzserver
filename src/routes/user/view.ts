import { add, findone, singin } from "./controller";
const express = require("express");
const router = express.Router();
router.post("/", add);
router.get("/", findone);
router.post("/signin", singin);

export default router;
