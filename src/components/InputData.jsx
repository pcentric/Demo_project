import { useState } from "react";
import bear from "../assets/bear.svg";
import cross from "../assets/cross.svg";

function InputData() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleButton = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="flex justify-between md:px-10">
        <h4 className="text-[#0B366B] font-semibold font-sans">
          Amount of WOM to Convert
        </h4>
        <h4 className="text-[#0B366B] font-semibold font-sans">0.0</h4>
      </div>
      <div className="flex items-center border border-gray-300 rounded-lg px-10 py-2 my-3 md:my-0">
        <input
          type="text"
          placeholder="0.0"
          className="flex-grow text-black text-xl placeholder-[#0B366B] outline-none bg-transparent"
        />
        <div className="flex items-center space-x-2">
          <button className="bg-[#137CE7] flex items-center space-x-3 text-white font-normal py-1 px-3 rounded-3xl ">
            {" "}
            Max
          </button>
          <img
            src={bear}
            alt="Icon"
            className="h-6 w-6 mr-2 bg-blue-400 rounded-full p-1"
          />
        </div>
      </div>
      <button
        onClick={toggleButton}
        className="bg-[#137CE7] text-center border font-medium rounded-lg px-10 py-2 w-full mt-4 m-auto text-white"
      >
        {" "}
        Approve
      </button>
      <label className="flex items-center mt-3">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-indigo-600"
        />
        <span className="ml-2 text-[#0B366B]">Approve Infinity</span>
      </label>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="bg-gray-800 bg-opacity-75 absolute inset-0"></div>
          <div className="bg-white w-4/5 rounded-lg p-4  max-w-md mx-auto z-20">
            <div className="my-2 text-base font-medium text-[#0B366B]">
              <div className="flex items-center justify-between ">
                <h2 className="text-xl text-[#137CE7] font-bold">Audit</h2>
                <img
                  src={cross}
                  onClick={toggleButton}
                  className="hover:cursor-pointer"
                />
              </div>
              <div className="my-5  text-base font-medium text-[#0B366B] flex items-center">
                <div className="space-x-3 flex items-center">
                  <div>
                    <svg
                      width="44"
                      height="44"
                      viewBox="0 0 44 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.9997 40.3333C21.9997 40.3333 36.6663 33 36.6663 22V9.16666L21.9997 3.66666L7.33301 9.16666V22C7.33301 33 21.9997 40.3333 21.9997 40.3333Z"
                        stroke="#24C796"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M27.5 17.875L19.9375 25.4375L16.5 22"
                        stroke="#24C796"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <h1>
                    Lorem ipsum dolor sit amet consectetur. Aliquam ullamcorper
                    leo ultrices neque cras placerat.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default InputData;
