"use client";
import 'dotenv/config'
import axios from "axios";
import { buttonCss } from "./AuthPage";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PenTool } from "lucide-react";

export default function SignIn() {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter();
    const [loading, setLoading] = useState(false)

    const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:3002";

    async function signIn() {
        setLoading(true)
        try {
            const res = await axios.post(`${BACKEND_URL}/excallidraw/auth/signin`, {
                email,
                password
            }, { withCredentials: true }
            );

            console.log("Signin response", res.data);
            alert(res.data.message);
            router.push("/dashboard")

        } catch (error) {
            console.error("Signin error:", error);
            alert(
                //@ts-ignore
                error?.response?.data?.message || "Signin failed. Check credentials."
            );
        }finally{
            setLoading(false)
        }
    }

    return (
        <div>



            <div className="relative p-3">

                {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400"
                >
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                </svg> */}

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=" absolute text-gray-500 left-6 top-1/2 -translate-y-1/2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>


                <input
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    className="w-full pl-10 pr-3 text-black py-2 border rounded-md focus:outline-none"
                />

            </div>

            <div className="relative p-3">

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400"
                >
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                </svg>

                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=" absolute text-gray-500 left-6 top-1/2 -translate-y-1/2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> */}


                <input
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@gmail.com"
                    className="w-full text-black pl-10 pr-3 py-2 border rounded-md focus:outline-none"
                />

            </div>
            <div className="relative p-3">

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400"
                >
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                </svg>



                <input
                    type="text"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="********"
                    className="w-full text-black pl-10 pr-3 py-2 border rounded-md focus:outline-none"
                />

            </div>
            <div className="p-2 m-2 rounded-2xl flex flex-col items-center pt-[2.5vw]">
                <button className={buttonCss} onClick={signIn} disabled={loading}>
                    {loading ? "Signing in..." : "Sign In"}
                </button>
            </div>

        </div>
    )
}