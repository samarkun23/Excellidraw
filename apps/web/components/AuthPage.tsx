"use client";

import { useRouter } from "next/navigation";
import SignIn from "./signIn";
import SignUp from "./signUp";
import {
  PenTool,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export const buttonCss =
  "bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-5 py-2 rounded-xl transition-all duration-300";

const AuthPage = ({ isSignin }: { isSignin: boolean }) => {
  const router = useRouter();

  return (
    <div className="min-h-screen w-screen bg-black text-white overflow-hidden relative flex items-center justify-center px-6 py-10">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1f1f1f_0%,#000_45%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-fuchsia-500/10 blur-[120px] rounded-full" />

      <div className="relative z-10 grid lg:grid-cols-2 w-full max-w-6xl rounded-[32px] overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-2xl shadow-2xl">
        
        {/* Left Section */}
        <div className="hidden lg:flex flex-col justify-between p-12 border-r border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent">
          
          <div>
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center">
                <PenTool className="w-5 h-5 text-white" />
              </div>

              <div>
                <h1 className="text-2xl font-bold tracking-wide">
                  SketchFlow
                </h1>

                <p className="text-sm text-gray-400">
                  Real-time collaboration
                </p>
              </div>
            </div>

            {/* Hero Text */}
            <div className="mt-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-sm text-indigo-300">
                <Sparkles className="w-4 h-4" />
                Creative collaboration platform
              </div>

              <h2 className="mt-8 text-5xl font-black leading-tight">
                Turn ideas into
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-400">
                  visual workflows
                </span>
              </h2>

              <p className="mt-6 text-gray-400 text-lg leading-relaxed max-w-md">
                Brainstorm, sketch, and collaborate with your team in
                real-time using an infinite digital canvas.
              </p>
            </div>
          </div>

          {/* Bottom Features */}
          <div className="space-y-5">
            <div className="flex items-center gap-3 text-gray-300">
              <ShieldCheck className="w-5 h-5 text-green-400" />
              Secure authentication
            </div>

            <div className="flex items-center gap-3 text-gray-300">
              <ShieldCheck className="w-5 h-5 text-green-400" />
              Real-time collaboration
            </div>

            <div className="flex items-center gap-3 text-gray-300">
              <ShieldCheck className="w-5 h-5 text-green-400" />
              Unlimited boards & sketches
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-center p-8 md:p-14">
          <div className="w-full max-w-md">
            
            {/* Mobile Logo */}
            <div className="lg:hidden flex items-center justify-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
                <PenTool className="w-5 h-5 text-white" />
              </div>

              <h1 className="text-2xl font-bold">
                SketchFlow
              </h1>
            </div>

            {/* Heading */}
            <div className="text-center">
              <h2 className="text-4xl font-bold">
                {isSignin ? "Welcome Back" : "Create Account"}
              </h2>

              <p className="mt-3 text-gray-400">
                {isSignin
                  ? "Sign in to continue collaborating with your team."
                  : "Start collaborating visually in minutes."}
              </p>
            </div>

            {/* Form Card */}
            <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-7 md:p-8">
              {isSignin ? <SignIn /> : <SignUp />}
            </div>

            {/* Footer Switch */}
            <div className="mt-8 text-center text-gray-400">
              {isSignin ? (
                <p>
                  Don&apos;t have an account?{" "}
                  <button
                    onClick={() => router.push("/signup")}
                    className="text-white font-medium hover:text-indigo-300 transition inline-flex items-center gap-1"
                  >
                    Sign up
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </p>
              ) : (
                <p>
                  Already have an account?{" "}
                  <button
                    onClick={() => router.push("/signin")}
                    className="text-white font-medium hover:text-indigo-300 transition inline-flex items-center gap-1"
                  >
                    Sign in
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;