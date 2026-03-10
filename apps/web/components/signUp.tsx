'use client'
import axios from "axios"
import { useState } from "react"
import { buttonCss } from "./AuthPage";
import { useRouter } from "next/navigation";

export default function SignUp() {


    const [username, setUsername] = useState("");
    const [email , setEmail] = useState("");
    const [password, setPassword] = useState("")

    const router = useRouter();

    async function signUp() {
        try {
            const res = await axios.post("http://localhost:3002/excallidraw/auth/signup", {
                username,
                email,
                password
            });

            console.log(res);
            alert('Signup successful');
            router.push("/signin") 
        } catch (error) {
            console.log(error);
            alert("Signup failed");
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



                <input
                    type="text"
                    placeholder="your@gmail.com"
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-black pl-10 pr-3 py-2 border rounded-md focus:outline-none"
                />

            </div>
            <div className="relative p-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400"><path d="M19 16v-2a2 2 0 0 0-4 0v2" /><path d="M9.5 15H7a4 4 0 0 0-4 4v2" /><circle cx="10" cy="7" r="4" /><rect x="13" y="16" width="8" height="5" rx=".899" /></svg>

                <input
                    type="text"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 text-black pr-3 py-2 border rounded-md focus:outline-none"
                />

            </div>
            <div className="p-2 m-2 rounded-2xl flex flex-col items-center pt-[2.5vw]">
                <button className={buttonCss} onClick={signUp}>
                    Signup
                </button>
            </div>

        </div>
    )
}