const Minimizer = () => {
  return (
    <section className="w-[1393px] flex flex-row items-start justify-end pt-0 px-10 pb-[177px] box-border max-w-full text-right text-31xl text-olivedrab-200 font-krona-one mq750:pb-[115px] mq750:box-border">
      <div className="flex-1 flex flex-row items-end justify-center gap-[66px] max-w-full mq450:gap-[16px] mq750:gap-[33px] mq1225:flex-wrap">
        <div className="w-[558px] flex flex-col items-start justify-start pt-0 px-0 pb-[69px] box-border min-w-[558px] min-h-[263px] max-w-full mq750:min-w-full mq1225:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[21px] max-w-full">
            <h1 className="m-0 self-stretch relative text-inherit uppercase font-normal font-inherit mq450:text-11xl mq750:text-21xl">
              <span>{`NEWS `}</span>
              <span className="text-white">{`& EVENTS`}</span>
            </h1>
            <div className="w-[409px] relative text-lg leading-[153.3%] font-libre-caslon-text text-white text-left inline-block max-w-full">
              SRIAS LIFE SPACES LLP opens new channels to sustainable,
              eco-friendly, futuristic solutions in all facets of the
              engineering and construction industry landscape.
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-row items-start justify-start gap-[18px] min-w-[448px] max-w-full text-center text-smi text-white font-libre-caslon-text mq750:flex-wrap mq750:min-w-full">
          <div className="h-[467px] w-[308px] flex flex-row items-end justify-start py-[33px] px-12 box-border relative min-w-[308px] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:flex-1">
            <img
              className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
              loading="lazy"
              alt=""
              src="/rectangle-133@2x.png"
            />
            <img
              className="h-[65px] w-[65px] absolute !m-[0] bottom-[26px] left-[-56px] object-contain z-[1]"
              alt=""
              src="/group-5@2x.png"
            />
            <div className="h-[104px] flex-1 relative leading-[140%] flex items-end justify-center z-[1]">
              Best Luxury Apartments To Buy in Hyderabad
            </div>
          </div>
          <div className="flex-1 flex flex-col items-end justify-start min-w-[236px] min-h-[467px] max-w-full">
            <div className="self-stretch h-[467px] flex flex-row items-start justify-start">
              <div className="self-stretch w-[308px] flex flex-row items-end justify-start py-[33px] px-[52px] box-border relative mq450:pl-5 mq450:pr-5 mq450:box-border mq750:flex-1">
                <img
                  className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/rectangle-142@2x.png"
                />
                <div className="h-[91px] flex-1 relative leading-[140%] flex items-end justify-center z-[1]">
                  Why should you trust SRIAS Life Spaces to make your dream home
                  a reality?
                </div>
              </div>
            </div>
            <button className="cursor-pointer [border:none] pt-[33px] pb-[9.9px] pr-5 pl-[21px] bg-olivedrab-200 flex flex-row items-start justify-start z-[1] mt-[-91px]">
              <div className="h-[65px] w-[65px] relative bg-olivedrab-200 hidden" />
              <img
                className="h-[22.1px] w-6 relative z-[1]"
                alt=""
                src="/arrow-2.svg"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Minimizer;
