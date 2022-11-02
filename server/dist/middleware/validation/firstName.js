"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
exports.default = (0, express_validator_1.check)("firstName")
    .trim()
    .notEmpty()
    .withMessage("Имя не должно быть пустым !")
    .isLength({ min: 4, max: 20 })
    .withMessage("Длина имени должна быть от 2 до 20 символов !").isA;
//# sourceMappingURL=firstName.js.map