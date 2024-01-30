import React from 'react'

const UserPost = () => {
  return (
    <div className=" bg-[#0A2342] w-[1000px] lg:w-[1000px] max-lg:w-[1000px] md:w-[600px] max-md:w-[500px] max-sm:w-[350px] sm:w-[400px] flex flex-col justify-center rounded-md mt-[36px]">
          <div className=" flex justify-between items-center mx-[60px] mb-3 mt-3">
            <div className=" flex flex-row justify-center items-center gap-2">
            <div className=" bg-[#53D8FB] w-[40px] h-[40px] flex justify-center items-center rounded-full">
              <img
                src={"./blokies.png"}
                alt="icon"
                className=" w-[23px] h-[23px] "
              />
            </div>
            <div className=" text-white ">
              <p>Bolarinwa</p>
              <p>12:30pm</p>
            </div>
            </div>
            <div>
              <img src={"./option.svg"} alt="icon"
                className=" w-[23px] h-[23px] " />
            </div>
          </div>
          <div className=" text-white text-[16px] flex justify-between items-center mx-[60px] mb-3">
            {/* image
            
            */}
              <p>In the fast-paced world of corporate life, it's crucial to prioritize your mental peace. Take moments to breathe, reflect, and recharge. Seek solace in small rituals, like morning walks, deep breaths, or a quick meditation session during breaks. </p>
          </div>
          <div className="  text-white text-[16px] flex justify-between items-center mx-[60px] mb-3">
            <div className=" gap-2 flex">
            <div className=" flex justify-center items-center gap-1">
              <img src={"./heart.svg"} alt="icon"
                className=" w-[23px] h-[23px] " />
                <p>22k Likes</p>
            </div>
            <div className=" flex justify-center items-center gap-1">
              <img src={"./comment.svg"} alt="icon"
                className=" w-[23px] h-[23px] " />
                <p>7 replies</p>
            </div>
            </div>
            <div className=" text-white text-[16px] flex justify-center items-center gap-1">
              <img src={"./upvote.svg"} alt="icon" className=" w-[23px] h-[23px]" />
              <p>Upvote</p>
            </div>
          </div>

        </div>
  )
}

export default UserPost
