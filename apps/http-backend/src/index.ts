import express from "express";
import { mainRouter } from "./feature-modules/index"

const app = express();
app.use(express.json());

app.use("/excallidraw", mainRouter)

app.listen(3002, () => console.log("server started at port: 3000"));
