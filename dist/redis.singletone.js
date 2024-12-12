"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisService = void 0;
const ioredis_1 = __importDefault(require("ioredis"));
class RedisService {
    constructor() {
    }
    static getInstance() {
        if (!RedisService.instance) {
            RedisService.instance = new ioredis_1.default({
                host: '127.0.0.1',
                port: 6379
            });
        }
        return RedisService.instance;
    }
}
exports.RedisService = RedisService;
