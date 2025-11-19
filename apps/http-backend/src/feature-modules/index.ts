import {Router} from 'express'
import { authRouter } from './auth/auth.service';

const mainRouter: Router = Router();

mainRouter.use("/auth", authRouter)

export { mainRouter }
