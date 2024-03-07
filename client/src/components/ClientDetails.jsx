const ClientDetails = ({ placeholder, label, type }) => {
  return (
    <div className='flex flex-col gap-[10px] md:gap-[14px] lg:gap-4 w-full md:basis-1/2'>
      <label className='absolute-white text-base lg:text-[20px] font-semibold'>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className='absolute-white w-full rounded-[6px] border border-[#262626] bg-[#1a1a1a] px-5 py-4 lg:py-[22px] text-[#666666] leading-[1.2] text-sm lg:text-[18px] font-medium'
        required
      />
    </div>
  );
};

export default ClientDetails;
