const PropertyShorts = ({ amount, title, icon }) => {
  return (
    <div className='flex items-center gap-1 px-[14px] py-[6px] rounded-[28px] border border-[#262626] bg-{#1a1a1a]'>
      <img
        src={icon}
        alt=''
      />
      {"  "}
      <p className='text-[14px] leading-[1.5] absolute-white font-medium'>
        <span className=''>{amount}</span>
        {title}
      </p>
    </div>
  );
};

export default PropertyShorts;
