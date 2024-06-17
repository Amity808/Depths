import React from "react";
import backgroundd from "../../public/backround.png";
import { useState, useEffect } from "react";

const Dasboard = () => {
  const [isActive, setIsActive] = useState(false);

  const [activeMenu, setActiveMenu] = useState("");

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const handleMenuClick = (id) => {
    setActiveMenu(id);
    localStorage.setItem("activeMenu", id);
  };

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
    // display: 'flex',
    // flexDirection: "column",
    // justifyContent: 'center',
    // alignItems: 'center',
    // height: '100vh',
    // width: '100vw',
  };

  useEffect(() => {
    const savedMenu = localStorage.getItem("activeMenu");
    if (savedMenu) {
      setActiveMenu(savedMenu);
    }
  }, []);

  return (
    <div style={headerStyle} className=" h-screen">
      {/* sidebar */}
      <div className=" w-[280px] h-screen bg-[#0A2342]">
        <div className=" flex justify-center items-center mt-[56px] flex-col">
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
                className={`smalltin ${
                  activeMenu === "home" ? "bg-[#44b4d6]" : "bg-[#0A2342]"
                }`}
              ></div>
              <a href="/new">
                <span
                  onClick={() => {
                    setActiveMenu("home");
                    localStorage.setItem("activeMenu", "home");
                  }}
                  className={` flex gap-4  ${
                    activeMenu === "home" ? "bg-[#44b4d6]" : "bg-[#0A2342]"
                  } w-[207px] h-[64px] justify-center items-center rounded-md`}
                >
                  <img
                    src={"./home.svg"}
                    alt="icon"
                    className=" w-[25px] h-[25px] mr-[17px]"
                  />
                  <p>Home</p>
                </span>
              </a>
            </div>

            <div className=" mt-[10px] text-white flex justify-center items-center text-[15px] font-bold gap-5">
              <div
                className={`smalltin ${
                  activeMenu === "pod" ? "bg-[#44b4d6]" : "bg-[#0A2342]"
                }`}
              ></div>
              <a href="/new">
                <span
                  onClick={() => {
                    setActiveMenu("pod");
                    localStorage.setItem("activeMenu", "pod");
                  }}
                  className={` flex gap-4 ${
                    activeMenu === "pod" ? "bg-[#44b4d6]" : "bg-[#0A2342]"
                  } w-[207px] h-[64px] justify-center items-center rounded-md`}
                >
                  <img
                    src={"./pod.svg"}
                    alt="icon"
                    className=" w-[25px] h-[25px] mr-[17px]"
                  />
                  <p>The Pods</p>
                </span>
              </a>
            </div>

            <div className=" mt-[10px] text-white flex justify-center items-center text-[15px] font-bold gap-5">
              <div
                className={`smalltin ${
                  activeMenu === "lagoon" ? "bg-[#44b4d6]" : "bg-[#0A2342]"
                }`}
              ></div>
              <span
                onClick={() => {
                    setActiveMenu("lagoon");
                    localStorage.setItem("activeMenu", "lagoon");
                  }}
                className={` flex gap-4 ${
                  activeMenu === "lagoon" ? "bg-[#44b4d6]" : "bg-[#0A2342]"
                } w-[207px] h-[64px] justify-center items-center rounded-md`}
              >
                <img
                  src={"./lagoon.svg"}
                  alt="icon"
                  className=" w-[25px] h-[25px] "
                />
                <p>The Lagoon</p>
              </span>
            </div>

            <div className=" mt-[10px] text-white flex justify-center items-center text-[15px] font-bold gap-5">
              <div
                className={`smalltin ${
                  activeMenu === "atlan" ? "bg-[#44b4d6]" : "bg-[#0A2342]"
                }`}
              ></div>
              <span
                className={` flex gap-4 ${
                  activeMenu === "atlan" ? "bg-[#44b4d6]" : "bg-[#0A2342]"
                } w-[207px] h-[64px] justify-center items-center rounded-md`}
                onClick={() => {
                    setActiveMenu("atlan");
                    localStorage.setItem("activeMenu", "atlan");
                  }}
              >
                <img
                  src={"./atlan.svg"}
                  alt="icon"
                  className=" w-[25px] h-[25px]"
                />
                <p>Governance</p>
              </span>
            </div>

            <div className=" mt-[10px] text-white flex justify-center items-center text-[15px] font-bold gap-5">
              <a href="/profile">
              <div
                className={`smalltin ${
                  activeMenu === "profile" ? "bg-[#44b4d6]" : "bg-[#0A2342]"
                }`}
                ></div>
              <span
                className={` flex gap-4 ${
                  activeMenu === "profile" ? "bg-[#44b4d6]" : "bg-[#0A2342]"
                } w-[207px] h-[64px] justify-center items-center rounded-md`}
                onClick={() => {
                  setActiveMenu("profile");
                  localStorage.setItem("activeMenu", "profile");
                }}
                >
                <img
                  src={"./profile.svg"}
                  alt="icon"
                  className=" w-[25px] h-[25px] mr-[20px]"
                  />
                <p>Profile</p>
              </span>
                  </a>
            </div>

            <div className=" mt-[10px] text-white flex justify-center items-center text-[15px] font-bold gap-5">
              <div
                className={`smalltin ${
                  activeMenu === "settings" ? "bg-[#44b4d6]" : "bg-[#0A2342]"
                }`}
              ></div>
              <span
                className={` flex gap-4 ${
                  activeMenu === "settings" ? "bg-[#44b4d6]" : "bg-[#0A2342]"
                } w-[207px] h-[64px] justify-center items-center rounded-md`}
                onClick={() => {
                    setActiveMenu("settings");
                    localStorage.setItem("activeMenu", "settings");
                  }}
              >
                <img
                  src={"./settings.svg"}
                  alt="icon"
                  className=" w-[25px] h-[25px] mr-[17px]"
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

export default Dasboard;
