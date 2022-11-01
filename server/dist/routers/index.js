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
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const contact_1 = require("../model/contact");
exports.router = (0, express_1.Router)();
exports.router.post("/contact", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        if (!body) {
            return res.status(400).json({ message: "Bad request !" });
        }
        const contact = new contact_1.Contact(body);
        yield contact.save();
        return res.status(200).json({ status: "ok", message: "Contact was saved" });
    }
    catch (error) {
        return res.status(500).json({ status: 500, message: error });
    }
}));
//# sourceMappingURL=index.js.map