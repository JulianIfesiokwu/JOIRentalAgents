import CallToAction from "../components/CallToAction";
import PropertyCardShort from "../components/PropertyCardShort";
import { SearchFilter } from "../components/SearchFilter";

const Properties = () => {
  return (
    <div className='bg-[#141414]'>
      {/* LANDING SECTION */}
      <div className='flex flex-col gap-10'>
        <div className='flex flex-col gap-[10px] px-4 py-[50px] md:pl-20 md:pt-[100px] md:pr-[200px] md:pb-[130px] border-b border-[#262626]'>
          <h3 className='font-semibold text-[28px] leading-[1.5] absolute-white'>
            Find Your Dream Property
          </h3>
          <p className='font-medium leading-[1.5] text-[#999999]'>
            Welcome to JOIAgents, where your dream property awaits in every
            corner of our beautiful world. Explore our curated selection of
            properties, each offering a unique story and a chance to redefine
            your life. With categories to suit every dreamer, your journey{" "}
          </p>
        </div>
        <form className='flex flex-col gap-5 md:w-full md:gap-[2px] px-4 md:px-20 md:relative'>
          <div className='flex items-center md:px-[90px] w-full justify-between'>
            <div className='w-full flex items-center justify-between gap-[6px] px-4 py-[14px] border border-[#262626] rounded-xl shadow-effect md:mt-[-100px] bg-[#141414]'>
              <input
                placeholder='Search For A Property'
                type='search'
                className='absolute-white leading-[24px] font-medium text-[#999999] text-lg bg-transparent md:bg-[#141414] outline-none border-none'
              />
              <button
                className='px-5 py-[14px] rounded-[8px] bg-[#703BF7] flex md:gap-[6px]'
                type='submit'
              >
                <img
                  src='/src/assets/search-icon.svg'
                  alt='email'
                  className='cursor-pointer w-[24px] h-[24px]'
                />
                <span className='hidden md:inline font-medium text-sm leading-[1.5] absolute-white'>
                  Find Property
                </span>
              </button>
            </div>
          </div>
          <div className='flex flex-col md:flex-row gap-5 p-5 rounded-[12px] bg-[#1a1a1a]'>
            <SearchFilter
              placeholder={"Location"}
              icon={"src/assets/location-icon.svg"}
            />
            <SearchFilter
              placeholder={"Property Type"}
              icon={"src/assets/property-type-icon.svg"}
            />
            <SearchFilter
              placeholder={"Pricing Range"}
              icon={"src/assets/pricing-range-icon.svg"}
            />
            <SearchFilter
              placeholder={"Property Size"}
              icon={"src/assets/property-size-icon.svg"}
            />
            <SearchFilter
              placeholder={"Build Year"}
              icon={"src/assets/build-year-icon.svg"}
            />
          </div>
        </form>
      </div>
      {/* DISCOVER */}
      <div className='flex flex-col px-4 py-[50px] md:px-20 md:py-20'>
        <img
          src='src/assets/linear-stars.svg'
          alt=''
          className='self-start'
        />
        <div className='flex flex-col gap-10 md:gap-[60px]'>
          <div className='flex flex-col gap-2 md:gap-[10px] md:pr-[250px]'>
            <h3 className='absolute-white font-semibold text-[28px] md:text-[38px] leading-[1.5]'>
              Discover a World of Possibilities
            </h3>
            <p className='font-medium text-sm md:text-base leading-[1.5] text-[#999999]'>
              Our portfolio of properties is as diverse as your dreams. Explore
              the following categories to find the perfect property that
              resonates with your vision of home
            </p>
          </div>
          <div className='flex flex-col gap-[30px] md:gap-15'>
            <div className='flex flex-col md:flex-row md:gap-5'>
              <PropertyCardShort />
              <div className='hidden md:inline'>
                <PropertyCardShort />
              </div>
              <div className='hidden md:inline'>
                <PropertyCardShort />
              </div>
            </div>
            <div className='flex gap-[10px] items-center md:border-t border-[#262626] md:pt-4 justify-between'>
              <div className='hidden md:inline'>
                <p className='font-medium text-[14px] text-[#999999]'>
                  <span className='absolute-white '>01</span>
                  {"  "}of 10
                </p>
              </div>
              <div className='rounded-full p-[10px] border border-[#262626] md:hidden'>
                <img
                  src='src/assets/left-button.svg'
                  alt=''
                />
              </div>
              <div className='md:hidden'>
                <p className='font-medium text-[14px] text-[#999999]'>
                  <span className='absolute-white '>01</span>
                  {"  "}of 10
                </p>
              </div>
              <div className='flex md:gap-[10px] items-center'>
                <div className='rounded-full p-[10px] border border-[#262626] hidden md:inline'>
                  <img
                    src='src/assets/left-button.svg'
                    alt=''
                  />
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
      {/* APPLICATION FORM */}
      <div className='flex flex-col px-4 py-[50px] md:px-20 md:py-20'>
        <img
          src='src/assets/linear-stars.svg'
          alt=''
          className='self-start'
        />
        <div className='flex flex-col gap-10 md:gap-15'>
          <div className='flex flex-col gap-2 md:gap-[10px] md:pr-[250px]'>
            <h3 className='absolute-white font-semibold text-[28px] md:text-[38px] leading-[1.5]'>
              Let's Make it Happen
            </h3>
            <p className='font-medium text-sm md:text-base leading-[1.5] text-[#999999]'>
              Ready to take the first step toward your dream property? Fill out
              the form below, and our real estate wizards will work their magic
              to find your perfect match. Don't wait; let's embark on this
              exciting journey together.
            </p>
          </div>
          <form className='flex flex-col md:flex-row flex-wrap rounded-[12px] gap-5 p-4 md:p-[50px] border border-[#262626]'>
            <div className='md:flex gap-[30px] items-center'>
              <div className='flex flex-col gap-[10px] '>
                <label className='absolute-white text-base font-semibold'>
                  First Name
                </label>
                <input
                  type='text'
                  placeholder='Enter First Name'
                  className='w-full rounded-[6px] border border-[#262626] bg-[#1a1a1a] px-5 py-4 text-[#666666] leading-[1.2] text-sm font-medium'
                />
              </div>
              <div className='flex flex-col gap-[10px] '>
                <label className='absolute-white text-base font-semibold'>
                  Last Name
                </label>
                <input
                  type='text'
                  placeholder='Enter Last Name'
                  className='w-full rounded-[6px] border border-[#262626] bg-[#1a1a1a] px-5 py-4 text-[#666666] leading-[1.2] text-sm font-medium'
                />
              </div>
              <div className='flex flex-col gap-[10px] '>
                <label className='absolute-white text-base font-semibold'>
                  Email
                </label>
                <input
                  type='text'
                  placeholder='Enter your Email'
                  className='w-full rounded-[6px] border border-[#262626] bg-[#1a1a1a] px-5 py-4 text-[#666666] leading-[1.2] text-sm font-medium'
                />
              </div>
              <div className='flex flex-col gap-[10px]'>
                <label className='absolute-white text-base font-semibold'>
                  Phone
                </label>
                <input
                  type='text'
                  placeholder='Enter Phone Number'
                  className='w-full rounded-[6px] border border-[#262626] bg-[#1a1a1a] px-5 py-4 text-[#666666] leading-[1.2] text-sm font-medium'
                />
              </div>
              <div className='flex flex-col gap-[10px]'>
                <label
                  htmlFor='preferred-location'
                  className='absolute-white text-base font-semibold'
                >
                  Preferred Location
                </label>
                <div className='w-full flex items-center justify-between rounded-[6px] border border-[#262626] bg-[#1a1a1a] px-5 py-4'>
                  <select
                    name='preferred-location'
                    id='preferred-location'
                    className='w-full text-[#666666] leading-[1.2] text-sm font-medium bg-transparent outline-none border-0 p-0'
                  >
                    <option value='all'>Select Location</option>
                    <option value='lagos'>Lagos</option>
                    <option value='abuja'>Abuja</option>
                    <option value='jos'>Jos</option>
                    <option value='enugu'>Enugu</option>
                  </select>
                </div>
              </div>
              <div className='flex flex-col gap-[10px]'>
                <label
                  htmlFor='property-type'
                  className='absolute-white text-base font-semibold'
                >
                  Property Type
                </label>
                <div className='w-full flex items-center justify-between rounded-[6px] border border-[#262626] bg-[#1a1a1a] px-5 py-4'>
                  <select
                    name='property-type'
                    id='property-type'
                    className='w-full text-[#666666] leading-[1.2] text-sm font-medium bg-transparent outline-none border-0 p-0'
                  >
                    <option value='all'>Select Property Type</option>
                    <option value='Duplex'>Duplex</option>
                    <option value='Bungalow'>Bungalow</option>
                    <option value='Studio'>Studio</option>
                    <option value='Flat'>Flat</option>
                  </select>
                </div>
              </div>
              <div className='flex flex-col gap-[10px]'>
                <label
                  htmlFor='bathroom-number'
                  className='absolute-white text-base font-semibold'
                >
                  No. of Bathrooms
                </label>
                <div className='w-full flex items-center justify-between rounded-[6px] border border-[#262626] bg-[#1a1a1a] px-5 py-4'>
                  <select
                    name='bathroom-number'
                    id='bathroom-number'
                    className='w-full text-[#666666] leading-[1.2] text-sm font-medium bg-transparent outline-none border-0 p-0'
                  >
                    <option value='all'>Select no. of Bathrooms</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                  </select>
                </div>
              </div>
              <div className='flex flex-col gap-[10px]'>
                <label
                  htmlFor='bedroom-number'
                  className='absolute-white text-base font-semibold'
                >
                  No. of Bedrooms
                </label>
                <div className='w-full flex items-center justify-between rounded-[6px] border border-[#262626] bg-[#1a1a1a] px-5 py-4'>
                  <select
                    name='bedroom-number'
                    id='bedroom-number'
                    className='w-full text-[#666666] leading-[1.2] text-sm font-medium bg-transparent outline-none border-0 p-0'
                  >
                    <option value='all'>Select no. of Bedrooms</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-[10px]'>
              <label
                htmlFor='budget'
                className='absolute-white text-base font-semibold'
              >
                Budget
              </label>
              <div className='w-full flex items-center justify-between rounded-[6px] border border-[#262626] bg-[#1a1a1a] px-5 py-4'>
                <select
                  name='budget'
                  id='budget'
                  className='w-full text-[#666666] leading-[1.2] text-sm font-medium bg-transparent outline-none border-0 p-0'
                >
                  <option value='all'>Select Budget</option>
                  <option value='100000'>100000</option>
                  <option value='200000'>200000</option>
                  <option value='500000'>500000</option>
                  <option value='1000000'>1, 000, 000</option>
                </select>
              </div>
            </div>
            <div className='flex flex-col gap-[10px]'>
              <label
                htmlFor='contact-method'
                className='absolute-white text-base font-semibold'
              >
                Preferred Contact Method
              </label>
              <div className='flex flex-col gap-4'>
                <div className='w-full flex items-center justify-between rounded-[6px] border border-[#262626] bg-[#1a1a1a] px-5 py-4 gap-[6px]'>
                  <label htmlFor='preferred phone-number'>
                    <img
                      src='src/assets/phone-icon.svg'
                      alt=''
                      className=''
                    />
                  </label>
                  <input
                    type='numeric'
                    placeholder='Enter Your Number'
                    className='w-full bg-[#1a1a1a] text-[#666666] leading-[1.2] text-sm font-medium border-0 p-0'
                  />
                  <input
                    type='radio'
                    id='preferred phone-number'
                    name='preferred'
                    value='preferred phone-number'
                  />
                </div>
                <div className='w-full flex items-center justify-between rounded-[6px] border border-[#262626] bg-[#1a1a1a] px-5 py-4 gap-[6px]'>
                  <label htmlFor='preferred email'>
                    <img
                      src='src/assets/envelope-icon.svg'
                      alt=''
                      className=''
                    />
                  </label>
                  <input
                    type='email'
                    placeholder='Enter Your Email'
                    className='w-full bg-[#1a1a1a] text-[#666666] leading-[1.2] text-sm font-medium border-0 p-0'
                  />
                  <input
                    type='radio'
                    id='preferred email'
                    name='preferred'
                    value='preferred email'
                  />
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-[10px]'>
              <label
                htmlFor='message'
                className='absolute-white text-base font-semibold'
              >
                Message
              </label>
              <textarea
                placeholder='Enter your Message here..'
                className='bg-transparent rounded-[6px] px-5 py-4 border border-[#262626]'
              />
            </div>
            <div className='flex flex-col md:flex-row items-center justify-between gap-5'>
              <div className='flex items-center gap-[6px]'>
                <input
                  type='checkbox'
                  placeholder=''
                />
                <p className='text-sm font-medium leading-[1.5] text-[#999999]'>
                  I agree with <a className='underline'>Terms of Use</a> and{" "}
                  <a className='underline'>Privacy Policy</a>
                </p>
              </div>
              <button className='text-sm leading-[1.24] font-medium bg-[#703BF7] px-[34px] py-[14px] rounded-[6px] absolute-white'>
                Send Your Message
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* CallToAction */}
      <CallToAction />
    </div>
  );
};

export default Properties;
