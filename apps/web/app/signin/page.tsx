"use client"
import { PenTool } from "lucide-react";
import { LaserFlowBoxExample } from "../../components/LaserFlowBoxExample";

export default function SigninPage() {
  return <div className="w-screen h-screen overflow-hidden text-white relative">
    {/* <div className="absolute top-4 left-4 flex items-center gap-2">
      <div className="rounded w-8 h-8 flex justify-center items-center">
        <PenTool className="w-5 h-5 text-white" />
      </div>
      <span className="text-xl font-bold">SketchFlow</span>
    </div> */}
    {/* <div className="w-full h-full flex justify-center items-center"> */}
      <LaserFlowBoxExample isSignin={true}
      />;

    {/* </div> */}
  </div>
}