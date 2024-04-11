import LoopController from "./loop-controller";

const FrameComponent = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[27px] pl-5 box-border max-w-full text-right text-31xl text-olivedrab-200 font-krona-one">
      <div className="w-[967px] flex flex-col items-end justify-start gap-[35px] max-w-full mq750:gap-[17px]">
        <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[35px] pl-[39px] box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[21px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
              <h1 className="m-0 w-[700px] relative text-inherit uppercase font-normal font-inherit inline-block mq450:text-11xl mq750:text-21xl">
                <span>CLIENT’S</span>
                <span className="text-white"> THOUGHTS</span>
              </h1>
            </div>
            <div className="self-stretch h-[76px] relative text-lg leading-[153.3%] font-libre-caslon-text text-white text-center inline-block shrink-0">
              SRIAS LIFE SPACES LLP opens new channels to sustainable,
              eco-friendly, futuristic solutions in all facets of the
              engineering and construction industry landscape.
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[25px] max-w-full text-center text-base text-black font-libre-caslon-text">
          <div className="flex-1 flex flex-col items-start justify-start min-w-[307px] min-h-[371px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-end max-w-full">
              <div className="w-[424px] flex flex-row items-start justify-start relative max-w-full mq1050:flex-1">
                <img
                  className="h-[530px] w-[1454px] absolute !m-[0] right-[-744px] bottom-[-230px] object-cover mix-blend-luminosity"
                  alt=""
                  src="/mask-group@2x.png"
                />
                <LoopController
                  maskGroup="/mask-group10@2x.png"
                  inputSplitter="/ellipse-10@2x.png"
                  srihari="Srihari"
                />
              </div>
            </div>
            <button className="cursor-pointer [border:none] pt-[23px] pb-8 pr-5 pl-[21px] bg-olivedrab-200 h-[65px] flex flex-row items-start justify-start box-border z-[2] mt-[-218px]">
              <div className="h-[65px] w-[65px] relative bg-olivedrab-200 hidden" />
              <img
                className="h-[22.1px] w-6 relative object-contain z-[3]"
                alt=""
                src="/arrow-5.svg"
              />
            </button>
          </div>
          <div className="flex-1 flex flex-col items-end justify-start min-w-[307px] min-h-[371px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start max-w-full">
              <LoopController
                maskGroup="/mask-group11@2x.png"
                inputSplitter="/ellipse-11@2x.png"
                srihari="Amir Ali"
                propFlex="unset"
                propWidth="424px"
                propWidth1="64px"
                propMinWidth="64px"
              />
            </div>
            <button className="cursor-pointer [border:none] pt-[23px] pb-8 pr-5 pl-[21px] bg-olivedrab-200 h-[65px] flex flex-row items-start justify-start box-border z-[2] mt-[-218px]">
              <div className="h-[65px] w-[65px] relative bg-olivedrab-200 hidden" />
              <img
                className="h-[22.1px] w-6 relative z-[3]"
                alt=""
                src="/arrow-2.svg"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
