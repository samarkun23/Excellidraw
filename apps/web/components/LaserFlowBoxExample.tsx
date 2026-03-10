import { PenTool } from 'lucide-react';
import AuthPage from './AuthPage';
import Auth from './AuthPage';
import LaserFlow from './Laserflow';
import { useRouter } from 'next/navigation';
import { rotate } from 'three/tsl';
// NOTE: You can also adjust the variables in the shader for super detailed customization

// Basic Usage
<div style={{ height: '800px', position: 'relative', overflow: 'hidden' }}>
  <LaserFlow />
</div>

// Image Example Interactive Reveal Effect
export function LaserFlowBoxExample({ isSignin }: { isSignin: boolean }) {
  const router = useRouter();

  return (
    <div
      style={{
        height: "100vh",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#000000',
      }}
    >
      <LaserFlow
        horizontalBeamOffset={-0.142}
        verticalBeamOffset={0.28}
        color="#bdbdbd"
      />
      <div className="absolute top-4 left-4 flex items-center gap-2 hover:cursor-pointer" onClick={() => { router.push("/") }}>
        <div className="rounded w-8 h-8 flex justify-center items-center">
          <PenTool className="w-5 h-5 text-white" />
        </div>
        <span className="text-xl font-bold text-white">SketchFlow</span>
      </div>

      <div
        className="
    absolute 
    bg-white/3
    backdrop-blur-lg
    border border-[#e6e6e6]
    rounded-[25px]
    flex justify-center
    p-[2vw]
    overflow-visible
    z-50
  "
        style={{
          transform: "translateX(-50%)",
          width: "28%",
          height: "29vw",
        }}
      >
        <AuthPage isSignin={isSignin} />
      </div>


      {/* <AuthPage /> */}

      {/* </div> */}
      <div className='text-white' style={{ fontSize: '30px', position: 'absolute', top: '40%', right: '15vw' }}>
        <h1>Welcome to the <a className='text-indigo-500'>SketchFlow </a></h1>
      </div>
      {/* <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '86%',
        height: '60%',
        backgroundColor: '#060010',
        borderRadius: '20px',
        border: '2px solid #FF79C6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '2rem',
        zIndex: 6
      }}>
        {/* Your content here */}
      {/* </div> */}

    </div>
  );
}