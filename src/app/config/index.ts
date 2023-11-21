import dotenv from "dotenv";
import path from "path";

// dotenv.config({ path: path.resolve(__dirname, "../../.env") })
dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  PORT: process.env.PORT || 3000,
  MONGODB_URL: process.env.DATABASE_URL,
};
