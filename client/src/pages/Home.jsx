import CallToAction from "../components/CallToAction";
import CommentCard from "../components/CommentCard";
import FAQ from "../components/FAQ";
import LinkToSearch from "../components/LinkToSearch";
import Metrics from "../components/Metrics";
import PropertyCard from "../components/PropertyCard";

const Home = () => {
  return (
    <div className='bg-[#141414] flex flex-col gap-10 md:gap-[60px] xl:gap-[80px] px-4 md:px-0'>
      {/* LANDING */}
      <div className='flex flex-col-reverse md:flex-row items-center justify-center relative'>
        <img
          src='src/assets/text-stamp.svg'
          alt=''
          className='absolute md:inset-top-center z-50 left-0 top-[25%] md:left-[50%] md:right-50% md:top-[20%]'
        />
        <div className='basis-1/2 flex flex-col flex-1 md:gap-[50px] xl:gap-15 md:pl-[80px] xl:pl-[162px] relative'>
          <div className='flex flex-col gap-4 xl:gap-6 mb-10 md:mb-0'>
            <h1 className='md:font-semibold text-[28px] md:text-[46px] xl:text-[60px] absolute-white leading-[1.2]'>
              Discover Your Dream Property with JOIAgents
            </h1>
            <p className='font-medium text-[#999999] text-[14px] md:text-[18px] leading-[1.5]'>
              Your journey to finding the perfect property begins here. Explore
              our listings to find the home that matches your dreams.
            </p>
          </div>
          <div className='flex flex-col md:flex-row gap-4 xl:gap-5 w-full mb-10 md:mb-0'>
            <button className='absolute-white md:px-5 md:py-[14px] xl:px-6 py-[18px] md:text-sm xl:text-[18px] font-medium leading-[1.5] border border-[#262626] rounded-[8px]'>
              Learn More
            </button>
            <button className='absolute-white md:px-5 md:py-[14px] xl:px-6 py-[18px] md:text-sm xl:text-[18px] font-medium leading-[1.5] bg-[#703BF7] rounded-[8px]'>
              Browse Properties
            </button>
          </div>
          <Metrics />
        </div>
        <div className='basis-1/2'>
          <img
            src='/src/assets/home-landing-image-desktop.svg'
            className='object-cover'
          />
        </div>
      </div>
      <div className='bg-[#141414] grid grid-cols-2 grid-rows-2 gap-[10px] md:flex md:gap-[10px] xl:gap-5 p-[10px] mx:p-[10px] xl:p-5 border-8 border-[#262626] rounded-[12px] md:rounded-none'>
        <LinkToSearch
          title={"Find Your Dream Home"}
          img={"/src/assets/home-icon.svg"}
        />
        <LinkToSearch
          title={"Unlock Property Value"}
          img={"/src/assets/value-icon.svg"}
        />
        <LinkToSearch
          title={"Effortless Property Management"}
          img={"/src/assets/property-icon.svg"}
        />
        <LinkToSearch
          title={"Smart Investments, Informed Decisions"}
          img={"/src/assets/investment-icon.svg"}
        />
      </div>
      {/* FEATURED */}
      <div className='md:gap-[50px] xl:gap-[60px] md:px-[80px] xl:px-[162px]'>
        <img
          src='src/assets/linear-stars.svg'
          alt=''
        />
        <div className='flex flex-col gap-10'>
          <div className=''>
            <h3 className='leading-[1.5] absolute-white font-semibold text-[28px]'>
              Featured Properties
            </h3>
            <p className='font-medium leading-[1.5] text-14px text-[#999999]'>
              Explore our handpicked selection of featured properties. Each
              listing offers a glimpse into exceptional homes and investments
              available through Estatein.
            </p>
          </div>
          <div className='flex flex-col gap-[30px]'>
            <div className='flex flex-col md:flex-row md:gap-5 w-full'>
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
            </div>
            <div className='border-t border-[#262626] flex items-center justify-between pt-4'>
              <button className='leading-[1.5] text-[14px] absolute-white text-center px-5 py-[14px] bg-[#1a1a1a] rounded-[8px]'>
                View Property Details
              </button>
              <div className='flex gap-[10px] items-center justify-between'>
                <div className='rounded-full p-[10px] border border-[#262626]'>
                  <img
                    src='src/assets/left-button.svg'
                    alt=''
                  />
                </div>
                <div className=''>
                  <p className='font-medium text-[14px] text-[#999999]'>
                    <span className='absolute-white '>01</span>
                    {"  "}of 60
                  </p>
                </div>
                <div className='rounded-full p-[10px] border border-[#262626]'>
                  <img
                    src='src/assets/right-button.svg'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* TESTIMONIALS */}
      <div className='md:gap-[50px] md:px-20 md:py-[15px] xl:px-[162px]'>
        <img
          src='src/assets/linear-stars.svg'
          alt=''
        />
        <div className='flex flex-col gap-10'>
          <div className='flex flex-col gap-[6px]'>
            <h3 className='leading-[1.5] absolute-white font-semibold text-[28px]'>
              What Our Clients Say
            </h3>
            <p className='font-medium leading-[1.5] text-14px text-[#999999]'>
              Read the success stories and heartfelt testimonials from our
              valued clients. Discover why they chose JOIEstateAgents for their
              real estate needs.
            </p>
          </div>
          <div className='flex flex-col'>
            <div className='flex flex-col md:flex-row justify-between md:gap-5'>
              <CommentCard />
              <CommentCard />
              <CommentCard />
            </div>
          </div>
          <div className='border-t border-[#262626] flex items-center justify-between pt-4'>
            <button className='leading-[1.5] text-[14px] absolute-white text-center px-5 py-[14px] bg-[#1a1a1a] rounded-[8px]'>
              View All Testimonials
            </button>
            <div className='flex gap-[10px] items-center justify-between'>
              <div className='rounded-full p-[10px] border border-[#262626]'>
                <img
                  src='src/assets/left-button.svg'
                  alt=''
                />
              </div>
              <div className=''>
                <p className='font-medium text-[14px] text-[#999999]'>
                  <span className='absolute-white '>01</span>
                  {"  "}of 10
                </p>
              </div>
              <div className='rounded-full p-[10px] border border-[#262626]'>
                <img
                  src='src/assets/right-button.svg'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ'S */}
      <FAQ />
      {/* CTA */}
      <CallToAction />
    </div>
  );
};

export default Home;
