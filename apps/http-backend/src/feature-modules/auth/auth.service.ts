import { Request, Response, Router } from "express"
import { registerSchema, loginSchema } from "@repo/common/types"
import { prismaClient } from '@repo/db/client'
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "@repo/be-common/config"
import bcrypt from 'bcrypt'

export const authRouter: Router = Router();
const saltRounds = 15;


authRouter.post("/signup", async (req: Request, res: Response) => {

  const Parsedata = registerSchema.safeParse(req.body);
  if (!Parsedata.success) {
    res.json({
      message: "Invalid credentials"
    })
    return;
  }

  try {

    let userEmail = await prismaClient.userSchema.findUnique({
      where: { email: Parsedata.data.email, username: Parsedata.data.username }
    })

    if (userEmail) { return res.status(400).json({ message: "This email or username already exists" }) }

    const hashedPassword = await bcrypt.hash(Parsedata.data.password, saltRounds)

    await prismaClient.userSchema.create({
      data: {
        username: Parsedata.data.username,
        email: Parsedata.data.email,
        password: hashedPassword
      }
    })

    res.json({
      message: "user created "
    })
  } catch (error) {
    res.status(401).json({
      message: "Problem in user signup"
    })
  }

})

export const login = async (req: Request, res: Response) => {

  const Parsedata = loginSchema.safeParse(req.body);
  if (!Parsedata.success) {
    return res.json({
      message: "Invalid credentials"
    })
  }

  let user;

  if (Parsedata.data?.email) {
    user = await prismaClient.userSchema.findUnique({
      where: { email: Parsedata.data.email }
    });
  } else if (Parsedata.data?.username) {
    user = await prismaClient.userSchema.findUnique({
      where: { username: Parsedata.data.username }
    })
  }

  if (!user) throw new Error("User not found!");

  const isPasswordValid = await bcrypt.compare(
    Parsedata.data?.password,
    user.password
  )

  if(!isPasswordValid){
    return res.status(401).json({message: "Incorrect Password"});
  }

  const token = jwt.sign({
    userId: user.id
  }, JWT_SECRET, {expiresIn:"7D"})
  return res.json({ token, message: "User signin" });

}
