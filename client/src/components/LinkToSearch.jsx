import { Link } from "react-router-dom";

const LinkToSearch = ({ title, img }) => {
  return (
    <Link
      to='/search'
      className='flex-1 flex flex-col items-center justify-between cursor-pointer rounded-[12px] gap-[14px] md:gap-5 px-[14px] py-5 xl:px-5 xl:py-10 bg-[#1a1a1a] relative border border-[#262626]'
    >
      <img
        src='/src/assets/diagonal-arrow-icon.svg'
        alt=''
        className='absolute right-2 xl:right-4 top-5 xl:top-4 self-end'
      />
      <img
        src={img}
        className=''
      />
      <p className='font-semibold text-[14px] xl:text-[20px] leading-[1.5] absolute-white text-center'>
        {title}
      </p>
    </Link>
  );
};

export default LinkToSearch;
