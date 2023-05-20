function Divider({title}) {
  return (
    <div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-6">
          <h2 className="text-center text-[#0B366B] text-lg uppercase font-bold">
            {title}
          </h2>
          <div className="border-t border-gray-300 flex-grow mr-3"></div>
          <div className="border-t border-gray-300 flex-grow ml-3"></div>
        </div>
      </div>
    </div>
  );
}

export default Divider;
