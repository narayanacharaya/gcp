
import { checkInRedis, insertToRedis, setExpiryForKey } from "./redis.service";

 export const generalService =async (color:string, ip:string) => {
    const redisKey = `rate_limit:${color}:${ip}`;
    const reqCount =  await checkInRedis(redisKey)??'0'
    if( parseInt(reqCount)>=10){
        return false;
    }
    insertToRedis(redisKey)
    if (parseInt(reqCount)==1){
        setExpiryForKey(redisKey)
    }
    return true;
 }