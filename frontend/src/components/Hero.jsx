import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className=' flex lg:flex-row md:flex-row max-md:flex-col sm:flex-col mx-[108px] my-[10px] justify-center items-center gap-32 max-sm:flex-col'>
      <div className='' >
        <div className=' text-[#9fc5df] text-[50px] max-sm:text-[30px] max-sm:font-normal font-bold w-[723px] max-sm:w-[390px] mb-[11px]'>
        <spam className=' text-white'>D</spam>E<span className=' text-white'>P</span>T<spam className=' text-white'>H </spam>Enjoy <spam className='text-white'>Web3 Social</spam> <spam className=' text-white'>With</spam> US <spam className=' text-white'>We</spam> <spam className=' text-white'>VALUE</spam> YOU
        <br /> <spam className=' text-white'>Earn </spam> <spam className=' text-white'> Rewards</spam> With<spam> Us</spam> 
        </div>
        <span className=' w-[611px]'>
            <p className="savemoney w-[611px] max-sm:w-[380px]">Depths aims to redefine the social media landscape, creating a platform that prioritizes user rights, privacy, and content ownership.</p>
        </span>
        <button className=' bg-[#53D8FB] rounded-lg text-white py-[14px] px-[28px] mt-[22px]'>Get Started</button>
      </div>
      <div className=' w-[520.791px] h-[350px] max-sm:w-[390px]'>
        <img src={"./sideimg.png"} alt="img" className='w-[520.791px] h-[350px]' />
      </div>
    </div>
    <div>
      <img src={"./circlenull.svg"} alt="circle" />
    </div>
    </div>
  )
}

export default Hero
