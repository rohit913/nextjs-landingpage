const FeatureExtractor = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[23px] pr-5 pl-[55px] box-border max-w-full text-left text-base text-darkslategray font-libre-caslon-text mq1050:pl-[27px] mq1050:box-border">
      <div className="w-[742px] flex flex-row flex-wrap items-start justify-center gap-[16px] max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[22px] min-w-[236px] max-w-full">
          <input
            className="w-full [border:none] [outline:none] bg-gray-500 self-stretch h-11 rounded-46xl [backdrop-filter:blur(4px)] flex flex-row items-start justify-start pt-[9px] px-[22px] pb-2.5 box-border font-libre-caslon-text text-base text-darkslategray min-w-[218px] z-[1]"
            placeholder="Full Name"
            type="text"
          />
          <div className="self-stretch flex flex-row items-start justify-start gap-[14px] mq450:flex-wrap">
            <div className="rounded-46xl bg-gray-500 [backdrop-filter:blur(4px)] flex flex-row items-start justify-start pt-[9px] pb-2.5 pr-3 pl-4 gap-[12px] z-[1]">
              <div className="h-11 w-[121px] relative rounded-46xl bg-gray-500 [backdrop-filter:blur(4px)] hidden" />
              <div className="relative tracking-[0.02em] leading-[157.13%] inline-block min-w-[66px] z-[2]">
                Country
              </div>
              <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                <img
                  className="w-[15px] h-2.5 relative rounded-12xs object-contain z-[2]"
                  alt=""
                  src="/polygon-2.svg"
                />
              </div>
            </div>
            <button className="cursor-pointer [border:none] pt-2.5 px-[22px] pb-[9px] bg-gray-500 flex-1 rounded-46xl [backdrop-filter:blur(4px)] flex flex-row items-start justify-start box-border min-w-[125px] whitespace-nowrap z-[1] hover:bg-gainsboro-400">
              <div className="h-11 w-[228px] relative rounded-46xl bg-gray-500 [backdrop-filter:blur(4px)] hidden" />
              <div className="relative text-base tracking-[0.02em] leading-[157.13%] font-libre-caslon-text text-darkslategray text-left inline-block min-w-[125px] z-[2]">
                Mobile Number
              </div>
            </button>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[22px] min-w-[236px] max-w-full">
          <input
            className="w-full [border:none] [outline:none] bg-gray-500 self-stretch h-11 rounded-46xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start pt-[9px] px-[26px] pb-2.5 box-border font-libre-caslon-text text-base text-darkslategray min-w-[218px] z-[1]"
            placeholder="Email Address"
            type="text"
          />
          <div className="self-stretch rounded-46xl bg-gray-500 [backdrop-filter:blur(4px)] flex flex-row items-start justify-between pt-2.5 pb-[9px] pr-4 pl-[26px] box-border max-w-full gap-[20px] z-[1]">
            <div className="h-11 w-[363px] relative rounded-46xl bg-gray-500 [backdrop-filter:blur(4px)] hidden max-w-full" />
            <div className="relative tracking-[0.02em] leading-[157.13%] inline-block min-w-[99px] z-[2]">
              Our Projects
            </div>
            <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
              <img
                className="w-[15px] h-2.5 relative rounded-12xs object-contain z-[2]"
                alt=""
                src="/polygon-2.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureExtractor;
