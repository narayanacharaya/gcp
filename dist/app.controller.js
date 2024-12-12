"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleClickRequest = void 0;
const handleClickRequest = (req, res) => {
    const userIp = req.ip;
    const buttonColor = req.params.color;
    return res.status(200).json({
        message: 'clicked sucessfully',
    });
};
exports.handleClickRequest = handleClickRequest;
