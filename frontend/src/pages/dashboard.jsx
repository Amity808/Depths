import React from "react";
import backgroundd from "../../public/backround.png";
import { useState } from "react";
import Sidebar from "./Sidebar";

const Dasboard = () => {
  const [isActive, setIsActive] = useState(false);

  const [activeMenu, setActiveMenu] = useState("");

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
  };
  return (
    <div style={headerStyle} className=" h-screen flex ">
      <Sidebar />
      {/* add post  */}
      <div className=" ml-24 py-10  max-sm:ml-0 max-md:ml-0">
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
        <div className=" bg-[#0A2342] w-[1000px] lg:w-[1000px] max-lg:w-[1000px] md:w-[600px] max-md:w-[500px] max-sm:w-[350px] sm:w-[400px] h-[169px] flex flex-col justify-center rounded-md mt-[36px]">
          <div className=" flex justify-between items-center mx-[60px] mb-3">
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

        </div>
      </div>
    </div>
  );
};

export default Dasboard;
