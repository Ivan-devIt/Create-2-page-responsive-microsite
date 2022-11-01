"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const config_1 = __importDefault(require("./config/"));
const routers_1 = require("./routers");
const mongoose_1 = __importDefault(require("mongoose"));
const { PORT, DATABASE_URL, CLIENT_URL } = config_1.default;
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    credentials: true,
    origin: CLIENT_URL,
}));
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use("/api", routers_1.router);
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        mongoose_1.default.connect(DATABASE_URL, {}, () => {
            console.log("connected to database");
        });
        app.listen(PORT, () => {
            console.log(`⚡️[server]: Server is  running at http://localhost:${PORT}`);
        });
    }
    catch (error) {
        console.log(error);
    }
});
start();
//# sourceMappingURL=index.js.map