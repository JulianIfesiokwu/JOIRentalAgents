const NavigateCard = ({ stepNumber, title, concise }) => {
  return (
    <div className='flex flex-col h-full'>
      <div className='px-4 py-[14px] border-l border-[#703bf7]'>
        <p className='text-base font-medium leading-[1.5] absolute-white'>
          Step {stepNumber}
        </p>
      </div>
      <div className='h-full flex flex-col gap-[14px] md:gap-4 p-[30px] md:p-10 border border-[#262626] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px]'>
        <h3 className='absolute-white leading-[1.5] font-semibold text-[18px]'>
          {title}
        </h3>
        <p className='font-medium text-[14px] leading-[1.5] text-[#999999]'>
          {concise}
        </p>
      </div>
    </div>
  );
};

export default NavigateCard;
