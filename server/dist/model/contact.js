"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const contactSchema = new mongoose_1.default.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    zipCode: {
        type: Number,
        required: true,
    },
    usState: {
        type: String,
        required: true,
    },
});
exports.Contact = mongoose_1.default.model("Contact", contactSchema);
//# sourceMappingURL=contact.js.map