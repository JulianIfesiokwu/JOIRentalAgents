const CommentCard = () => {
  return (
    <div className='flex flex-col rounded-[12px] gap-6 p-[30px] border border-[#262626] mb-4 md:mb-0'>
      <div className='flex gap-2'>
        <img
          src='src/assets/star-rating.svg'
          alt=''
          className='rounded-full'
        />
        <img
          src='src/assets/star-rating.svg'
          alt=''
        />
        <img
          src='src/assets/star-rating.svg'
          alt=''
        />
        <img
          src='src/assets/star-rating.svg'
          alt=''
        />
        <img
          src='src/assets/star-rating.svg'
          alt=''
        />
      </div>
      <div className='flex flex-col gap-[6px]'>
        <h3 className='absolute-white font-semibold text-[18px] leading-[1.5]'>
          Exceptional Service!
        </h3>
        <p className='absolute-white font-medium text-[14px] leading-[1.5]'>
          Our experience with Estatein was outstanding. Their team's dedication
          and professionalism made finding our dream home a breeze. Highly
          recommended!
        </p>
      </div>
      <div className='flex items-center gap-[10px]'>
        <img
          src='src/assets/customer-image.svg'
          alt=''
          className='rounded-full'
        />
        <div className=''>
          <h4 className='absolute-white font-medium text-base leading-[1.5]'>
            Wade Warren
          </h4>
          <p className='font-medium text-sm text-[#999999] leading-[1.5]'>
            USA, California
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
