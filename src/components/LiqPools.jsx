import penguin from "../assets/penguin.svg";
import frax from "../assets/frax.svg";
import busd from "../assets/busd.svg";
import tUsd from "../assets/tUsd.svg";

import arrowDown from "../assets/arrow-down.svg";
import LiqTabs from "./LiqTabs";
function LiqPools() {
  return (
    <div>
      <div className="mx-6 my-6 ">
        <LiqTabs />
      </div>
      <div className="mx-6">
        <div className="bg-gradient-to-r from-[#F0B90B] to-[#FFFDF7] overflow-x-auto sm:overflow-hidden via-white flex justify-between border-b-2 text-gray-700 text-lg font-bold px-8 py-4 my-10 rounded-lg items-center">
          <div className="flex items-center  space-x-4 flex-shrink-0 w-36 sm:w-auto ">
            <img src={busd} />
            <div>
              <h1 className="text-[#137CE7]">BUSD</h1>
              <h1 className="text-[#0B366B] text-base">on Trader Jo</h1>
            </div>
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
        <div className="bg-gradient-to-r from-[#828385] to-[#DBDBDB] overflow-x-auto sm:overflow-hidden via-white flex justify-between border-b-2 text-gray-700 text-lg font-bold px-8 py-4 my-10 rounded-lg items-center">
          <div className="flex items-center  space-x-4 flex-shrink-0 w-36 sm:w-auto ">
            <img src={frax} />
            <div>
              <h1 className="text-[#137CE7]">FRAX</h1>
              <h1 className="text-[#0B366B] text-base">on Wombat</h1>
            </div>
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
        <div className="bg-gradient-to-r from-[#4D7EFF] to-[#E3EEFF] overflow-x-auto sm:overflow-hidden via-white flex justify-between border-b-2 text-gray-700 text-lg font-bold px-8 py-4 my-10 rounded-lg items-center">
          <div className="flex items-center  space-x-4 flex-shrink-0 w-36 sm:w-auto ">
            <img src={tUsd} />
            <div>
              <h1 className="text-[#137CE7]">TUSD</h1>
              <h1 className="text-[#0B366B] text-base">on Wombat</h1>
            </div>
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

export default LiqPools;
