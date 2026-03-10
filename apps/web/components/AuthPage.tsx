'use client'
import { useRouter } from "next/navigation";
import SignIn from "./signIn";
import SignUp from "./signUp";
import { PenTool } from "lucide-react";


export const buttonCss = " bg-indigo-400 hover:bg-indigo-500 text-white font-bold rounded-full border px-5 py-1.5 rounded-xl border-white/70"


const AuthPage = ({ isSignin }: {
    isSignin: boolean
}) => {
    const router = useRouter()

    return <div className=" w-screen text-white flex flex-col items-center ">

        <div className="text-2xl font-bold">{isSignin ? "Sign In" : "Sign Up"}</div>
        <div className="p-2 m-2 rounded-2xl flex flex-col items-center pt-[2.5vw]">


            {isSignin ? <SignIn /> : <SignUp />}

        </div>

        {/* <div>
            <button onClick={() => {

            }} className={`${buttonCss}`}>{isSignin ? "Sign in" : "Sign up"}</button>
        </div> */}

        <div className="pt-4 mt-3 hover:text-white/80 hover:cursor-pointer" onClick={() => router.push(isSignin ? '/signup' : 'signin')}>
            {isSignin ?
                "Don't have an account? Sign up"
                :
                "Already have an account? Sign in"}
        </div>
    </div>
}

export default AuthPage