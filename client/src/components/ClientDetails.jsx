const ClientDetails = ({
  id,
  placeholder,
  label,
  type,
  handleChange,
  defaultValue,
  required,
}) => {
  return (
    <div className='flex flex-col gap-[10px] md:gap-[14px] lg:gap-4 w-full '>
      <label className='absolute-white text-base lg:text-[20px] font-semibold'>
        {label}
      </label>
      <input
        id={id}
        onChange={handleChange}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className='absolute-white w-full rounded-[6px] border border-[#262626] bg-[#1a1a1a] px-5 py-4 lg:py-[22px] text-[#666666] leading-[1.2] text-sm lg:text-[18px] font-medium'
        required={required}
      />
    </div>
  );
};

export default ClientDetails;
