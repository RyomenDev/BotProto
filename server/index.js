import { app } from "./src/app.js";
import { connectRedis } from "./src/services/redisClient.js";
import conf from "./src/conf.js";

// Set server port from config or fallback to 3000
const PORT = conf.PORT || 3000;

const startServer = async () => {
  try {
    // Connect to Redis before starting the server
    await connectRedis();

    // Start the Express server
    app.listen(PORT, () => {
      //   console.log(
      //     `allowed origin is ${conf.CORS_ORIGIN1} and ${conf.CORS_ORIGIN2}`
      //   );

      console.log(`🚀 Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error.message);
  }
};

startServer();
