const OutputSplitter = () => {
  return (
    <section className="self-stretch bg-olivedrab-200 flex flex-row items-start justify-between pt-6 pb-[19px] pr-[105px] pl-[108px] box-border max-w-full gap-[20px] z-[1] text-left text-lg text-white font-krona-one mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[54px] mq750:pr-[52px] mq750:box-border mq1225:flex-wrap">
      <div className="h-[93px] w-[1447px] relative bg-olivedrab-200 hidden max-w-full" />
      <div className="h-[50px] relative inline-block max-w-full z-[2]">
        <p className="m-0">Stay Updated About SRIAS LIFE SPACES</p>
        <p className="m-0 text-sm leading-[173.5%] font-libre-caslon-text">
          Stay Updated with Our Latest News
        </p>
      </div>
      <div className="w-[396px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border max-w-full">
        <div className="self-stretch rounded-29xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-start justify-between pt-[13px] pb-[0.9px] pr-[31px] pl-8 max-w-full gap-[20px] z-[2] border-[1px] border-solid border-white">
          <div className="h-[47px] w-[396px] relative rounded-29xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border hidden max-w-full border-[1px] border-solid border-white" />
          <input
            className="w-[212px] [border:none] [outline:none] font-libre-caslon-text text-lg bg-[transparent] h-[22px] relative text-gray-400 text-left inline-block p-0 z-[3]"
            placeholder="Enter your email address"
            type="text"
          />
          <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
            <img
              className="w-6 h-[22.1px] relative z-[3]"
              alt=""
              src="/arrow-2.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutputSplitter;
