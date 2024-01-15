import React from 'react'

const ServiceCard = ({ data }) => {
  return (
    <div className=' mb-5'>
        <div className=' ourservice flex justify-center items-center flex-col'>
        <div className=' bg-[#53d8fb] rounded-full w-[80px] h-[80px] flex justify-center items-center'>
            <img src={data.img} alt="" className=' w-[50px] h-[50px]' />
        </div>
        <span>
            <p className=' text-center text-white text-[30px] font-medium'>{data.title}</p>
        </span>
        <span className=' text-center text-white'>
            <p>{data.description}</p>
        </span>
        </div>
    </div>
  )
}

export default ServiceCard