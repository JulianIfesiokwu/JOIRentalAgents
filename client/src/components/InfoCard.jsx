const InfoCard = ({ amount, detail }) => {
  return (
    <div className='flex flex-col gap-[2px] rounded-[12px] bg-[#262626] p-4 md:px-5 py-[14px] lg:px-6 lg:py-4'>
      <p className='font-bold leading-[1.5] absolute-white text-[24px] md:text-[30px] lg:text-[40px] text-center md:text-start'>
        {amount}
      </p>
      <p className='font-medium leading-[1.5] text-[14px] md:text-base lg:text-lg text-[#999999] tracking-[0%] text-center md:text-start'>
        {detail}
      </p>
    </div>
  );
};

export default InfoCard;
