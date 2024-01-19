import React from 'react'
import ServiceCard from './Cards/ServiceCard'

const OurService = () => {

    const data = [
        {
            title: "Plan Selection",
            description: "Choosing and managing various savings plans, creating Circles, and setting savings goals.",
            img: "./plan.svg"
        },
        {
            title: "Fiat Currency Support",
            description: "Enabling transactions using fiat currency, including support for ATMs and locl currencies",
            img: "./fiat.svg"
        },
        {
            title: "Monthly Deduction Subscription",
            description: "Adding the feature for automated monthly deductions, enhancing user convenience.",
            img: "./spin.svg"
        }
    ]
  return (
    <div className="mb-[100px]">
        <div>
            <img src={"./leftcircle.png"} alt="left circle" className=' float-end max-sm:w-[20%] ' />
            
        </div>
        <div className=' flex justify-center items-center service '> 
            <span>
                <p>Our Services For Your Convenience</p>
                <img src={"./serviceline.png"} alt="underline" className='mt-[-23px] ' />
            </span>
        </div>
        <div className='  flex justify-center items-center'>
            <span className=' h-[108px] w-[1235px]'>
            <p className=' text-white text-[18px] font-normal text-center '>Want to save money in a smart and secure way? With our web app, you can choose from different savings plans that suit your needs and goals. You can also enjoy the benefits of stable coin crypto, which is less volatile and more reliable than other cryptocurrencies. Start saving today and watch your money grow!.</p>
            </span>
        </div>
        <div>
            <img src={"./ourservivecircle.svg"} alt="cirlce" className='' />
        </div>
        <div className=" flex justify-center item-center gap-[61px] max-sm:flex-col">
            {data.map((item) => (
                <ServiceCard data={item} key={item} />
            ))}
        </div>
    </div>
  )
}

export default OurService