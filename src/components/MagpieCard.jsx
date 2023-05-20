import bear from "../assets/bear.svg";

import arrowUp from "../assets/arrow-up.svg";
import penguin from "../assets/penguin.svg";
import arrowDown from "../assets/arrow-down.svg";

import Tabs from "./Tabs";

function MagpieCard() {
  return (
    <div>
      {" "}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12 ">
        <div className="max-w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden ">
          <div className="bg-gradient-to-r h-24 sm:h-auto from-[#FDDD5E] to-[#ffffff] via-white flex md:justify-between overflow-x-auto sm:overflow-hidden border-b-2 text-gray-700 text-lg font-bold px-6 py-4 items-center">
            <div className="flex items-center  space-x-4 flex-shrink-0 w-36 sm:w-auto ">
              <img src={bear} />
              <h1>Conver WOM</h1>
            </div>
            <div className="flex flex-shrink-0 flex-col w-36 items-center sm:w-auto">
              <h1 className="text-[#0B366B]">0.0%</h1>
              <h1 className="text-[#658AAF] font-medium">APR</h1>
            </div>
            <div className="flex flex-shrink-0 flex-col w-36 items-center sm:w-auto">
              <h1 className="text-[#0B366B]">$0.00</h1>
              <h1 className="text-[#658AAF] font-medium">TVL</h1>
            </div>
            <div className="flex flex-shrink-0 flex-col w-36 items-center sm:w-auto">
              <h1 className="text-[#0B366B]">0.0mWOM</h1>
              <h1 className="text-[#658AAF] font-medium">Your Staked</h1>
            </div>
            <div className="flex flex-shrink-0 flex-col w-36 items-center sm:w-auto">
              <h1 className="text-[#0B366B]">$0.00</h1>
              <h1 className="text-[#658AAF] font-medium">Rewards</h1>
            </div>
            <div className="flex flex-shrink-0 flex-col">
              <img src={arrowUp} />
            </div>
          </div>
          <div className="">
            <Tabs />
          </div>
          <div className="bg-[#E4EDFF] flex flex-col md:flex-row justify-evenly border-b-2 text-gray-700 text-lg font-bold px-6 py-4 items-center">
            <div className="flex flex-wrap  md:flex-nowrap items-center space-x-3 ">
              <h1 className=" font-medium text-sm text-[#5F7FC1]">
                Total Wow Concerted
              </h1>
              <h1 className=" font-bold text-md text-[#0B366B]">$0.0 WOM</h1>
            </div>
            <div className="flex items-center  space-x-3 ">
              <h1 className=" font-medium text-sm text-[#5F7FC1]">
                Total VeWom Accrued
              </h1>
              <h1 className=" font-bold text-md text-[#0B366B]">$0.0 veWOM</h1>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#288CFC] to-[#ffffff] overflow-x-auto sm:overflow-hidden via-white flex justify-between border-b-2 text-gray-700 text-lg font-bold px-6 py-4 my-10 rounded-lg items-center">
          <div className="flex items-center  space-x-4 flex-shrink-0 w-36 sm:w-auto ">
            <img src={penguin} />
            <h1>Stake MGP</h1>
          </div>
          <div className="flex flex-shrink-0 flex-col w-28 items-center sm:w-auto">
            <h1 className="text-[#0B366B]">0.0%</h1>
            <h1 className="text-[#658AAF] font-medium">APR</h1>
          </div>
          <div className="flex flex-shrink-0 flex-col w-28 items-center sm:w-auto">
            <h1 className="text-[#0B366B]">$0.00</h1>
            <h1 className="text-[#658AAF] font-medium">TVL</h1>
          </div>
          <div className="flex flex-shrink-0 flex-col w-28 items-center sm:w-auto">
            <h1 className="text-[#0B366B]">0.0 MGP</h1>
            <h1 className="text-[#658AAF] font-medium">Your Staked</h1>
          </div>
          <div className="flex flex-shrink-0 flex-col w-28 items-center sm:w-auto">
            <h1 className="text-[#0B366B]">$0.00</h1>
            <h1 className="text-[#658AAF] font-medium">Rewards</h1>
          </div>
          <div className="flex flex-shrink-0 flex-col w-28 items-center sm:w-auto">
            <img src={arrowDown} />
          </div>
        </div>
      </div> 
    </div>
  );
}

export default MagpieCard;
