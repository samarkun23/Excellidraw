"use client"
import { useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { LaserFlowBoxExample } from "../components/LaserFlowBoxExample";
import Dashboard from "@repo/ui/Dashboard"

export default function Home() {
  const [roomId, setRoomId] = useState("");
  const router = useRouter();

  return (
    <div className="bg-[#060010]">
        <Dashboard />
    </div>
  );
}
