'use client';
import { useRouter } from "next/navigation";
import { RoomCanvas } from "../../../components/RoomCanvas";
import { use, useEffect, useState } from "react";
import axios from "axios";

export default function CanvasPage({ params }: {
    params:Promise < {
        roomId: string
    }>
}) {
    const { roomId } = use(params);
    const router = useRouter();
    const [user, setUser] = useState<null>(null);

    useEffect(() => {
        if (!roomId) {
            alert("Invalid room id");
            router.push("/signin")
            return;
        }

        async function validateToken() {

            try {
                const res = await axios.get("http://localhost:3002/excallidraw/auth/validate", { withCredentials: true });
                setUser(res.data.user);

                if (res.status === 401) {
                    router.push("/signin");
                }
            } catch (error) {
                console.log(error);
                router.push("/signin");
            }
        }
        validateToken();


    }, [roomId, router])

    if (!user) {
        return <div className="flex items-center justify-center h-screen w-screen bg-[#000000] text-white font-sans">
            <div className="text-lg">Loading...</div>
        </div>
    }

    return <RoomCanvas roomId={roomId} />
}
