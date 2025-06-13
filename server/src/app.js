import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import helmet from "helmet";
import conf from "./conf.js";

const app = express();
app.use(bodyParser.json());

app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

app.use(
  cors({
    origin: (origin, callback) => {
      const allowedOrigins = [
        conf.CORS_ORIGIN1?.replace(/\/$/, ""),
        conf.CORS_ORIGIN2?.replace(/\/$/, ""),
        conf.CORS_ORIGIN3?.replace(/\/$/, ""),
      ];

      const cleanedOrigin = origin?.replace(/\/$/, "");

      if (!origin || allowedOrigins.includes(cleanedOrigin)) {
        // console.log(
        //   `✅ CORS Allowed: ${
        //     origin || "undefined (same-origin or non-browser)"
        //   }`
        // );
        callback(null, true);
      } else {
        console.warn(`❌ CORS Blocked: ${origin}`);
        callback(new Error(`Origin ${origin} not allowed by CORS`));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  })
);

app.disable("x-powered-by");
app.use((req, res, next) => {
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-XSS-Protection", "1; mode=block");
  res.setHeader(
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload"
  );
  next();
});

app.use(express.json());
app.use(express.static("public"));
app.use(cookieParser());

import Routes from "./routes/index.js";
app.use("/api", Routes);

app.post("/testing", (req, res) => {
  console.log("Testing");
  res.send("Hello testing completed");
});

app.get("/", (req, res) => {
  res.send("Welcome to the Express Server!");
});

export { app };
