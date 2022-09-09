"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdcutSchema = void 0;
const mongoose = require("mongoose");
exports.ProdcutSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
});
//# sourceMappingURL=product.model.js.map