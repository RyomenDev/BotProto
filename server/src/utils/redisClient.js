import { createClient } from "redis";

const redisClient = createClient();

redisClient.on("error", (err) => console.error("Redis Client Error", err));

await redisClient.connect(); // use in your main file or wrap with connection check

export default redisClient;
