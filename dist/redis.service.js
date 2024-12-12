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
exports.setExpiryForKey = exports.checkInRedis = exports.insertToRedis = void 0;
const redis_singletone_1 = require("./redis.singletone");
const insertToRedis = (key) => {
    return redis_singletone_1.RedisService.getInstance().incr(key);
};
exports.insertToRedis = insertToRedis;
const checkInRedis = (key) => __awaiter(void 0, void 0, void 0, function* () {
    return yield redis_singletone_1.RedisService.getInstance().get(key);
});
exports.checkInRedis = checkInRedis;
const setExpiryForKey = (key) => __awaiter(void 0, void 0, void 0, function* () {
    yield redis_singletone_1.RedisService.getInstance().expire(key, 60);
});
exports.setExpiryForKey = setExpiryForKey;
