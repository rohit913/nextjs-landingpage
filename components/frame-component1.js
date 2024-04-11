import FrameComponent2 from "./frame-component2";

const FrameComponent1 = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[118px] pr-5 pl-[22px] box-border max-w-full text-center text-mini text-white font-krona-one">
      <div className="w-[1256px] flex flex-col items-start justify-start gap-[6px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start gap-[59.5px] max-w-full mq750:gap-[30px] mq1050:flex-wrap">
          <FrameComponent2
            hAPPY="HAPPY"
            cUSTOMERS="CUSTOMERS"
            proudToAddValueInTheLives="Proud to add value in the lives of people who have trusted us"
          />
          <FrameComponent2
            hAPPY="MILLION SQ. FT."
            cUSTOMERS="UNDER DEVELOPMENT"
            proudToAddValueInTheLives="High speed development underway to deliver the most awaited commercial landmarks"
            propFlex="1"
            propWidth="222px"
            propLineHeight="153.3%"
          />
          <FrameComponent2
            hAPPY="CR WORTH"
            cUSTOMERS="PLANNED INVESTMENT"
            proudToAddValueInTheLives="With a vision to transform commercial realty forever"
            propFlex="0.8757"
            propWidth="229px"
            propLineHeight="153.3%"
          />
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[59.5px] max-w-full mq750:gap-[30px]">
          <div className="h-1 flex-1 relative bg-olivedrab-200 min-w-[284px] max-w-full" />
          <div className="h-1 flex-1 relative bg-olivedrab-200 min-w-[284px] max-w-full" />
          <div className="h-1 flex-1 relative bg-olivedrab-200 min-w-[284px] max-w-full" />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
