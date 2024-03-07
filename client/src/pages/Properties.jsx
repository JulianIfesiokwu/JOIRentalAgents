import CallToAction from "../components/CallToAction";
import ClientDetails from "../components/ClientDetails";
import PropertyCardShort from "../components/PropertyCardShort";
import { SearchFilter } from "../components/SearchFilter";

const Properties = () => {
  return (
    <div className='bg-[#141414]'>
      {/* LANDING SECTION */}
      <div className='flex flex-col gap-10'>
        <div className='flex flex-col gap-[10px] lg:gap-[14px] px-4 py-[50px] md:pl-20 lg:pl-[162px] md:pt-[100px] lg:pt-[150px] md:pr-[200px] lg:mr-[400px] md:pb-[130px] lg:pb-[160px] border-b border-[#262626]'>
          <h3 className='font-semibold text-[28px] md:text-[38px] lg:text-[48px] leading-[1.5] absolute-white'>
            Find Your Dream Property
          </h3>
          <p className='font-medium text-base md:text-[18px] leading-[1.5] text-[#999999]'>
            Welcome to JOIAgents, where your dream property awaits in every
            corner of our beautiful world. Explore our curated selection of
            properties, each offering a unique story and a chance to redefine
            your life. With categories to suit every dreamer, your journey{" "}
          </p>
        </div>
        <form className='flex flex-col gap-5 md:w-full md:gap-[2px] px-4 md:px-20 lg:px-[162px] md:relative'>
          <div className='flex items-center md:px-[90px] lg:px-[148px] w-full justify-between'>
            <div className='w-full flex items-center justify-between gap-[6px] px-4 py-[14px] border border-[#262626] rounded-[12px] shadow-effect md:mt-[-100px] bg-[#141414]'>
              <input
                placeholder='Search For A Property'
                type='search'
                className='absolute-white leading-[24px] text-base md:text-[20px] lg:text-[24px] font-medium text-[#999999] bg-transparent md:bg-[#141414] outline-none border-none'
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
                <span className='hidden md:inline font-medium text-sm lg:text-[18px] leading-[1.5] absolute-white'>
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
      <div className='flex flex-col px-4 py-[50px] md:px-20 md:py-20 lg:px-[162px]'>
        <img
          src='src/assets/linear-stars.svg'
          alt=''
          className='self-start'
        />
        <div className='flex flex-col gap-10 md:gap-[60px]'>
          <div className='flex flex-col gap-2 md:gap-[10px] md:pr-[250px]'>
            <h3 className='absolute-white font-semibold text-[28px] md:text-[38px] lg:text-[48px] leading-[1.5]'>
              Discover a World of Possibilities
            </h3>
            <p className='font-medium text-sm md:text-base lg:text-[18px] leading-[1.5] text-[#999999]'>
              Our portfolio of properties is as diverse as your dreams. Explore
              the following categories to find the perfect property that
              resonates with your vision of home
            </p>
          </div>
          <div className='flex flex-col gap-[30px] md:gap-15'>
            <div className=' flex flex-col md:flex-row md:gap-5'>
              <div className='md:basis-1/2 '>
                <PropertyCardShort />
              </div>
              <div className='md:basis-1/2 hidden md:inline'>
                <PropertyCardShort />
              </div>
              <div className='md:basis-1/2 hidden md:inline'>
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
      <div className='flex flex-col px-4 py-[50px] md:px-20 md:py-20 lg:px-[162px]'>
        <img
          src='src/assets/linear-stars.svg'
          alt=''
          className='self-start'
        />
        <div className='flex flex-col gap-10 md:gap-15'>
          <div className='flex flex-col gap-2 md:gap-[10px] lg:gap-[14px] md:pr-[250px] lg:pr-[300px]'>
            <h3 className='absolute-white font-semibold text-[28px] md:text-[38px] lg:text-[48px] leading-[1.5]'>
              Let's Make it Happen
            </h3>
            <p className='font-medium text-sm md:text-base lg:text-[18px] leading-[1.5] text-[#999999]'>
              Ready to take the first step toward your dream property? Fill out
              the form below, and our real estate wizards will work their magic
              to find your perfect match. Don't wait; let's embark on this
              exciting journey together.
            </p>
          </div>
          <form className='flex flex-col md:flex-row flex-wrap rounded-[12px] gap-5 lg:gap-[50px] p-4 md:p-[50px] lg:p-[75px] border border-[#262626]'>
            <div className='md:flex md:flex-col gap-[30px] items-center md:w-full'>
              <div className='flex flex-col md:flex-row md:w-full justify-between items-center gap-5 md:gap-[30px] lg:gap-[45px]'>
                <ClientDetails
                  type={"text"}
                  placeholder={"Enter First Name"}
                  label={"First Name"}
                />
                <ClientDetails
                  type={"text"}
                  placeholder={"Enter Last Name"}
                  label={"Last Name"}
                />
                <ClientDetails
                  type={"email"}
                  placeholder={"Enter your Email"}
                  label={"Email"}
                />
                <ClientDetails
                  type={"numeric"}
                  placeholder={"Enter Phone Number"}
                  label={"Phone"}
                />
              </div>
              <div className='flex flex-col md:flex-row md:w-full justify-between items-center gap-5 md:gap-[30px] lg:gap-[45px]'>
                <div className='flex flex-col gap-[10px] md:gap-[14px] lg:gap-4 w-full md:basis-1/2'>
                  <label
                    htmlFor='preferred-location'
                    className='absolute-white text-base lg:text-[20px] font-semibold'
                  >
                    Preferred Location
                  </label>
                  <div className='w-full flex items-center justify-between rounded-[6px] border border-[#262626] bg-[#1a1a1a] px-5 py-4 lg:py-[22px]'>
                    <select
                      name='preferred-location'
                      id='preferred-location'
                      className='w-full text-[#666666] leading-[1.2] text-sm lg:text-[18px] font-medium bg-transparent outline-none border-0 p-0'
                    >
                      <option
                        value='all'
                        className='lg:text-[18px]'
                      >
                        Select Location
                      </option>
                      <option
                        value='lagos'
                        className='lg:text-[18px]'
                      >
                        Lagos
                      </option>
                      <option
                        value='abuja'
                        className='lg:text-[18px]'
                      >
                        Abuja
                      </option>
                      <option
                        value='jos'
                        className='lg:text-[18px]'
                      >
                        Jos
                      </option>
                      <option
                        value='enugu'
                        className='lg:text-[18px]'
                      >
                        Enugu
                      </option>
                    </select>
                  </div>
                </div>
                <div className='flex flex-col gap-[10px] md:gap-[14px] lg:gap-4 w-full md:basis-1/2'>
                  <label
                    htmlFor='property-type'
                    className='absolute-white text-base lg:text-[20px] font-semibold'
                  >
                    Property Type
                  </label>
                  <div className='w-full flex items-center justify-between rounded-[6px] border border-[#262626] bg-[#1a1a1a] px-5 py-4 lg:py-[22px]'>
                    <select
                      name='property-type'
                      id='property-type'
                      className='w-full text-[#666666] leading-[1.2] text-sm lg:text-[18px] font-medium bg-transparent outline-none border-0 p-0'
                    >
                      <option
                        value='all'
                        className='lg:text-[18px]'
                      >
                        Select Property Type
                      </option>
                      <option
                        value='Duplex'
                        className='lg:text-[18px]'
                      >
                        Duplex
                      </option>
                      <option
                        value='Bungalow'
                        className='lg:text-[18px]'
                      >
                        Bungalow
                      </option>
                      <option
                        value='Studio'
                        className='lg:text-[18px]'
                      >
                        Studio
                      </option>
                      <option
                        value='Flat'
                        className='lg:text-[18px]'
                      >
                        Flat
                      </option>
                    </select>
                  </div>
                </div>
                <div className='flex flex-col gap-[10px] md:gap-[14px] lg:gap-4 w-full md:basis-1/2'>
                  <label
                    htmlFor='bathroom-number'
                    className='absolute-white text-base lg:text-[20px] font-semibold'
                  >
                    No. of Bathrooms
                  </label>
                  <div className='w-full flex items-center justify-between rounded-[6px] border border-[#262626] bg-[#1a1a1a] px-5 py-4 lg:py-[22px]'>
                    <select
                      name='bathroom-number'
                      id='bathroom-number'
                      className='w-full text-[#666666] leading-[1.2] text-sm lg:text-[18px] font-medium bg-transparent outline-none border-0 p-0'
                    >
                      <option value='all'>Select no. of Bathrooms</option>
                      <option value='1'>1</option>
                      <option value='2'>2</option>
                      <option value='3'>3</option>
                      <option value='4'>4</option>
                    </select>
                  </div>
                </div>
                <div className='flex flex-col gap-[10px] md:gap-[14px] lg:gap-4 w-full md:basis-1/2'>
                  <label
                    htmlFor='bedroom-number'
                    className='absolute-white text-base lg:text-[20px] font-semibold'
                  >
                    No. of Bedrooms
                  </label>
                  <div className='w-full flex items-center justify-between rounded-[6px] border border-[#262626] bg-[#1a1a1a] px-5 py-4 lg:py-[22px]'>
                    <select
                      name='bedroom-number'
                      id='bedroom-number'
                      className='w-full text-[#666666] leading-[1.2] text-sm lg:text-[18px] font-medium bg-transparent outline-none border-0 p-0'
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
              <div className='md:flex justify-between items-center gap-5 md:gap-[30px] lg:gap-[45px] md:w-full'>
                <div className='flex flex-col gap-[10px] w-full md:basis-1/2'>
                  <label
                    htmlFor='budget'
                    className='absolute-white text-base lg:text-[20px] font-semibold'
                  >
                    Budget
                  </label>
                  <div className='w-full flex items-center justify-between rounded-[6px] border border-[#262626] bg-[#1a1a1a] px-5 py-4 lg:py-[22px]'>
                    <select
                      name='budget'
                      id='budget'
                      className='w-full text-[#666666] leading-[1.2] text-sm lg:text-[18px] font-medium bg-transparent outline-none border-0 p-0'
                    >
                      <option value='all'>Select Budget</option>
                      <option value='100000'>100000</option>
                      <option value='200000'>200000</option>
                      <option value='500000'>500000</option>
                      <option value='1000000'>1, 000, 000</option>
                    </select>
                  </div>
                </div>
                <div className='flex flex-col gap-[10px] lg:gap-[16px] md:basis-1/2'>
                  <label
                    htmlFor='contact-method'
                    className='absolute-white text-base lg:text-[20px] font-semibold'
                  >
                    Preferred Contact Method
                  </label>
                  <div className='flex flex-col md:flex-row md:gap-[30px] gap-4'>
                    <div className='w-full flex items-center justify-between rounded-[6px] border border-[#262626] bg-[#1a1a1a] px-5 lg:px-6 py-4 lg:py-[20px] gap-[6px]'>
                      <label htmlFor='preferred phone-number'>
                        <img
                          src='src/assets/phone-icon.svg'
                          alt=''
                          className=''
                        />
                      </label>
                      <input
                        type='number'
                        placeholder='Enter Your Number'
                        className='w-full bg-[#1a1a1a] text-[#666666] leading-[1.2] text-sm md:text-base lg:text-[18px] font-medium border-0 p-0'
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
              </div>
              <div className='flex flex-col gap-[10px] lg:gap-4 md:w-full'>
                <label
                  htmlFor='message'
                  className='absolute-white text-base lg:text-[20px] font-semibold'
                >
                  Message
                </label>
                <textarea
                  placeholder='Enter your Message here..'
                  rows='5'
                  className='bg-transparent rounded-[6px] px-5 py-4 lg:py-6 border border-[#262626] lg:text-[18px] absolute-white'
                />
              </div>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-between gap-5 lg:gap-[50px] w-full'>
              <div className='flex items-center justify-between gap-[6px] lg:gap-[10px]'>
                <input
                  type='checkbox'
                  placeholder=''
                />
                <p className='text-sm md:text-base lg:text-[18px] font-medium leading-[1.5] text-[#999999]'>
                  I agree with <a className='underline'>Terms of Use</a> and{" "}
                  <a className='underline'>Privacy Policy</a>
                </p>
              </div>
              <button
                type='submit'
                className='text-sm md:text-base lg:text-[18px] leading-[1.24] font-medium bg-[#703BF7] px-[34px] lg:px-46 py-[14px] lg:py-[18px] rounded-[6px] absolute-white w-full'
              >
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
