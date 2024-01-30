import React from "react";

const TransactionBoard = () => {
  return (
    <div className=" mt-[60px] ">
      <div className=" flex items-center gap-[45px]">
        <div>
          <img
            src={"./notification.png"}
            alt="notification"
            className="w-[31px] h-[32px]"
          />
        </div>
        <div>
          <div className=" flex flex-row justify-center items-center gap-2 border-2 border-[#53D8FB] rounded-2xl py-2 px-3">
            <div className=" bg-[#53D8FB] w-[40px] h-[40px] flex justify-center items-center rounded-full">
              <img
                src={"./blokies.png"}
                alt="icon"
                className=" w-[23px] h-[23px] "
              />
            </div>
            <div className=" text-white ">
              <p>0.000244 ETH</p>
              <p>0xGD63...6DS9</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3>Treasure Chest</h3>
        <div className=" box-size ">
            <div className=" flex justify-end">
                <img src={"./lstrip.svg"} alt="strip" />
            </div>
            <p className=" text-[32px] text-white text-center font-bold pb-[12px]">0.000569 ETH</p>
            <p className=" text-[20px] text-[#828282] text-center font-bold"> ~ $1,445,000</p>
            <div className=" flex justify-start">
                <img src={"./strip.svg"} alt="strip" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionBoard;
