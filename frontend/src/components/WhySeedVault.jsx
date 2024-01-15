import React from 'react'
import Diagram from './Diagram'

const WhySeedVault = () => {
  return (
    <div>
        <div className=' flex justify-center items-center service '> 
            <span>
                <p>Why use SeedVault?</p>
                <img src={"./line.png"} alt="underline" className='mt-[-23px] ' />
            </span>
        </div>
        <div className='  flex justify-center items-center'>
            <span className=' h-[108px] w-[1235px]'>
            <p className=' text-white text-[18px] font-normal text-center '>Why use our app? Because we offer you a smart and easy way to save money in stable coins, which are cryptocurrencies that are pegged to real-world currencies or assets. With our app, you can create your own savings plans, choose how much and how often you want to save, and enjoy the benefits of earning interest on your savings without worrying about price volatility. Whether you want to save for a rainy day, a vacation, or a big purchase, our app can help you achieve your goals faster and safer.</p>
            </span>
        </div>
        <div>
            <img src={"./whycircle.svg"} alt="circle" className=' float-end max-sm:w-[20%] ' />
        </div>
        <Diagram />
    </div>
  )
}

export default WhySeedVault
// w-[1235px] lg:w-[1235px] md:w-[800px] sm:w-[390px]