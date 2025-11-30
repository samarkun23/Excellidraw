

const inputBoxCss = "border m-2 border-white/30 px-[3vw] py-3  text-cyan-50 rounded-xl"
const buttonCss = " bg-purple-400 hover:bg-purple-500 text-white font-bold rounded-full border px-[2vw] py-1.5 rounded-xl border-white/70"

const AuthPage = ({ isSignin }: {
    isSignin: boolean
}) => {

    return <div className=" w-screen text-white flex flex-col items-center ">
        <div className="text-2xl font-bold">{isSignin ? "Sign In" : "Sign Up"}</div>
        <div className="p-2 m-2 rounded-2xl flex flex-col items-center pt-[2.5vw]">

            { isSignin  ? "" :
                <div className="p-3">
                    <input type="text" placeholder="Username" className={inputBoxCss} />
                </div>
            }
            <div className="p-3">
                <input type="text" placeholder="youremail@gmail.com" className={inputBoxCss} />
            </div>
            <div className="p-5">
                <input type="password" placeholder="yourpassword" className={inputBoxCss} />
            </div>

            <div>
                <button onClick={() => {

                }} className={buttonCss}>{isSignin ? "Sign in" : "Sign up"}</button>
            </div>

            <div className="pt-4">
                {isSignin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
            </div>
        </div>
    </div>
}

export default AuthPage