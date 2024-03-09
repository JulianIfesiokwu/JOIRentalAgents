const Pill = ({ icon, info }) => {
  return (
    <div className='rounded-[28px] px-4 py-[10px] flex gap-1 bg-[#1a1a1a]'>
      <img src={icon} />
      <span className='absolute-white font-medium text-sm leading-[1.5] '>
        {info}
      </span>
    </div>
  );
};

export default Pill;
