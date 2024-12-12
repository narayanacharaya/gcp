import Redis from 'ioredis';

export class RedisService {
  private static instance: Redis;

  private constructor() {
  }

  public static getInstance(): Redis {
    if (!RedisService.instance) {
      RedisService.instance = new Redis({
        host: '127.0.0.1',
        port: 6379
      });
    }

    return RedisService.instance;
  }
}

 
