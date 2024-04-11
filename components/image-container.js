const ImageContainer = () => {
  return (
    <section className="w-[1429px] flex flex-row items-start justify-end pt-0 px-[45px] pb-[339px] box-border max-w-full mq450:pb-[220px] mq450:box-border mq750:pl-[22px] mq750:pr-[22px] mq750:box-border">
      <header className="flex-1 flex flex-row items-end justify-between py-0 pr-0 pl-[562px] box-border relative max-w-full gap-[20px] mq450:pl-5 mq450:box-border mq750:pl-[140px] mq750:box-border mq1225:pl-[281px] mq1225:box-border">
        <img
          className="h-[66px] w-[205px] relative overflow-hidden shrink-0 z-[3]"
          loading="lazy"
          alt=""
          src="/logo.svg"
        />
        <img
          className="h-4 w-9 absolute !m-[0] top-[calc(50%_-_8px)] left-[0px] object-contain z-[3]"
          loading="lazy"
          alt=""
          src="/hammenu@2x.png"
        />
        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-3.5">
          <div className="flex flex-row items-start justify-start gap-[13px]">
            <button className="cursor-pointer pt-[9px] px-[21px] pb-2 bg-[transparent] rounded-16xl flex flex-row items-start justify-start z-[3] border-[1px] border-solid border-white hover:bg-gainsboro-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100">
              <div className="h-[37px] w-[122px] relative rounded-16xl box-border hidden border-[1px] border-solid border-white" />
              <div className="relative text-base uppercase font-libre-caslon-text text-white text-left inline-block min-w-[79px] z-[1]">
                Enquiry
              </div>
            </button>
            <div className="h-[37px] w-[37px] relative rounded-[50%] box-border z-[3] border-[0px] border-solid border-white" />
          </div>
        </div>
      </header>
    </section>
  );
};

export default ImageContainer;
