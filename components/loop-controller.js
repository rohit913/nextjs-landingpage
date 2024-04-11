import { useMemo } from "react";

const LoopController = ({
  maskGroup,
  inputSplitter,
  srihari,
  propFlex,
  propWidth,
  propWidth1,
  propMinWidth,
}) => {
  const loopControllerStyle = useMemo(() => {
    return {
      flex: propFlex,
      width: propWidth,
    };
  }, [propFlex, propWidth]);

  const srihariStyle = useMemo(() => {
    return {
      width: propWidth1,
      minWidth: propMinWidth,
    };
  }, [propWidth1, propMinWidth]);

  return (
    <div
      className="flex-1 bg-gainsboro-200 flex flex-col items-end justify-start pt-0 px-0 pb-11 box-border gap-[16px] max-w-full z-[1] text-center text-base text-black font-libre-caslon-text mq450:pb-[29px] mq450:box-border"
      style={loopControllerStyle}
    >
      <div className="self-stretch h-[371px] relative bg-gainsboro-200 hidden" />
      <div className="self-stretch h-[196px] relative">
        <img
          className="absolute top-[0px] left-[0px] w-[424px] h-[139px] object-cover z-[2]"
          alt=""
          src={maskGroup}
        />
        <img
          className="absolute top-[110px] left-[162px] rounded-[50%] w-[86px] h-[86px] object-contain z-[3]"
          loading="lazy"
          alt=""
          src={inputSplitter}
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[30px] pl-8 box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[9px] max-w-full">
          <div className="w-[346px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <div
              className="w-[52px] relative leading-[12px] flex items-end justify-center min-w-[52px] z-[2]"
              style={srihariStyle}
            >
              {srihari}
            </div>
          </div>
          <div className="self-stretch relative text-smi leading-[180.5%] text-gray-100 z-[2]">
            Low Rent costs in apartment and buildings. Good schools, colleges
            like CMR, Malla Reddy, and good hospitals are available nearby, Good
            location with less pollution and traffic. Industrial area is about
            15-20 min from here.
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoopController;
