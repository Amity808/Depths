import React from 'react'

const Diagram = () => {
  return (
    <div>
        <div className=' flex justify-center items-center'>
            <img src={"./straightline.svg"} alt="" />
        </div>
        <div>
        <img src={'./sline.svg'} alt="sline" className=' relative bottom-[80rem] left-[48rem]' />
            <img src={'./sline.svg'} alt="sline" className=' relative bottom-[62rem] left-[62.5rem]' />
            <img src={'./sline.svg'} alt="sline" className=' relative bottom-[44rem] left-[48rem]' />
            <img src={'./sline.svg'} alt="sline" className=' relative bottom-[25rem] left-[62.5rem]' />
        </div>
    </div>
  )
}

export default Diagram