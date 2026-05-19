import 'dotenv/config'
import express from "express";
import { mainRouter } from "./feature-modules/index"
import cors from 'cors'
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true
}))
app.use(cookieParser())

app.use("/excallidraw", mainRouter)

app.listen(PORT, () => console.log(`server started at port: ${PORT}`));
