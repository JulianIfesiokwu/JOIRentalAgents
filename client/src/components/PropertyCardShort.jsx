import { Link } from "react-router-dom";

const PropertyCardShort = ({ propertyImage }) => {
  return (
    <Link
      to='/search'
      className='flex flex-col rounded-[12px] gap-4 p-5 border border-[#262626]'
    >
      <img
        src='src/assets/propertyImage1.svg'
        alt=''
        className='w-full object-cover'
      />
      <div className='details flex flex-col gap-6'>
        <div className='flex flex-col gap-4'>
          <div className=''>
            <p className='bg-[#1a1a1a] absolute-white text-[14px] leading-[1.5] font-medium px-3 py-[6px] border border-[#262626] rounded-[28px] inline'>
              Coastal Escapes - Where Waves Beckon
            </p>
          </div>
          <div className='flex flex-col gap-1'>
            <h3 className='text-[18px] leading-[1.5] font-semibold absolute-white'>
              Seaside Serenity Villa
            </h3>
            <p className='text-[#999999] text-[14px] leading-[1.5]'>
              Wake up to the soothing melody of waves. This beachfront villa
              offers...
              {"  "}
              <button
                type='button'
                className='absolute-white'
              >
                Read More
              </button>
            </p>
          </div>
        </div>
        <div className='flex items-center justify-between gap-[30px]'>
          <div className='flex flex-col'>
            <p className='leading-[1.5] text-[14px] text-[#999999] font-medium'>
              Price
            </p>
            <p className='leading-[1.5] absolute-white font-semibold text-[18px]'>
              $1,250,000
            </p>
          </div>
          <button className='leading-[1.5] text-[14px] absolute-white font-medium text-center px-5 py-[14px] bg-[#703BF7] rounded-[8px]'>
            View Property Details
          </button>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCardShort;
