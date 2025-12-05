import express from "express";
import { mainRouter } from "./feature-modules/index"
import cors from 'cors'

const app = express();
app.use(express.json());
app.use(cors())

app.use("/excallidraw", mainRouter)

app.listen(3002, () => console.log("server started at port: 3000"));
