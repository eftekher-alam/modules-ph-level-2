import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
    PORT: process.env.PORT,
    DATABASE_CONNECTION: process.env.DATABASE_CONNECTION
}