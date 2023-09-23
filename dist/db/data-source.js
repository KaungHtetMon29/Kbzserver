"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var typeorm_1 = require("typeorm");
require("dotenv").config();
var AppDataSource = new typeorm_1.DataSource({
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
    entities: ["dist/entity/*.js"],
    migrations: ["dist/migration/*.js"],
});
exports.default = AppDataSource;
//# sourceMappingURL=data-source.js.map