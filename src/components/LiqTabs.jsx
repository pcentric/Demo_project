import { useState } from "react";

function LiqTabs() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  return (
    <div>
      <div className="flex items-center space-x-7 overflow-x-auto ">
        <button
          type="button"
          className={`py-3 font-semibold px-4  text-[#0B366B] ${
            activeTab === 1
              ? "border-b-4 text-white   bg-[#137CE7] rounded-3xl"
              : ""
          }`}
          onClick={() => handleTabClick(1)}
        >
          Main Pool
        </button>
        <button
          type="button"
          className={`py-3 font-semibold px-4  text-[#0B366B] ${
            activeTab === 2
              ? "border-b-4 text-white   bg-[#137CE7] rounded-3xl"
              : ""
          }`}
          onClick={() => handleTabClick(2)}
        >
          Side Pool
        </button>
        <button
          type="button"
          className={`py-3 font-semibold px-4  text-[#0B366B] ${
            activeTab === 3
              ? "border-b-4 text-white   bg-[#137CE7] rounded-3xl"
              : ""
          }`}
          onClick={() => handleTabClick(3)}
        >
          BNB Pool
        </button>
        <button
          type="button"
          className={`py-3 font-semibold px-4  text-[#0B366B] ${
            activeTab === 4
              ? "border-b-4 text-white   bg-[#137CE7] rounded-3xl"
              : ""
          }`}
          onClick={() => handleTabClick(4)}
        >
          Magpie LP
        </button>
        <button
          type="button"
          className={`py-3 font-semibold px-4  text-[#0B366B] ${
            activeTab === 5
              ? "border-b-4 text-white   bg-[#137CE7] rounded-3xl"
              : ""
          }`}
          onClick={() => handleTabClick(5)}
        >
          iUSD
        </button>
      </div>
    </div>
  );
}

export default LiqTabs;
