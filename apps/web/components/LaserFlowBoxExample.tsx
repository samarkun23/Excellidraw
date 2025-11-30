import AuthPage from './AuthPage';
import Auth from './AuthPage';
import LaserFlow from './Laserflow';
// NOTE: You can also adjust the variables in the shader for super detailed customization

// Basic Usage
<div style={{ height: '800px', position: 'relative', overflow: 'hidden' }}>
  <LaserFlow />
</div>

// Image Example Interactive Reveal Effect
export function LaserFlowBoxExample({isSignin}:{isSignin:boolean}) {

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
        backgroundColor: '#060010',
      }}
    // onMouseMove={(e) => {
    //   const rect = e.currentTarget.getBoundingClientRect();
    //   const x = e.clientX - rect.left;
    //   const y = e.clientY - rect.top;
    //   const el = revealImgRef.current;
    //   if (el) {
    //     el.style.setProperty('--mx', `${x}px`);
    //     el.style.setProperty('--my', `${y + rect.height * 0.5}px`);
    //   }
    // }}
    // onMouseLeave={() => {
    //   const el = revealImgRef.current;
    //   if (el) {
    //     el.style.setProperty('--mx', '-9999px');
    //     el.style.setProperty('--my', '-9999px');
    //   }
    // }}
    >
      <LaserFlow
        horizontalBeamOffset={-0.142}
        verticalBeamOffset={0.28}
        color="#ac80ff"
      />

      {/* <div className='absolute bg-transparent'
        style={{
          transform: 'translateX(-50%)',
          // top: '15%',
          // left: '25%',
          width: '28%',
          height: '29vw',
          borderColor: 'white',
          borderWidth: "1px",
          borderStyle: "solid",
          borderRadius: '25px',
          display: 'flex',
          justifyContent: 'center',
          padding: '2vw',
          overflow: 'hidden'
        }}
      > */}
      <div
        className="
    absolute 
    bg-white/3
    backdrop-blur-lg
    border border-[#d1b8ff]
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
        <AuthPage isSignin={isSignin}/>
      </div>


      {/* <AuthPage /> */}

      {/* </div> */}
      <div className='text-white' style={{ fontSize: '30px', position: 'absolute', top: '40%', right: '15vw' }}>
        <h1>Welcome to the amazing course</h1>
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