import AppDataSource from "./db/data-source";
import routes from "./routes";
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
// const port =process.env.;
const port = process.env.PORT || 5000;
AppDataSource.initialize()
  .then(async () => {
    console.log("success");
  })
  .catch((error) => console.log(error));
app.use(express.json({ limit: "10mb" }));
const keepalive = () => {
  console.log("running");
};
setInterval(keepalive, 10 * 60 * 1000);
app.use(express.json());
app.use(cors());
app.use("/", routes);
app.listen(port, () => {
  console.log(`Server is running ${port}`);
});
