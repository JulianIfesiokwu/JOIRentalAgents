import Pill from "./Pill";

const LocationCard = ({ concise, title, address }) => {
  return (
    <div className='flex flex-col justify-between w-full p-6 md:p-10 gap-6 md:gap-[30px] rounded-lg border border-[#262626]'>
      <div className='flex flex-col gap-2 md:gap-[10px]'>
        <div className='flex flex-col gap-1'>
          <h3 className='absolute-white font-medium text-sm leading-[1.5]'>
            {title}
          </h3>
          <p className='absolute-white font-semibold text-[20px] md:text-[24px] leading-[1.5]'>
            {address}
          </p>
        </div>
        <p className='font-medium text-sm md:text-base leading-[1.5] text-[#999999]'>
          {concise}
        </p>
      </div>
      <div className='flex flex-wrap gap-2'>
        <Pill
          icon={"src/assets/envelope-icon.svg"}
          info={"info@estatein.com"}
        />
        <Pill
          icon={"src/assets/phone-icon.svg"}
          info={"+1 (123) 456-7890"}
        />
        <Pill
          icon={"src/assets/location-icon.svg"}
          info={"Metropolis"}
        />
      </div>
      <button
        type='button'
        className='absolute-white font-medium leading-[1.31] text-sm px-5 py-[14px] rounded-lg bg-[#703BF7]'
      >
        Get Direction
      </button>
    </div>
  );
};

export default LocationCard;
