import cors from "cors";
import { ENV } from "./env.js";

export const corsOptions = {
    origin: ENV.CLIENT_URL || "http://localhost:5000",
    credentials: true,
};
