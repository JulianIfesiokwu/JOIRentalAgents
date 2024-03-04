const ValuesCard = ({ title, concise, image }) => {
  return (
    <div className='flex flex-col gap-[14px] py-5'>
      <div className='flex items-center gap-2'>
        <img
          src={image}
          alt=''
          className=''
        />
        <h3 className='absolute-white leading-[1.5] font-semibold text-[18px]'>
          {title}
        </h3>
      </div>
      <p className='font-medium text-[14px] leading-[1.5] text-[#999999]'>
        {concise}
      </p>
    </div>
  );
};

export default ValuesCard;
