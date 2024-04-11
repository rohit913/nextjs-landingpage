const FeatureExtractor = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[23px] pr-5 pl-[55px] box-border max-w-full text-left text-base text-darkslategray font-libre-caslon-text mq1050:pl-[27px] mq1050:box-border">
      <div className="w-[742px] flex flex-row flex-wrap items-start justify-center gap-[16px] max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[22px] min-w-[236px] max-w-full">
          <input
            className="w-full [border:none] [outline:none] bg-gray-500 self-stretch h-11 rounded-46xl [backdrop-filter:blur(4px)] flex flex-row items-start justify-start pt-[9px] px-[22px] pb-2.5 box-border font-libre-caslon-text text-base text-darkslategray min-w-[218px] z-[1]"
            placeholder="Full Name"
            type="text"
          />
          <div className="self-stretch flex flex-row items-start justify-start gap-[14px] mq450:flex-wrap">
            <select className="w-full [border:none] [outline:none] bg-gray-500 self-stretch h-11 rounded-46xl [backdrop-filter:blur(4px)] flex flex-row items-start justify-start pt-[9px] px-[22px] pb-2.5 box-border font-libre-caslon-text text-base text-darkslategray min-w-[118px] z-[1]">
              {/* Dropdown Menu */}

              <option value="US">US (+1)</option>
              {/* <option value="CA">Canada (+1)</option> */}
              <option value="GB">UK (+44)</option>
              {/* Add more options for other countries */}

              {/* Arrow Icon */}
            </select>

            <input
              className="w-full [border:none] [outline:none] bg-gray-500 self-stretch h-11 rounded-46xl [backdrop-filter:blur(4px)] flex flex-row items-start justify-start pt-[9px] px-[22px] pb-2.5 box-border font-libre-caslon-text text-base text-darkslategray min-w-[218px] z-[1]"
              placeholder="Mobile Number"
              type="text"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[22px] min-w-[236px] max-w-full">
          <input
            className="w-full [border:none] [outline:none] bg-gray-500 self-stretch h-11 rounded-46xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start pt-[9px] px-[26px] pb-2.5 box-border font-libre-caslon-text text-base text-darkslategray min-w-[218px] z-[1]"
            placeholder="Email Address"
            type="text"
          />
          <select className="self-stretch rounded-46xl bg-gray-500 backdrop-filter-blur flex flex-row items-start justify-between pt-4 pb-[9px] pr-[14px] pl-[26px] box-border max-w-full gap-[20px] z-[1] font-libre-caslon-text ">
            <option value="project1">Sample Project 1</option>
            <option value="project2">Sample Project 2</option>
            <option value="project3">Sample Project 3</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FeatureExtractor;
