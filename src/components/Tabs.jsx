import { useState } from "react";
import TabsContent from "./TabsContent";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="container  mx-auto px-0">
      <div className=" border-gray-300">
        <div className="flex justify-between">
          <button
            className={`py-3 font-semibold px-4 w-96 text-[#5F7FC1] ${
              activeTab === 1 ? "border-b-4 border-[#AEC5F4] bg-[#E4EDFF]" : ""
            }`}
            onClick={() => handleTabClick(1)}
          >
            Convert
          </button>
          <button
            className={`py-3 font-semibold px-4 w-96 text-[#5F7FC1] ${
              activeTab === 2 ? "border-b-4 border-[#AEC5F4] bg-[#E4EDFF]" : ""
            }`}
            onClick={() => handleTabClick(2)}
          >
            Stake
          </button>
          <button
            className={`py-3 font-semibold px-4 w-96 text-[#5F7FC1] ${
              activeTab === 3 ? "border-b-4 border-[#AEC5F4] bg-[#E4EDFF]" : ""
            }`}
            onClick={() => handleTabClick(3)}
          >
            Unstake
          </button>
        </div>
      </div>
      <div className="py-4">
        {activeTab === 1 && (
          <div className="py-4 px-4">
            <TabsContent />
          </div>
        )}
        {activeTab === 2 && (
          <div className="py-4 px-4">
            <TabsContent />
          </div>
        )}
        {activeTab === 3 && (
          <div className="py-4 px-4">
            <TabsContent />
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
