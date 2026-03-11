"use client"

import { useRouter } from "next/navigation"

export function CanvasShareMenu() {

    const router = useRouter();
    const handleCopy = async () => {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
        console.log("Link copied!");
    };

    return (
        <div className="flex items-center gap-10 text-white">
            <button onClick={
                handleCopy
            }>

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:text-blue-300 lucide lucide-share2-icon lucide-share-2 cursor-pointer"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" x2="15.42" y1="13.51" y2="17.49" /><line x1="15.41" x2="8.59" y1="6.51" y2="10.49" /></svg>
            </button>

            <button onClick={() => {
                router.push('/dashboard')
            }}>

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:text-blue-300 cursor-pointer lucide lucide-square-arrow-right-exit-icon lucide-square-arrow-right-exit"><path d="M10 12h11" /><path d="m17 16 4-4-4-4" /><path d="M21 6.344V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1.344" /></svg>
            </button>
        </div>
    )
}

