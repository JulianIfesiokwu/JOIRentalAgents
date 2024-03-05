export const SearchFilter = ({ icon, placeholder }) => {
  return (
    <div className='flex items-center justify-between gap-5 px-[14px] py-3 bg-[#141414] border border-[#262626] rounded-xl shadow-effect'>
      <div className='flex items-center'>
        <img
          src={icon}
          alt=''
          className='pr-2 border-r border-[#262626]'
        />
        <input
          placeholder={placeholder}
          type='search'
          className=' absolute-white leading-[24px] font-medium text-[#999999] text-lg bg-transparent outline-none border-none'
        />
      </div>
      <button
        className='p-1 rounded-[46px] bg-[#1a1a1a]'
        type='submit'
      >
        <img
          src='/src/assets/down-icon.svg'
          className='cursor-pointer w-[20px] h-[20zpx]'
        />
      </button>
    </div>
  );
};
