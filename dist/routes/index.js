"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var view_1 = __importDefault(require("./test/view"));
var route = express_1.default.Router();
route.use("/test", view_1.default);
exports.default = route;
//# sourceMappingURL=index.js.map