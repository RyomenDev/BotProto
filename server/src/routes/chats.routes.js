import express from "express";
import {
  createSession,
  sendMessage,
  getHistory,
  resetSession,
} from "../controllers/chat.controller.js";

const router = express.Router();

router.get("/session", createSession); // Generate new session ID
router.post("/chat", sendMessage); // Send message to bot
router.get("/history/:sessionId", getHistory); // Fetch chat history
router.post("/reset", resetSession); // Reset chat session

export default router;
