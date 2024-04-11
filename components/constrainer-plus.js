const ConstrainerPlus = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-center pt-0 px-0 pb-[250px] gap-[11px] mq1225:flex-wrap">
      <button className="cursor-pointer [border:none] pt-[9px] pb-2 pr-[47px] pl-12 bg-white flex-[0.5992] flex flex-row items-start justify-start box-border min-w-[232px] max-w-[237px] mq450:flex-1">
        <div className="h-24 w-[237px] relative bg-white hidden" />
        <img
          className="h-[79px] w-[142px] relative object-cover z-[1]"
          alt=""
          src="/image-3@2x.png"
        />
      </button>
      <div className="flex-[0.6561] bg-white flex flex-row items-end justify-start pt-[22px] pb-[21.7px] pr-[40.5px] pl-[41px] box-border gap-[12.9px] min-w-[232px] max-w-[237px] mq450:flex-1">
        <div className="h-24 w-[237px] relative bg-white hidden" />
        <img
          className="h-[52.3px] w-[46.8px] relative z-[1]"
          loading="lazy"
          alt=""
          src="/vector.svg"
        />
        <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[4.8px]">
          <img
            className="self-stretch h-[42.5px] relative max-w-full overflow-hidden shrink-0 z-[1]"
            alt=""
            src="/group1.svg"
          />
        </div>
      </div>
      <img
        className="self-stretch flex-1 relative max-w-[237px] overflow-hidden max-h-full object-cover min-w-[232px] min-h-[96px]"
        loading="lazy"
        alt=""
        src="/group-8@2x.png"
      />
      <button className="cursor-pointer [border:none] pt-1.5 pb-2 pr-[23px] pl-[30px] bg-white flex-[0.7764] flex flex-row items-start justify-start box-border min-w-[232px] max-w-[237px] mq450:flex-1">
        <div className="h-24 w-[237px] relative bg-white hidden" />
        <img
          className="h-[82px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
          alt=""
          src="/image-4@2x.png"
        />
      </button>
      <button className="cursor-pointer [border:none] pt-[9px] px-[72px] pb-[11px] bg-white flex-[0.3924] flex flex-row items-start justify-start box-border min-w-[232px] max-w-[237px] mq450:flex-1">
        <div className="h-24 w-[237px] relative bg-white hidden" />
        <img
          className="h-[76px] w-[93px] relative object-cover z-[1]"
          alt=""
          src="/image-5@2x.png"
        />
      </button>
    </div>
  );
};

export default ConstrainerPlus;
