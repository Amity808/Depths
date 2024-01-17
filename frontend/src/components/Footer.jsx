import React from "react";

const Footer = () => {
  return (
    // <div className="  bg-[#011A27]">
      <div className="  py-[114px]  text-white bg-[#011A27] flex gap-1 flex-wrap w-full">
        <div className="flex items-center justify-center flex-grow basis-[100px] mt-5">
        <div>
          <div className="">
            <span className="text-white text-[24px] font-bold flex">
              Seed<p className="text-[#53D8FB] text-[24px] font-bold">Vault</p>
            </span>
          </div>
          <div className=" text-white text-[16px] font-normal w-[297px]">
            <p>
              A marketplace that sells various types of work by professional
              designers and is paid with NFT tokens.
            </p>
          </div>
        </div>
        </div>

        <div className=" flex items-center justify-center flex-grow basis-[100px] mt-5">
          <ul>
            <li className=" text-[14px] font-bold">About Us</li>
            <li>How it works</li>
            <li>Help Center</li>
          </ul>
        </div>
        <div className=" flex items-center justify-center flex-grow basis-[100px] mt-5">
          <ul>
            <li className=" text-[14px] font-bold">Community</li>
            <li>Token</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
        <div className="flex items-center justify-center flex-grow basis-[100px] mt-5">
          <ul>
            <li className="text-[14px] font-bold">Social Media</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
    // </div>
  );
};

export default Footer;
