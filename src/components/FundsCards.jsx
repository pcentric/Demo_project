import goldP from "../assets/goldP.svg";
import depositP from "../assets/depositP.svg";
import writing from "../assets/writing.svg";

const FundsCards = () => {
  return (
    <div className="container mt-16 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap justify-between">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-2/6 p-4">
          <div className="bg-white rounded-lg shadow-sm p-0 m-0  flex justify-between ">
            <div className=" m-auto space-y-2">
              <h1 className="text-[#0B366B] font-bold text-4xl"> $0.0</h1>
              <h1 className="text-[#0B366B]  font-normal text-md">
                {" "}
                Your deposit
              </h1>
            </div>

            <img src={goldP} />
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-2/6 p-4">
          <div className="bg-white rounded-lg shadow-sm p-0 m-0  flex justify-between ">
            <div className=" m-auto space-y-2">
              <h1 className="text-[#0B366B] font-bold text-4xl"> $0.0</h1>
              <h1 className="text-[#0B366B]  font-normal text-md">
                {" "}
                Your deposit
              </h1>
            </div>

            <img src={depositP} />
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-2/6 p-4">
          <div className="bg-white rounded-lg shadow-sm p-0 m-0  flex justify-between ">
            <div className=" m-auto space-y-2">
              <h1 className="text-[#0B366B] font-bold text-4xl"> $0.0</h1>
              <h1 className="text-[#0B366B]  font-normal text-md">
                {" "}
                Your deposit
              </h1>
            </div>

            <img src={writing} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default FundsCards;
