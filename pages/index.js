import { useEffect } from "react";
import ImageContainer from "../components/image-container";
import FrameComponent4 from "../components/frame-component4";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent1 from "../components/frame-component1";
import InputProcessor from "../components/input-processor";
import FunctionLibrary from "../components/function-library";
import FrameComponent from "../components/frame-component";
import Minimizer from "../components/minimizer";
import ConstrainerPlus from "../components/constrainer-plus";
import FeatureExtractor from "../components/feature-extractor";
import OutputSplitter from "../components/output-splitter";
import ConditionBuilder from "../components/condition-builder";

const Desktop = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className="w-full relative bg-gray-200 overflow-hidden flex flex-col items-end justify-start pt-[38px] px-0 pb-0 box-border leading-[normal] tracking-[normal] text-left text-4xl text-white font-krona-one">
      <img
        className="w-[1477px] h-[462px] absolute !m-[0] right-[-19px] bottom-[596px] object-cover"
        alt=""
        src="/rectangle-152@2x.png"
      />
      <ImageContainer />
      <img
        className="w-[1476px] h-[863px] absolute !m-[0] top-[-34px] left-[calc(50%_-_738px)] object-cover"
        alt=""
        src="/lake-view-t3garden-shot-evening-1@2x.png"
      />
      <h3 className="!m-[0] w-[1856px] absolute top-[914.48px] right-[-373.2px] text-inherit font-normal font-inherit inline-block whitespace-nowrap [transform:_rotate(-2.3deg)] [transform-origin:0_0] z-[1] mq450:text-lg">
        LUXURY . PREMIUM . MODERN . TRADITIONAL . ECO-FRIENDLY . LUXURY .
        PREMIUM . MODERN . TRADITIONAL . ECO-FRIENDLY
      </h3>
      <FrameComponent4 />
      <h3 className="!m-[0] w-[1856px] absolute top-[817.96px] left-[3.28px] text-inherit font-normal font-inherit inline-block whitespace-nowrap [transform:_rotate(1.3deg)] [transform-origin:0_0] z-[3] mq450:text-lg">
        LUXURY . PREMIUM . MODERN . TRADITIONAL . ECO-FRIENDLY . LUXURY .
        PREMIUM . MODERN . TRADITIONAL . ECO-FRIENDLY
      </h3>
      <img
        className="w-[1496px] h-[464px] absolute !m-[0] top-[0px] left-[calc(50%_-_748px)] z-[2]"
        alt=""
        src="/rectangle-3.svg"
      />
      <section className="self-stretch h-[260.5px] relative">
        <div className="absolute top-[63.72px] left-[-55.3px] bg-darkolivegreen w-[1652px] h-[50px] [transform:_rotate(-2.3deg)] [transform-origin:0_0]" />
        <div className="absolute top-[-25.71px] left-[-54.52px] bg-darkslateblue-100 w-[1652px] h-[50px] [transform:_rotate(.9deg)] [transform-origin:0_0] z-[2]" />
      </section>
      <FrameComponent3 />
      <FrameComponent1 />
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[189px] box-border max-w-full mq450:pb-20 mq450:box-border mq1050:pb-[123px] mq1050:box-border">
        <img
          className="h-[721px] flex-1 relative max-w-full overflow-hidden object-cover mix-blend-normal"
          alt=""
          src="/mask-group1@2x.png"
        />
      </section>
      <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[500px] pr-5 pl-6 box-border relative max-w-full mq450:pb-[89px] mq450:box-border mq1050:pb-[137px] mq1050:box-border mq1225:pb-[211px] mq1225:box-border">
        <div className="w-[1258px] flex flex-col items-start justify-start gap-[192.3px] max-w-full mq450:gap-[24px] mq750:gap-[48px] mq1225:gap-[96px]">
          <InputProcessor />
          <FunctionLibrary />
          <FrameComponent />
        </div>
        <img
          className="h-[329px] w-[329px] absolute !m-[0] bottom-[-155px] left-[546px] object-contain z-[1]"
          alt=""
          src="/view-all1@2x.png"
        />
      </section>
      <Minimizer />
      <form className="m-0 self-stretch flex flex-col items-start justify-start pt-0 pb-[93px] pr-[105px] pl-[106px] box-border min-h-[798px] max-w-full mq450:pb-[39px] mq450:box-border mq750:pl-[26px] mq750:pr-[26px] mq750:pb-[60px] mq750:box-border mq1225:pl-[53px] mq1225:pr-[52px] mq1225:box-border">
        <h1
          className="ml-[-1141px] mb-[27px] m-0 w-[4853px] h-[65px] relative text-[85px] font-normal font-krona-one text-[transparent] whitespace-nowrap text-center inline-block [-webkit-text-stroke:2px_#0062bb] [&.animate]:animate-[97s_linear_-48.5s_infinite_normal_forwards_marquee-text] opacity-[1] mq450:text-[25px] mq750:text-[42px]"
          data-animate-on-scroll
        >
          <span className="uppercase">{`PROJECT ASSOCIATES  .  PROJECT ASSOCIATES  `}</span>
          <span className="leading-[142.5%]">.</span>
          <span className="uppercase">{`  PROJECT ASSOCIATES  `}</span>
          <span className="leading-[142.5%]">.</span>
          <span className="uppercase">{`  `}</span>
        </h1>
        <ConstrainerPlus />
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[43px] mq450:pl-[21px] mq450:box-border">
          <div className="w-[394px] relative text-xl tracking-[0.02em] leading-[157.13%] uppercase font-krona-one text-olivedrab-200 text-center inline-block z-[1] mq450:text-base mq450:leading-[25px]">
            Know about our Projects
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[34px] pr-6 pl-5">
          <div className="w-[611px] relative text-base tracking-[0.02em] leading-[157.13%] font-libre-caslon-text text-white text-center inline-block z-[2]">
            Have a glance at our engineering and architectural experience in our
            projects.
          </div>
        </div>
        <FeatureExtractor />
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
          <button className="cursor-pointer [border:none] pt-[9px] px-[58px] pb-2.5 bg-olivedrab-200 w-[246px] rounded-46xl [backdrop-filter:blur(4px)] flex flex-row items-start justify-start box-border whitespace-nowrap z-[1] hover:bg-olivedrab-100">
            <div className="h-11 w-[246px] relative rounded-46xl bg-olivedrab-200 [backdrop-filter:blur(4px)] hidden" />
            <div className="relative text-base tracking-[0.02em] leading-[157.13%] font-libre-caslon-text text-white text-left inline-block min-w-[124px] z-[2]">
              Submit Request
            </div>
          </button>
        </div>
      </form>
      <OutputSplitter />
      <ConditionBuilder />
    </div>
  );
};

export default Desktop;
