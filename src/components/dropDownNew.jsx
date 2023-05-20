import { useState } from "react";
import fox from "../assets/fox.svg";
import binance from "../assets/binance.svg";
import walletConnect from "../assets/walletConnect.svg";
import Fortmatice from "../assets/Fortmatice.svg";
import cross from "../assets/cross.svg";

const DropdownNew = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <span className="font-bold"> EN &nbsp;</span>
      <button
        onClick={toggleModal}
        type="button"
        className="text-[#0B366B] hover:text-[#137CE7] bg-[#FFFFFF] border  px-3 py-2 rounded-md text-sm font-extrabold focus:outline-none  "
      >
        Arbitrum
        <svg
          className="ml-1 h-5 w-5 text-[#0B366B] hover:text-[#137CE7] inline"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          ``
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="bg-gray-800 bg-opacity-75 absolute inset-0"></div>
          <div className="bg-white w-4/5 rounded-lg p-8 max-w-md mx-auto z-20">
            <div className="flex items-center justify-between ">
              <h2 className="text-2xl text-[#137CE7] font-bold">
                Connect your Wallet
              </h2>
              <img
                src={cross}
                onClick={toggleModal}
                className="hover:cursor-pointer"
              />
            </div>

            <div className="flex items-center justify-between my-8">
              <h1 className="text-base items-start text-[#0B366B]">
                Select a prefered network
              </h1>
              <button
                type="button"
                className="text-[#0B366B] hover:text-[#137CE7] bg-[#ECF4FF] border  px-3 py-2  text-sm font-extrabold focus:outline-none  "
              >
                Arbitrum
                <svg
                  className="ml-1 h-5 w-5 text-[#0B366B] hover:text-[#137CE7] inline"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  ``
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>

            <div className="flex justify-between items-center">
              <div className="w-full mr-2">
                <div className="bg-transparent border-2 p-2 border-blue-500 rounded-md  flex items-center space-x-3 ">
                  <img src={fox} />
                  <h1 className="text-[#0B366B] text-base font-semibold">
                    Meta Mask
                  </h1>
                </div>
              </div>
              <div className="w-full ml-2">
                <div className="bg-transparent border-2 p-2 border-blue-500 rounded-md  flex items-center space-x-3 ">
                  <img src={binance} />
                  <h1 className="text-[#0B366B] text-base font-semibold">
                    Binance
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <div className="w-full mr-2">
                <div className="bg-transparent border-2 p-2 border-blue-500 rounded-md  flex items-center space-x-3 ">
                  <img src={walletConnect} />
                  <h1 className="text-[#0B366B] text-base font-semibold">
                    Wallet Connect
                  </h1>
                </div>
              </div>
              <div className="w-full ml-2">
                <div className="bg-transparent border-2 p-2 border-blue-500 rounded-md  flex items-center space-x-3 ">
                  <img src={Fortmatice} />
                  <h1 className="text-[#0B366B] text-base font-semibold">
                    Fortmatice
                  </h1>
                </div>
              </div>
            </div>
            <div className="my-5 text-base font-medium text-[#0B366B]">
              Lorem ipsum dolor sit amet consectetur. Aliquam ullamcorper leo
              ultrices neque cras placerat.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownNew;
