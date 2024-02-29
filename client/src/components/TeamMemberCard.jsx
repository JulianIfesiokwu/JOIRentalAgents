const TeamMemberCard = ({ image, name, status }) => {
  return (
    <div className='flex flex-col gap-10 p-5 rounded-[12px] border border-[#262626] relative'>
      <img
        src={image}
        alt=''
      />
      <button className='px-5 py-[10px] bg-[#703BF7] rounded-[43px] inline self-center w-[60px] h-[40px] absolute inset-bottom-center'>
        <img
          src='src/assets/twitter-button.svg'
          alt=''
          className='w-[20px] h-[20px] '
        />
      </button>
      <div className='flex flex-col items-center gap-4'>
        <div className='flex flex-col gap-[2px] items-center'>
          <h3 className='font-semibold leading-[1.28] text-[28px] absolute-white'>
            {name}
          </h3>
          <p className='text-[#999999] text-sm font-medium'>{status}</p>
        </div>
        <div className='flex items-center py-2 pl-6 pr-2 border border-[#262626] bg-[#1a1a1a] gap-5 rounded-[100px]'>
          <input
            type='text'
            className='bg-transparent border-none text-sm font-medium leading-[1.28] absolute-white'
            placeholder='Say Hello 👋'
          />
          <button className='bg-[#703BF7] p-[14px] rounded-full'>
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
