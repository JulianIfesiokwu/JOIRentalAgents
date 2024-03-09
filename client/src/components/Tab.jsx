const Tab = ({ title }) => {
  return (
    <button
      type='button'
      className='px-5 py-[14px] bg-[#141414] border border-[#262626] rounded-[8px] absolute-white font-medium leading-[1.5] text-sm w-full md:min-w-0'
    >
      {title}
    </button>
  );
};

export default Tab;
