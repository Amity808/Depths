import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className=' flex max-sm:block lg:flex-row md:flex-row max-md:flex-col sm:flex-col mx-[108px] my-[10px] justify-center items-center gap-32 max-sm:flex-col'>
      <div >
        <div className=' text-[#9fc5df] text-[50px] max-sm:text-[30px] max-sm:font-normal font-bold w-[723px] max-sm:w-[390px] mb-[11px]'>
        <spam className=' text-white'>S</spam>a<span className=' text-white'>v</span>e <spam className=' text-white'>w</spam>i<spam className='text-white'>th</spam>out <spam className=' text-white'>f</spam>ear o<spam className=' text-white'>f</spam> <spam className=' text-white'>v</spam>a<spam className=' text-white'>l</spam>ue 
        <br /> <spam className=' text-white'>d</spam>e<spam className=' text-white'>pr</spam>e<spam>c</spam>ia<spam>t</spam>io<spam className=' text-white'>n</spam>
        </div>
        <span className=' w-[611px]'>
            <p className="savemoney w-[611px] max-sm:w-[380px]">Want to save money in crypto without the volatility? Try our web app and choose from different savings plans that suit your goals. Earn interest in stable coins and enjoy the benefits of the blockchain.</p>
        </span>
        <button className=' bg-[#53D8FB] rounded-lg text-white py-[14px] px-[28px] mt-[22px]'>Get Started</button>
      </div>
      <div className=' w-[520.791px] h-[350px]'>
        <img src={"./sideimg.png"} alt="img" className='w-[520.791px] h-[350px] max-sm:w-[380px] max-sm:h-[]' />
      </div>
    </div>
    <div>
      <img src={"./circlenull.svg"} alt="circle" />
    </div>
    </div>
  )
}

export default Hero
