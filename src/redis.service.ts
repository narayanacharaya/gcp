import { RedisService } from "./redis.singletone"

export const  insertToRedis = (key:string)=>{
 return RedisService.getInstance().incr(key)
}
export const  checkInRedis = async (key:string)=>{
     return  await  RedisService.getInstance().get(key)
}
export const setExpiryForKey =async (key:string)=>{
    await RedisService.getInstance().expire(key, 60);
}