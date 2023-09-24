import "reflect-metadata";
import { DataSource } from "typeorm";
import testtable from "../entity/testtable";
import test2 from "../entity/test2";

import post from "../entity/post";
import useracc from "../entity/user";
require("dotenv").config();

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.HOST,
  port: 5432,
  username: process.env.USER,
  password: process.env.PW,
  database: process.env.DB,
  synchronize: false,
  logging: false,
  migrationsRun: false,
  ssl: false,
  entities: [useracc, post],
  migrations: ["dist/migration/*.js"],
});
export default AppDataSource;

// "dist/entity/*.js"
