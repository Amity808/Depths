import React from "react";
import backgroundd from "../../public/backround.png";
import { useState } from "react";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);

  const [activeMenu, setActiveMenu] = useState("")
   

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const handleMenuClick = (id) => {
    setActiveMenu(id);
   };
   

  const headerStyle = {
    backgroundImage: `url(${backgroundd.src})`,
    

    backgroundSize: "cover",
    backgroundPosition: "center",

    // Media query for mobile devices
    "@media (maxWidth: 768px)": {
      backgroundSize: "auto", 
      backgroundPosition: "center", 
    },

  };
  return (
    <div className=" h-screen">
      {/* sidebar */}
      <div className=" w-[280px] h-screen bg-[#0A2342]">
        <div className=" flex justify-center items-center pt-[56px] flex-col">
          <div>
            <img
              src={"./depthlogo.png"}
              alt="depths"
              className=" w-[64.012px] h-[61.44px] "
            />
          </div>
          {/* menu */}
          <div className=" mt-[94px]">
            <div className=" text-white flex justify-center items-center text-[15px] font-bold gap-5 mt-[10px]">
              <div
                className={`smalltin ${activeMenu === 'home' ? 'bg-[#44b4d6]' : 'bg-[#0A2342]'}`}
              ></div>
              <span
                onClick={() => setActiveMenu('home')}
                className={` flex gap-4  ${activeMenu === 'home' ? 'bg-[#44b4d6]' : 'bg-[#0A2342]'} w-[207px] h-[64px] justify-center items-center rounded-md`}
              >
                <img
                  src={"./home.svg"}
                  alt="icon"
                  className=" w-[25px] h-[25px]"
                />
                <a href="/new">Home</a>
              </span>
            </div>

            <div className=" mt-[10px] text-white flex justify-center items-center text-[15px] font-bold gap-5">
              <div className={`smalltin ${activeMenu === 'pod' ? 'bg-[#44b4d6]' : 'bg-[#0A2342]'}`}></div>
              <span
                onClick={() => setActiveMenu('pod')}
                className={` flex gap-4 ${activeMenu === 'pod' ? 'bg-[#44b4d6]' : 'bg-[#0A2342]'} w-[207px] h-[64px] justify-center items-center rounded-md`}
              >
                <img
                  src={"./pod.svg"}
                  alt="icon"
                  className=" w-[25px] h-[25px]"
                />
                <p>The Pods</p>
              </span>
            </div>

            <div className=" mt-[10px] text-white flex justify-center items-center text-[15px] font-bold gap-5">
              <div className={`smalltin ${activeMenu === 'lagoon' ? 'bg-[#44b4d6]' : 'bg-[#0A2342]'}`}></div>
              <span 
              onClick={() => setActiveMenu('lagoon')}
              className={` flex gap-4 ${activeMenu === 'lagoon' ? 'bg-[#44b4d6]' : 'bg-[#0A2342]'} w-[207px] h-[64px] justify-center items-center rounded-md`}>
                <img
                  src={"./lagoon.svg"}
                  alt="icon"
                  className=" w-[25px] h-[25px]"
                />
                <p>The Lagoon</p>
              </span>
            </div>

            <div className=" mt-[10px] text-white flex justify-center items-center text-[15px] font-bold gap-5">
              <div className={`smalltin ${activeMenu === 'atlan' ? 'bg-[#44b4d6]' : 'bg-[#0A2342]'}`}></div>
              <span className={` flex gap-4 ${activeMenu === 'atlan' ? 'bg-[#44b4d6]' : 'bg-[#0A2342]'} w-[207px] h-[64px] justify-center items-center rounded-md`}
              onClick={() => setActiveMenu('atlan')}>
                <img
                  src={"./atlan.svg"}
                  alt="icon"
                  className=" w-[25px] h-[25px]"
                />
                <p>Governance</p>
              </span>
            </div>

            <div className=" mt-[10px] text-white flex justify-center items-center text-[15px] font-bold gap-5">
              <div className={`smalltin ${activeMenu === 'profile' ? 'bg-[#44b4d6]' : 'bg-[#0A2342]'}`}></div>
              <span className={` flex gap-4 ${activeMenu === 'profile' ? 'bg-[#44b4d6]' : 'bg-[#0A2342]'} w-[207px] h-[64px] justify-center items-center rounded-md`}
              onClick={() => setActiveMenu('profile')}>
                <img
                  src={"./profile.svg"}
                  alt="icon"
                  className=" w-[25px] h-[25px]"
                />
                <p>Profile</p>
              </span>
            </div>

            <div className=" mt-[10px] text-white flex justify-center items-center text-[15px] font-bold gap-5">
              <div className={`smalltin ${activeMenu === 'settings' ? 'bg-[#44b4d6]' : 'bg-[#0A2342]'}`}></div>
              <span className={` flex gap-4 ${activeMenu === 'settings' ? 'bg-[#44b4d6]' : 'bg-[#0A2342]'} w-[207px] h-[64px] justify-center items-center rounded-md`}  onClick={() => setActiveMenu('settings')}>
                <img
                  src={"./settings.svg"}
                  alt="icon"
                  className=" w-[25px] h-[25px]"
                />
                <p>Settings</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
