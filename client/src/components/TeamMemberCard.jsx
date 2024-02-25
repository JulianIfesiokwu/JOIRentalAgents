const TeamMemberCard = ({ image, name, status }) => {
  return (
    <div className='flex flex-col gap-10 p-5 rounded-[12px] border border-[#262626] relative'>
      <img
        src={image}
        alt=''
      />
      <img
        src='src/assets/twitter-button.svg'
        alt=''
        className='w-[60px] h-[40px] absolute inset-bottom-center'
      />
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
            className='bg-transparent border-none'
            placeholder='Say Hello 👋'
          />
          <img
            src='src/assets/send-button.svg'
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
