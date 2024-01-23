import React from 'react'
import backgroundd from "../../public/backround.png"

const onboard = () => {

    const headerStyle = {
        backgroundImage: `url(${backgroundd.src})`,
        /* Additional styles can be added here */
    
        // Set background size to cover the container by default
        backgroundSize: "cover",
    
        // Center the background image by default
        backgroundPosition: "center",
    
        // Media query for mobile devices
        "@media (maxWidth: 768px)": {
          backgroundSize: "auto", // Adjust background size for smaller screens
          backgroundPosition: "center", // You can adjust this as needed
        },
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
      };
  return (
    <div style={headerStyle} className=' h-screen' >
        
        <img src={"./depthlogo.png"} alt="depths" className=' w-[250px] h-[250px] ' />
        <span className=' flex justify-center flex-row items-center gap-2'>
            <h4 className=' text-[32px] font-bold text-white flex flex-col'>Ready to swim in the </h4>
            <p className=' text-[#53D8FB] text-[32px] font-bold'>Depths?</p>
        </span>
        <button className=' bg-[#53D8FB] py-[23px] px-[43px] rounded-full font-bold text-[16px] text-white'>Connect Wallet</button>
    </div>
  )
}

export default onboard