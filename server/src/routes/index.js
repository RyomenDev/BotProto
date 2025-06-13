import express from "express";
import chatRoutes from "./chats.routes.js";

const router = express.Router();

router.use("/", chatRoutes); // or use specific base like /api

export default router;
