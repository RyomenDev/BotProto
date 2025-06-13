
import { createClient } from "redis";
import dotenv from "dotenv";
dotenv.config();

const redisClient = createClient({
  url: process.env.REDIS_URL,
  socket: {
    tls: true, // Required for Upstash
  },
});

redisClient.on("error", (err) => {
  console.error("❌ Redis Client Error:", err);
});

// Named export for the connect function
export const connectRedis = async () => {
  if (!redisClient.isOpen) {
    await redisClient.connect();
    console.log("✅ Connected to Redis");
  }
};

// Default export for use in controllers
export default redisClient;

// import { createClient } from "redis";
// import dotenv from "dotenv";

// dotenv.config();

// const redisClient = createClient({
//   url: process.env.REDIS_URL, // From .env
//   socket: {
//     tls: true, // Required for Upstash
//   },
// });

// redisClient.on("error", (err) => console.error("Redis Client Error", err));

// await redisClient.connect();

// const redisClient=()=>{
//     console.log(process.env.REDIS_URL);
// }

// export default redisClient;
