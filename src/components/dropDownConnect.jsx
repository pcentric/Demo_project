import React, { useState } from "react";
import pendle from "../assets/pendle.png";
const DropdownConnect = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative ">
      <button
        onClick={toggleNavbar}
        type="button"
        className="text-[#ffffff]  bg-[#137CE7] border border-[#137CE7] px-3 py-2 rounded-3xl text-sm font-extrabold focus:outline-none  "
      >
        Connect Wallet &nbsp;
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
        <div className="origin-top-right absolute right-0 mt-5 w-48 rounded-md shadow-lg z-10">
          <div className=" rounded-md bg-white shadow-xs p-3 py-3">
            <div className="flex items-center space-x-3 p-2">
              <svg
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.0156 4H3.125C2.77969 4 2.5 3.72031 2.5 3.375C2.5 3.02969 2.77969 2.75 3.125 2.75H18.125C18.4703 2.75 18.75 2.47031 18.75 2.125C18.75 1.08945 17.9105 0.25 16.875 0.25H2.5C1.11914 0.25 0 1.36914 0 2.75V15.25C0 16.6309 1.11914 17.75 2.5 17.75H18.0156C19.1102 17.75 20 16.909 20 15.875V5.875C20 4.84102 19.1102 4 18.0156 4ZM16.25 12.125C15.5598 12.125 15 11.5652 15 10.875C15 10.1848 15.5598 9.625 16.25 9.625C16.9402 9.625 17.5 10.1848 17.5 10.875C17.5 11.5652 16.9402 12.125 16.25 12.125Z"
                  fill="#137CE7"
                />
              </svg>

              <h1 className="text-lg text-[#137CE7] font-bold ">My Wallet</h1>
            </div>
            <h1 className="text-sm px-3 text-[#0B366B] font-normal ">
              0xFA42...439d
            </h1>
            <h1 className="text-base px-3 text-[#0B366B] font-bold my-2  ">
              $0.0
            </h1>
            <button
              onClick={toggleNavbar}
              type="button"
              className="text-[#ffffff]  bg-[#137CE7] border border-[#137CE7] px-3 py-2 w-full rounded-3xl text-sm font-extrabold focus:outline-none  "
            >
              Disconnect
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownConnect;
