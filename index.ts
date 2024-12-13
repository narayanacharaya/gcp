import * as pulumi from "@pulumi/pulumi";
import * as gcp from "@pulumi/gcp";
import { Response } from "express";
const config = new pulumi.Config();
const region = config.require("region");        
const projectId = config.require("projectId"); 
const expressImage = config.require("expressImage");
const redisImage = config.require("redisImage");

const provider = new gcp.Provider("google-cloud", {
    project: projectId, 
    region: "us-central1", 
});
const redis_service = new gcp.cloudrun.Service("redis", {
    location: "us-central1",
    template: {
        spec: {
            containers: [
                {
                    image:redisImage ,
                },
            ],
        },
    },
}, { provider });

const service = new gcp.cloudrun.Service("rate-limiter", {
    location: "us-central1",
    template: {
        spec: {
            containers: [
                {
                    image: expressImage,
                    envs: [{ name: "REDIS_URL",
                        value: redis_service.statuses[0].url+":6379" }],
                },
            ],
        },
    },
}, { provider });
const iam = new gcp.cloudrun.IamMember("public-access", {
    service: service.name,
    location: region,
    role: "roles/run.invoker",
    member: "allUsers",
});

export const serviceUrl = service.statuses[0].url;
