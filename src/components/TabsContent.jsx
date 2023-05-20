import InputData from "./InputData";

function TabsContent() {
  return (
    <div>
      <div className="md:flex w-full ">
        <h1 className="text-[#0B366B] font-medium md:w-1/2 md:px-4">
          Convert WOM to mWOM and stake mWOM to earn Magpie protocol revenue
          plus MGP tokens.
          <br /> <br />
          Note: Converting WOM to mWOM is irreversible. You may stake and
          unstake mWOM tokens, but not convert them back to WOM. Secondary
          markets however exist to allow the exchange of mWOM for WOM at varying
          market rates (See PancakeSwap)
        </h1>
        <div className="md:w-1/2 my-8 sm:my-0">
          <InputData />
        </div>
      </div>
    </div>
  );
}

export default TabsContent;
