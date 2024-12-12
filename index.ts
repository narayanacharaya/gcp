import * as pulumi from "@pulumi/pulumi";
import * as gcp from "@pulumi/gcp";
const config = new pulumi.Config();
const region = config.require("region");        
const projectId = config.require("projectId"); 
const expressImage = config.require("expressImage");
const redisInstance = new gcp.redis.Instance("my-redis-for-ratelimiting", {
    memorySizeGb: 1, 
});


const service = new gcp.cloudrun.Service("rate-limiter", {
    location: region,
    template: {
        spec: {
            containers: [
                {
                    image: expressImage,
                    envs: [
                        { name: "REDIS_URL", value: `redis://${redisInstance.host}:6379` }
                    ],
                },
            ],
        },
    },
});

const iam = new gcp.cloudrun.IamMember("public-access", {
    service: service.name,
    location: region,
    role: "roles/run.invoker",
    member: "allUsers",
});


export const serviceUrl = service.statuses[0].url;
