const TeamMemberCard = ({ image, name, status }) => {
  return (
    <div className='flex flex-col items-stretch justify-between gap-10 md:gap-[50px] p-5 md:p-6 lg:p-[30px] rounded-[12px] border border-[#262626]'>
      <div className='flex flex-col items-center justify-center relative w-full'>
        <img
          src={image}
          alt=''
          className=''
        />
        <button className='text-center flex items-center px-5 py-[10px] md:p-5 bg-[#703BF7] rounded-[43px] self-center w-[60px] h-[40px] inset-bottom-center'>
          <img
            src='src/assets/twitter-button.svg'
            alt=''
            className='w-[20px] lg:w-[24px] h-[20px] lg:h-[24px]'
          />
        </button>
      </div>
      <div className='flex flex-col items-center justify-between h-full gap-4 md:gap-5 w-full'>
        <div className='flex flex-col gap-[2px] items-center'>
          <h3 className='font-semibold text-center leading-[1.28] text-[28px] md:text-[20px] lg:text-[28px] absolute-white'>
            {name}
          </h3>
          <p className='text-center text-[#999999] text-sm md:text-base lg:text-[18px] font-medium'>
            {status}
          </p>
        </div>
        <div className='w-full flex items-center justify-between py-2 md:py-[10px] pl-6 md:pl-5 pr-2 md:pr-[10px] border border-[#262626] bg-[#1a1a1a] gap-5 rounded-[100px]'>
          <input
            type='text'
            className='bg-transparent w-[70%] border-none text-sm md:text-base font-medium leading-[1.28] absolute-white'
            placeholder='Say Hello 👋'
          />
          <button className='bg-[#703BF7] p-[14px] md:p-2 rounded-full'>
            <img
              src='src/assets/send-button.svg'
              alt=''
              className='w-[24px] h-[24px]'
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
