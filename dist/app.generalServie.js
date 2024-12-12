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
exports.generalService = void 0;
const redis_service_1 = require("./redis.service");
const generalService = (color, ip) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const redisKey = `rate_limit:${color}:${ip}`;
    const reqCount = (_a = yield (0, redis_service_1.checkInRedis)(redisKey)) !== null && _a !== void 0 ? _a : '0';
    if (parseInt(reqCount) >= 10) {
        return false;
    }
    (0, redis_service_1.insertToRedis)(redisKey);
    if (parseInt(reqCount) == 1) {
        (0, redis_service_1.setExpiryForKey)(redisKey);
    }
    return true;
});
exports.generalService = generalService;
