"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const webpage_1 = require("./webpage");
const app_controller_1 = require("./app.controller");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.set('trust proxy', true); // for gettintg ip form reverse proxy as well perfectly 
app.get('/', webpage_1.WebPage);
app.post('/:color', app_controller_1.handleClickRequest);
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
