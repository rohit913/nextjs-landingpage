import { useMemo } from "react";

const FrameComponent2 = ({
  hAPPY,
  cUSTOMERS,
  proudToAddValueInTheLives,
  propFlex,
  propWidth,
  propLineHeight,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const hAPPYCUSTOMERSStyle = useMemo(() => {
    return {
      width: propWidth,
      lineHeight: propLineHeight,
    };
  }, [propWidth, propLineHeight]);

  return (
    <div
      className="flex-[0.8107] bg-darkslateblue-200 flex flex-col items-start justify-start pt-[46px] pb-[39px] pr-[52px] pl-[53px] box-border gap-[16.5px] min-w-[284px] max-w-full text-center text-mini text-white font-krona-one mq450:pl-5 mq450:pr-5 mq450:box-border mq450:flex-1"
      style={frameDivStyle}
    >
      <div className="w-[379px] h-[191px] relative bg-darkslateblue-200 hidden max-w-full" />
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-[73px] mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div
          className="h-[33px] w-32 relative leading-[144.5%] uppercase inline-block z-[1]"
          style={hAPPYCUSTOMERSStyle}
        >
          <p className="m-0">{hAPPY}</p>
          <p className="m-0">{cUSTOMERS}</p>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-px pl-0">
        <div className="h-px w-[86px] relative box-border z-[1] border-t-[1px] border-solid border-lightgreen" />
      </div>
      <div className="self-stretch h-[39px] relative leading-[153.3%] font-libre-caslon-text inline-block shrink-0 z-[1]">
        {proudToAddValueInTheLives}
      </div>
    </div>
  );
};

export default FrameComponent2;
