import React from "react";

const AchievementCard = ({ title, concise }) => {
  return (
    <div className='basis-1/2 flex flex-col p-[30px] md:p-10 gap-4 md:gap-6 shadow-effect rounded-[10px] border border-[#262626]'>
      <h3 className='absolute-white leading-[1.5] font-semibold text-[20px]'>
        {title}
      </h3>
      <p className='font-medium text-[14px] leading-[1.5] text-[#999999]'>
        {concise}
      </p>
    </div>
  );
};

export default AchievementCard;
