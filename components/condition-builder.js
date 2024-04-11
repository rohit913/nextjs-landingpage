const ConditionBuilder = () => {
  return (
    <footer className="self-stretch flex flex-col items-end justify-start pt-[93px] pb-[66px] pr-[116px] pl-[89px] box-border relative gap-[102px] max-w-full text-left text-mini text-white font-libre-caslon-text mq450:gap-[25px] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:gap-[51px] mq750:pt-[60px] mq750:pb-[43px] mq750:pr-[58px] mq750:pl-11 mq750:box-border">
      <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq1225:flex-wrap">
        <div className="w-[630px] flex flex-row items-start justify-start gap-[107.5px] min-w-[630px] max-w-full mq450:gap-[27px] mq750:flex-wrap mq750:gap-[54px] mq1050:min-w-full mq1225:flex-1">
          <div className="h-[217px] flex-1 relative inline-block min-w-[97px] z-[3] text-lg text-olivedrab-200 font-krona-one">
            <p className="[margin-block-start:0] [margin-block-end:11px] leading-[210.63%]">
              CORPORATE
            </p>
            <p className="[margin-block-start:0] [margin-block-end:11px] text-mini text-white font-libre-caslon-text">
              <span>
                <span className="leading-[207.26%]">The Group</span>
              </span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:11px]">
              <span>SRIAS Leadership</span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:11px]">
              <span>SRIAS Values</span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:11px]">
              <span>SRIAS Foundation</span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:11px]">
              <span>Investors</span>
            </p>
            <p className="m-0">
              <span>{`News & Events`}</span>
            </p>
          </div>
          <div className="h-[140px] relative inline-block z-[3]">
            <p className="[margin-block-start:0] [margin-block-end:11px] text-lg leading-[210.63%] font-krona-one text-olivedrab-200">
              PROJECTS
            </p>
            <p className="[margin-block-start:0] [margin-block-end:11px] leading-[207.26%]">
              The Boat Club
            </p>
            <p className="[margin-block-start:0] [margin-block-end:11px] leading-[207.26%]">
              Tiara
            </p>
            <p className="m-0 leading-[207.26%]">iWA</p>
          </div>
          <div className="h-[109px] flex-1 relative inline-block min-w-[94px] z-[3]">
            <p className="[margin-block-start:0] [margin-block-end:11px] text-lg leading-[210.63%] font-krona-one text-olivedrab-200">
              QUICKLINKS
            </p>
            <p className="[margin-block-start:0] [margin-block-end:11px] leading-[207.26%]">
              Privacy Policy
            </p>
            <p className="m-0 leading-[207.26%]">{`Terms & Conditions`}</p>
          </div>
        </div>
        <div className="w-[368px] flex flex-col items-start justify-start gap-[16px] min-w-[368px] max-w-full text-right text-lg text-olivedrab-200 font-krona-one mq750:min-w-full mq1225:flex-1">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[31px] box-border max-w-full">
            <div className="flex-1 relative inline-block max-w-full z-[3]">
              <p className="[margin-block-start:0] [margin-block-end:11px] leading-[210.63%]">
                CONACT
              </p>
              <p className="m-0 text-mini leading-[207.26%] font-libre-caslon-text text-white">
                5th Floor, Modern Profound Tech Park,Hitech City Road, White
                Field, Kondapur, Hyderabad, Telangana, India- 500081
              </p>
            </div>
          </div>
          <div className="w-[337px] h-[53px] relative text-base leading-[157.13%] font-libre-caslon-text text-white inline-block shrink-0 max-w-full z-[3]">
            <p className="[margin-block-start:0] [margin-block-end:11px]">
              +91-999-6606-677
            </p>
            <p className="m-0">sales@sriaslifesapces.com</p>
          </div>
        </div>
      </div>
      <div className="w-[1497px] h-full absolute !m-[0] top-[0px] bottom-[0px] left-[-32px]">
        <div className="absolute top-[0px] left-[0px] bg-gray-300 w-full h-full z-[2]" />
        <div className="absolute top-[254px] left-[1336px] rounded-[50%] bg-olivedrab-200 w-[15px] h-[15px] z-[3]" />
        <div className="absolute top-[280px] left-[1336px] rounded-[50%] bg-olivedrab-200 w-[15px] h-[15px] z-[3]" />
      </div>
      <div className="w-[1208px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-base">
        <div className="relative leading-[157.13%] z-[3]">
          © 2023 – Srias Life Spaces LLP. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default ConditionBuilder;
