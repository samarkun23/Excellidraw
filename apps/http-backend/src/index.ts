import express from "express";
import { mainRouter } from "./feature-modules/index"
import cors from 'cors'
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))
app.use(cookieParser())

app.use("/excallidraw", mainRouter)

app.listen(3002, () => console.log("server started at port: 3002"));
