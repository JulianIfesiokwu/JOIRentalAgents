import React from "react";

const PropertyValueCard = ({ title, img, concise }) => {
  return (
    <div className='basis-1/2 flex flex-col gap-4 md:gap-6 p-6 md:p-[40px] rounded-[10px] border border-[#262626] bg-[#141414]'>
      <div className='flex items-center gap-[10px] md:gap-4'>
        <img
          src={img}
          alt=''
          className='self-start'
        />
        <h3 className='absolute-white leading-[1.5] font-semibold text-[20px] lg::text-[24px]'>
          {title}
        </h3>
      </div>
      <p className='font-medium text-[14px] md:text-base lg:text-[18px] leading-[1.5] text-[#999999]'>
        {concise}
      </p>
    </div>
  );
};

export default PropertyValueCard;
