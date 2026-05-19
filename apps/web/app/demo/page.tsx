export default function DemoPage() {
    return (
        <main>
            <video 
                autoPlay
                muted
                loop
                controls
                width="100%"
            >
                <source src="/demovideo/demo.mp4" type="video/mp4" />
            </video>
        </main>
    )
}