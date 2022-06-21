"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const itemsRouter_1 = require("./routes/itemsRouter");
const PORT = 5000;
const app = (0, express_1.default)();
app.use('/api', itemsRouter_1.router);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
