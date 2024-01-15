import React from 'react'

const Diagram = () => {
  return (
    <div>
        <div className=' flex justify-center items-center'>
            <img src={"./straightline.svg"} alt="" />
        </div>
        <div>
            <img src={'./sline.svg'} alt="sline" className=' relative bottom-[40rem] left-[48rem]' />
        </div>
    </div>
  )
}

export default Diagram