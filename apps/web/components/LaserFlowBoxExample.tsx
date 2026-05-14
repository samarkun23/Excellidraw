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
    <div>
      
        <AuthPage isSignin={isSignin} />


      {/* <AuthPage /> */}

      {/* </div> */}
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