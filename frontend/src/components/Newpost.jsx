import React from 'react'

const Newpost = () => {
  return (
    <div className=" bg-[#0A2342] w-[1000px] lg:w-[1000px] max-lg:w-[1000px] md:w-[600px] max-md:w-[500px] max-sm:w-[350px] sm:w-[400px] h-[169px] flex flex-col justify-center rounded-md">
          <div className="  flex justify-between items-center mx-[60px] mb-3">
            <div className=" bg-[#53D8FB] w-[40px] h-[40px] flex justify-center items-center rounded-full">
              <img
                src={"./blokies.png"}
                alt="icon"
                className=" w-[23px] h-[23px] "
              />
            </div>
            <input
              type="text"
              name="post"
              placeholder="What's on your mind?"
              className=" py-[16px] px-[10px] w-[850px] lg:w-[800px] md:w-[400px] sm:w-[200px]  outline-none rounded-md "
            />
          </div>
          <div className=" flex justify-between mx-[60px] items-center">
            <div className=" flex gap-2">
              <img src={"./image.svg"} alt="" className=" w-[24px] h-[24px]" />
              <img src={"./movie.svg"} alt="" className=" w-[24px] h-[24px]" />
            </div>
            <button className=" bg-[#53D8FB] text-[16px] py-[9px] px-[20px] rounded-lg">
              Create a Post
            </button>
          </div>
        </div>
  )
}

export default Newpost
