const InputProcessor = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-[54.4px] max-w-full text-left text-31xl text-white font-krona-one mq750:gap-[27px]">
      <div className="w-[1013px] flex flex-row items-start justify-start py-0 px-px box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq1050:flex-wrap">
          <h1 className="m-0 h-[97px] w-[428px] relative text-inherit leading-[103.8%] uppercase font-normal font-inherit inline-block shrink-0 max-w-full mq450:text-11xl mq450:leading-[31px] mq750:text-21xl mq750:leading-[42px]">
            <span>{`Our Latest `}</span>
            <span className="text-olivedrab-200">Creation</span>
          </h1>
          <div className="w-[493px] flex flex-col items-start justify-start pt-[47.9px] px-0 pb-0 box-border max-w-full text-base font-libre-caslon-text">
            <div className="self-stretch h-[45.3px] relative leading-[138.8%] flex items-end shrink-0">
              Each of our properties have their own unique design aesthetics,
              providing an aspirational lifestyle within a thriving community
              which is supported by Emaar’s community management team.
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1258px] h-[598px] overflow-x-auto-[none] shrink-0 flex flex-row items-end justify-start gap-[26px] max-w-full mt-[-182px] pt-[182px] text-right text-xl">
        <div className="self-stretch w-[402px] shrink-0 flex flex-row items-end justify-start relative">
          <img
            className="h-full w-full absolute !m-[0] top-[0px] right-[0.1px] object-cover"
            alt=""
            src="/mask-group4@2x.png"
          />
          <button className="cursor-pointer [border:none] pt-[12.6px] pb-[4.3px] pr-5 pl-4 bg-olivedrab-200 flex-1 flex flex-row items-start justify-between box-border max-w-full gap-[20px] z-[1]">
            <div className="h-[52px] w-[402px] relative bg-olivedrab-200 hidden max-w-full" />
            <div className="relative text-xl uppercase font-krona-one text-white text-right z-[1] mq450:text-base">
              THE BOAT CLUB
            </div>
            <div className="flex flex-col items-start justify-start pt-[13px] px-0 pb-0">
              <img
                className="w-6 h-[22.1px] relative z-[1]"
                alt=""
                src="/arrow-1.svg"
              />
            </div>
          </button>
        </div>
        <div className="self-stretch w-[402px] shrink-0 flex flex-row items-end justify-start relative">
          <img
            className="h-full w-full absolute !m-[0] top-[0px] bottom-[0px] left-[0px] max-h-full object-cover"
            alt=""
            src="/mask-group2@2x.png"
          />
          <div className="flex-1 bg-olivedrab-200 flex flex-row items-start justify-between pt-[12.6px] pb-[4.3px] pr-[18px] pl-[19px] box-border max-w-full gap-[20px] z-[1]">
            <div className="h-[52px] w-[402px] relative bg-olivedrab-200 hidden max-w-full" />
            <div className="relative uppercase inline-block min-w-[79px] z-[2] mq450:text-base">
              TIARA
            </div>
            <div className="flex flex-col items-start justify-start pt-[13px] px-0 pb-0">
              <img
                className="w-6 h-[22.1px] relative z-[2]"
                loading="lazy"
                alt=""
                src="/arrow-2.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch w-[402px] shrink-0 flex flex-row items-end justify-start relative">
          <img
            className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] max-h-full object-cover"
            alt=""
            src="/mask-group3@2x.png"
          />
          <div className="flex-1 bg-olivedrab-200 flex flex-row items-start justify-between pt-[12.6px] pb-[4.3px] pr-[18px] pl-5 box-border max-w-full gap-[20px] z-[1]">
            <div className="h-[52px] w-[402px] relative bg-olivedrab-200 hidden max-w-full" />
            <div className="relative uppercase inline-block min-w-[50px] z-[2] mq450:text-base">
              iWA
            </div>
            <div className="flex flex-col items-start justify-start pt-[13px] px-0 pb-0">
              <img
                className="w-6 h-[22.1px] relative z-[2]"
                loading="lazy"
                alt=""
                src="/arrow-2.svg"
              />
            </div>
          </div>
          <img
            className="h-[329px] w-[329px] absolute !m-[0] top-[-182.4px] right-[-82.6px] object-contain z-[1]"
            loading="lazy"
            alt=""
            src="/view-all@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default InputProcessor;
