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
        // display: 'flex',
        // flexDirection: "column",
        // justifyContent: 'center',
        // alignItems: 'center',
        height: '100vh',
        width: '100vw',
      };
  return (
    <div style={headerStyle} className=' h-screen' >
        <div className=' flex justify-between px-[132px] py-[72px] max-sm:px-[30px]'>
          <img src={"./depthlogo.png"} alt="depths" className=' w-[60px] h-[60px] ' />
          <button className=' bg-[#53D8FB] py-[23px] px-[43px] max-sm:py-[13px] max-sm:px-[23px] rounded-full font-bold text-[16px] text-white'>Connect Wallet</button>
        </div>
        <div className='px-[132px] py-[59px] max-sm:px-[30px]'>
        <span className=' text-[32px] font-bold max-sm:text-[16px] max-sm:font-normal flex flex-row  gap-2'>
            <h4 className=' text-white flex flex-col'>Ahoy there, matey, Welcome to </h4>
            <p className=' text-[#53D8FB] '>Depths</p>
            <p className=' text-white'>!!!</p>
        </span>
        <div className=''>
          <p  className='  text-white text-[18px] font-normal'>First things first, a name befittin' a true buccaneer and a mugshot more fearsome than Davy Jones himself! <br />
Shiver me timbers, we'll craft a legend the seven seas'll sing tales of! <br />
Arrr, savvy?</p>
        </div>
        </div>
        <div className=' flex justify-center item-center max-sm:gap-[45px] gap-[61px] '>
          <div className=' bg-[#53D8FB] w-[100px] h-[100px] rounded-full'>
            <img src={"./man.png"} alt="man" className='' />
          </div>
          <div className=' bg-[#53D8FB] w-[100px] h-[100px] rounded-full'>
            <img src={"./fish.png"} alt="fish" className='' />
          </div>
          <div className=' bg-[#53D8FB] w-[100px] h-[100px] rounded-full'>
            <img src={"./captain.png"} alt="captain" className='' />
          </div>
        </div>
        <div className=' flex justify-center item-center max-sm:gap-[45px] gap-[61px]  mt-11'>
          <div className=' bg-[#53D8FB] w-[100px] h-[100px] rounded-full'>
            <img src={"./fly.png"} alt="fly" className='' />
          </div>
          <div className=' bg-[#53D8FB] w-[100px] h-[100px] rounded-full'>
            <img src={"./fishw.png"} alt="fly" className='' />
          </div>
          <div className=' bg-[#53D8FB] w-[100px] h-[100px] rounded-full'>
            <img src={"./old.png"} alt="old" className='' />
          </div>
        </div>
        <div className='flex justify-center item-center max-sm:gap-[45px] gap-[61px]  mt-11'>
          <span>
            <img src={"./pen.svg"} alt="" />
          <input type="text" placeholder='Unique Username' className=' text-white' />
          </span>
          <button className=' bg-[#53D8FB] py-[22px] font-bold px-[40px] rounded-full'>Save</button>
        </div>
    </div>
  )
}

export default onboard