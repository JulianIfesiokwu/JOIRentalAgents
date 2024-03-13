const FeeDetails = ({ title, price, concise }) => {
  return (
    <div className='flex flex-col gap-[10px] py-5 md:py-0 border-b border-[#262626] md:border-0'>
      <h3 className='text-[#999999] font-medium text-[14px] leading-[1.5] '>
        {title}
      </h3>
      <div className='flex items-center gap-3'>
        <p className='absolute-white text-base font-semibold'>{price}</p>
        {concise !== false ? (
          <p className='bg-[#1a1a1a] text-[#999999] text-[14px] px-3 py-[6px] rounded-[6px] md:rounded-[28px] border border-[#262626]'>
            {concise}
          </p>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default FeeDetails;
