import { Link } from "react-router-dom";
import PropertyShorts from "./PropertyShorts";

const PropertyCard = ({ propertyImage }) => {
  return (
    <Link
      to='/search'
      className='flex flex-col rounded-[12px] gap-4 p-4 border border-[#262626] mb-4 md:mb-0'
    >
      <img
        src='src/assets/propertyImage1.svg'
        alt=''
        className='w-full object-cover'
      />
      <div className='details flex flex-col gap-5'>
        <div className=''>
          <h3 className='text-[18px] leading-[1.5] font-semibold absolute-white'>
            Rustic Retreat Cottage
          </h3>
          <p className='text-[#999999] text-[14px] leading-[1.5]'>
            An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...
            {"  "}
            <button
              type='button'
              className='absolute-white'
            >
              Read More
            </button>
          </p>
        </div>
        <div className='flex flex-wrap gap-[6px]'>
          <PropertyShorts
            amount={"4-"}
            title={"Bedroom"}
            icon={"src/assets/bedroom-icon.svg"}
          />
          <PropertyShorts
            amount={"3-"}
            title={"Bathroom"}
            icon={"src/assets/bathroom-icon.svg"}
          />
          <PropertyShorts
            amount={""}
            title={"Villa"}
            icon={"src/assets/propertyIcon.svg"}
          />
        </div>
        <div className='flex items-center justify-between'>
          <div className='flex flex-col'>
            <p className='leading-[1.5] text-[14px] text-[#999999]'>Price</p>
            <p className='leading-[1.5] absolute-white'>$500, 000</p>
          </div>
          <button className='leading-[1.5] text-[14px] absolute-white text-center px-5 py-[14px] bg-[#703BF7] rounded-[8px]'>
            View Property Details
          </button>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
