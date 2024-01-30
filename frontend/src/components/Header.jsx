import React from "react";
import { useState } from "react";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState("");
  return (
    <div className=" mb-5">
      <div className=" w-[1000px] lg:w-[1000px] max-lg:w-[1000px] md:w-[600px] max-md:w-[500px] max-sm:w-[350px] sm:w-[400px] flex flex-col justify-center rounded-md mt-[36px]">
        <img src={"./headerbg.svg"} alt="header" className=" " />
      </div>
      <div className=" relative bottom-[32px] left-[16px]">
        <div className=" bg-[#53D8FB] w-[75px] h-[75px] flex justify-center items-center rounded-full ">
          <img
            src={"./blokies.png"}
            alt="icon"
            className=" w-[44px] h-[44px] "
          />
        </div>
      </div>
      <div className=" flex flex-col ml-3">
        <h3 className=" text-[20px] font-bold text-white">Davvy Jones</h3>
        <div className=" flex gap-1 mt-2">
          <div className=" flex text-[16px] font-bold gap-1">
            <p className=" text-[16px] font-bold text-[#66C3FF]">200</p>
            <p className=" text-white font-normal">Likes</p>
          </div>
          <div className=" flex text-[16px] font-bold gap-1">
            <p className=" text-[16px] font-bold text-[#66C3FF]">22k</p>
            <p className=" text-white font-normal">followers</p>
          </div>
        </div>
      </div>

      <div className=" w-[1000px] lg:w-[1000px] max-lg:w-[1000px] md:w-[600px] max-md:w-[500px] max-sm:w-[350px] sm:w-[400px] flex flex-col justify-center rounded-b-2xl mt-[36px] border-b-[1px]">
        <div className=" ml-[30px] flex gap-[40px] text-[16px] font-bold">
          <a
            href="#"
            onClick={() => setActiveMenu('post')}
            className=" text-white  border-[#53D8FB] ml-[5px]"
          >
            Posts
          </a>
          <a href="#" onClick={() => setActiveMenu('fav')} className=" text-white ml-[40px]">
            Favourites
          </a>
        </div>
      </div>
      <div className=" flex">
        <div className={` h-[4px] w-[98px] ml-[10px] ${activeMenu === 'post' ? 'bg-[#44b4d6] border-[#44b4d6] hover:border-b-2' : 'bg-none'}`}></div>
        <div className={` ${activeMenu === 'fav' ? 'bg-[#44b4d6]' : 'bg-none'} h-[4px] w-[98px] ml-[32px] `}></div>
      </div>
    </div>
  );
};

export default Header;
