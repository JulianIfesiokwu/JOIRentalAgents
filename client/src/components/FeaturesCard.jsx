import React from "react";

const FeaturesCard = ({ concise }) => {
  return (
    <div className='flex gap-[10px] px-3 py-[10px] border-l border-[#703BF7]'>
      <img
        src='/src/assets/lightining-icon.svg'
        alt=''
      />
      <p className='font-medium text-[14px] leading-[1.5] text-[#999999]'>
        {concise}
      </p>
    </div>
  );
};

export default FeaturesCard;
