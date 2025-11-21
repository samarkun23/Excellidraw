import {Router} from 'express'
import { authRouter } from './auth/auth.service';
import { roomRouter } from './room/room';

const mainRouter: Router = Router();

mainRouter.use("/auth", authRouter);
mainRouter.use("/room", roomRouter);

export { mainRouter }
