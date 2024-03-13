import React from "react";

const FeaturesCard = ({ concise }) => {
  return (
    <div className='flex gap-[10px] px-3 md:px-4 py-[10px] md:py-[14px] border-l border-[#703BF7]'>
      <img
        src='/src/assets/lightining-icon.svg'
        alt=''
      />
      <p className='font-medium text-[14px] md:text-[16px] lg:text-[18px] leading-[1.5] text-[#999999]'>
        {concise}
      </p>
    </div>
  );
};

export default FeaturesCard;
