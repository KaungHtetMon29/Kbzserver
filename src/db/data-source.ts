import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "../entity/User"
import testtable from "../entity/testtable"
import test2 from "../entity/test2"
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
    ssl:false,
    entities: ["dist/entity/*.js"],
    migrations: ["dist/migration/*.js"],
})
export default AppDataSource

