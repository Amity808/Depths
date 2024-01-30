import React from "react";
import backgroundd from "../../public/backround.png";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Newpost from "@/components/Newpost";
import PostFeed from "@/components/PostFeed";
import Header from "@/components/Header";
import UserPost from "@/components/UserPost";
import TransactionBoard from "@/components/TransactionBoard";

const Profile = () => {
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
        <Header />
        <Newpost />
        <UserPost />
      </div>
      <div className=" w-[352px] h-screen ml-[46px] flex justify-center bg-[#0A2342]">
        <TransactionBoard />
      </div>
    </div>
  );
};

export default Profile;
