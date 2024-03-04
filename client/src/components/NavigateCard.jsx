const NavigateCard = ({ stepNumber, title, concise }) => {
  return (
    <div className='flex flex-col items- justify-between md:w-1/2'>
      <div className='px-4 py-[14px] lg:px-5 lg:py-4 border-l border-[#703bf7]'>
        <p className='text-base lg:text-[20px] font-medium leading-[1.5] absolute-white'>
          Step {stepNumber}
        </p>
      </div>
      <div className='h-full flex flex-col gap-[14px] md:gap-4 p-[30px] md:p-10 border border-[#262626] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px]'>
        <h3 className='absolute-white leading-[1.5] font-semibold text-[18px] md:text-[20px] lg:text-[26px]'>
          {title}
        </h3>
        <p className='font-medium text-[14px] md:text-base lg:text-[18px] leading-[1.5] text-[#999999]'>
          {concise}
        </p>
      </div>
    </div>
  );
};

export default NavigateCard;
