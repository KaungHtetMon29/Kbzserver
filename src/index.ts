import AppDataSource  from "./db/data-source"
import routes from "./routes"
require("dotenv").config();
const express=require('express')
const app=express();
const port =process.env.USER;

AppDataSource.initialize().then(async () => {
    console.log("success")

}).catch(error => console.log(error))
app.use("/",routes)
app.listen(5000, () => {
    console.log(`Server is running ${port}`);
  });
