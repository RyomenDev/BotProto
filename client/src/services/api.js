import axios from "axios";
import { toast } from "@/components/ui/sonner";

// Default session ID - in a real app, this could come from localStorage or be generated on first load
const DEFAULT_SESSION_ID = "default-session";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
    ? `${import.meta.env.VITE_API_URL}/api`
    : "http://localhost:3000/api",

  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add response interceptor to handle errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error.response?.data?.message || error.message || "An error occurred";
    toast.error(message);
    return Promise.reject(error);
  }
);

export const chatApi = {
  fetchHistory: async (sessionId = DEFAULT_SESSION_ID) => {
    try {
      //   console.log("fetching History");
      const response = await api.get(`/history/${sessionId}`);
      //   console.log("History", response.data);

      return response.data;
    } catch (error) {
      console.error("Error fetching chat history:", error);
      throw error;
    }
  },

  sendMessage: async (message, sessionId = DEFAULT_SESSION_ID) => {
    try {
      //   console.log("sending Message", message);
      const response = await api.post("/chat", { message, sessionId });
      //   console.log("response", response.data);

      return response.data;
    } catch (error) {
      console.error("Error sending message:", error);
      throw error;
    }
  },

  resetSession: async (sessionId = DEFAULT_SESSION_ID) => {
    try {
      console.log("resetSession");
      const response = await api.post("/reset", { sessionId });
      return response.data;
    } catch (error) {
      console.error("Error resetting session:", error);
      throw error;
    }
  },
};
