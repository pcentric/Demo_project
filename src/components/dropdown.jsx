import { useState } from "react";
import pendle from "../assets/pendle.png";

const Dropdown = ({ title, img }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative border-2 border-blue-500 rounded-lg ">
      <button
        onClick={toggleNavbar}
        type="button"
        className="text-[#0B366B] flex items-center  hover:text-[#137CE7]  px-3 py-2 rounded-md text-sm font-extrabold focus:outline-none  "
      >
        <img src={img} /> &nbsp;
        {title}
        <svg
          className="ml-1 h-5 w-5 text-[#0B366B] hover:text-[#137CE7] inline"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg">
          <div className="py-1 rounded-md bg-[#137CE7] shadow-xs">
            <a
              href="#"
              className="flex items-center px-4 py-2 text-sm leading-5  text-gray-700 hover:bg-[#136CC7] hover:text-gray-900 focus:outline-none focus:bg-[#136CC7] transition duration-150 ease-in-out"
            >
              <img src={pendle} alt="Image 1" className="w-6 h-6 mr-2" />
              Pendle
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-sm  leading-5 text-gray-700 hover:bg-[#136CC7] hover:text-gray-900 focus:outline-none focus:bg-[#136CC7] transition duration-150 ease-in-out"
            >
              <div className="bg-white rounded-full w-5 h-5 space-x-3"></div>
              &nbsp; Option 2
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
