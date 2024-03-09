import CallToAction from "../components/CallToAction";
import LinkToSearch from "../components/LinkToSearch";
import ClientDetails from "../components/ClientDetails";
import Tab from "../components/Tab";
import LocationCard from "../components/LocationCard";

const Contact = () => {
  return (
    <div className='bg-[#141414]'>
      {/* LANDING */}
      <div className=''>
        <div className='flex flex-col gap-[10px] lg:gap-[14px] px-4 py-[50px] md:pl-20 lg:pl-[162px] md:py-[100px] lg:pt-[150px] md:pr-[200px] lg:mr-[400px] md:pb-[130px] lg:pb-[160px] border-b border-[#262626]'>
          <h3 className='font-semibold text-[28px] md:text-[38px] lg:text-[48px] leading-[1.5] absolute-white'>
            Get in Touch with JOIAgents
          </h3>
          <p className='font-medium text-base lg:text-[18px] leading-[1.5] text-[#999999]'>
            Welcome to JOIAgents Contact Us page. We're here to assist you with
            any inquiries, requests, or feedback you may have. Whether you're
            looking to buy or sell a property, explore investment opportunities,
            or simply want to connect, we're just a message away. Reach out to
            us, and let's start a conversation.
          </p>
        </div>
        <div className='bg-[#141414] grid grid-cols-2 grid-rows-2 gap-[10px] md:flex md:gap-[10px] xl:gap-5 p-[10px] mx:p-[10px] xl:p-5 border-y-8 border-[#262626]'>
          <LinkToSearch
            title={"info@JOIAgents.com"}
            img={"/src/assets/envelope-icon-2.svg"}
          />
          <LinkToSearch
            title={"+1 (123) 456-7890"}
            img={"/src/assets/telephone-icon-2.svg"}
          />
          <LinkToSearch
            title={"Main Headquarters"}
            img={"/src/assets/location-icon-2.svg"}
          />
          <LinkToSearch
            title={"Instagram   LinkedIn  Facebook"}
            img={"/src/assets/logo-icon-2.svg"}
          />
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
              Let's Connect
            </h3>
            <p className='font-medium text-sm md:text-base lg:text-[18px] leading-[1.5] text-[#999999]'>
              We are excited to connect with you and learn more about your real
              estate goals. Use the form below to get in touch with JOIAgents.
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
                    Inquiry Type
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
                        Subject Matter
                      </option>
                      <option
                        value='Rental'
                        className='lg:text-[18px]'
                      >
                        Rental
                      </option>
                      <option
                        value='Sublet'
                        className='lg:text-[18px]'
                      >
                        Sublet
                      </option>
                      <option
                        value='Lease'
                        className='lg:text-[18px]'
                      >
                        Lease
                      </option>
                      <option
                        value='Purchase'
                        className='lg:text-[18px]'
                      >
                        Purchase
                      </option>
                    </select>
                  </div>
                </div>
                <div className='flex flex-col gap-[10px] md:gap-[14px] lg:gap-4 w-full md:basis-1/2'>
                  <label
                    htmlFor='property-type'
                    className='absolute-white text-base lg:text-[20px] font-semibold'
                  >
                    How Did You Hear About Us?
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
                        How Did You Hear About Us?
                      </option>
                      <option
                        value='Facebook'
                        className='lg:text-[18px]'
                      >
                        Facebook
                      </option>
                      <option
                        value='Instagram'
                        className='lg:text-[18px]'
                      >
                        Instagram
                      </option>
                      <option
                        value='Youtube'
                        className='lg:text-[18px]'
                      >
                        Youtube
                      </option>
                      <option
                        value='X'
                        className='lg:text-[18px]'
                      >
                        X
                      </option>
                    </select>
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
                className='text-sm md:text-base lg:text-[18px] leading-[1.24] font-medium bg-[#703BF7] px-[34px] lg:px-46 py-[14px] lg:py-[18px] rounded-[6px] absolute-white w-full md:w-auto'
              >
                Send Your Message
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* OFFICE LOCATIONS */}
      <div className='px-4 py-10 md:px-20 md:py-20 lg:px-[165px] flex flex-col'>
        <img
          src='src/assets/linear-stars.svg'
          alt=''
          className='self-start'
        />
        <div className='flex flex-col gap-10 md:gap-[60px]'>
          <div className='flex flex-col gap-2 md:gap-[10px] lg:gap-[14px] md:pr-[250px]'>
            <h3 className='font-semibold text-[28px] md:text-[38px] lg:text-[48px] leading-[1.5] absolute-white'>
              Discover Our Office Locations
            </h3>
            <p className='font-medium text-sm md:text-base lg:text-[18px] leading-[1.5] text-[#999999]'>
              JOIAgents is here to serve you across multiple locations. Whether
              you're looking to meet our team, discuss real estate
              opportunities, or simply drop by for a chat, we have offices
              conveniently located to serve your needs. Explore the categories
              below to find the Estatein office nearest to you
            </p>
          </div>
          <div className='flex flex-col gap-5 md:gap-10 lg:gap-10 w-full md:min-w-0'>
            <div className='tabs flex items-center justify-between gap-[10px] p-[10px] w-full bg-[#262626] rounded-[8px]'>
              <div className='basis-1/2'>
                <Tab title={"All"} />
              </div>
              <div className='basis-1/2'>
                <Tab title={"Regional"} />
              </div>
              <div className='basis-1/2'>
                <Tab title={"International"} />
              </div>
            </div>
            <div className='flex flex-col md:flex-row gap-5'>
              <LocationCard
                concise={
                  "Our main headquarters serve as the heart of JOIAgents. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us."
                }
                title={"Main Headquarters"}
                address={"123 Estatein Plaza, City Center, Metropolis"}
              />
              <LocationCard
                concise={
                  "JOIAgents presence extends to multiple regions, each with its own dynamic real estate landscape. Discover our regional offices, staffed by local experts who understand the nuances of their respective markets."
                }
                title={"Regional Offices"}
                address={"456 Urban Avenue, Downtown District, Metropolis"}
              />
            </div>
          </div>
        </div>
      </div>
      {/* EXPLORE */}
      <div className='px-4 py-10 md:px-20 md:py-20 lg:px-[165px]'>
        <div className='flex flex-col gap-[55px] p-6 md:p-[60px] lg:p-20 border border-[#262626] rounded-xl'>
          <div className='flex gap-[10px] md:gap-5 justify-between'>
            <div className='flex flex-col gap-[10px] md:gap-5 md:w-1/2'>
              <picture className=''>
                <source
                  srcSet='/src/assets/office-space-desktop.svg'
                  media='(min-width: 769px)'
                ></source>
                <source
                  srcSet='/src/assets/office-space-laptop.svg'
                  media='(min-width: 600px)'
                ></source>
                <img
                  src='/src/assets/office-space.svg'
                  alt=''
                />
              </picture>
              <picture>
                <source
                  srcSet='/src/assets/meeting-desktop.svg'
                  media='(min-width: 769px)'
                ></source>
                <source
                  srcSet='/src/assets/meeting-laptop.svg'
                  media='(min-width: 600px)'
                ></source>
                <img
                  src='/src/assets/meeting.svg'
                  alt=''
                />
              </picture>
            </div>
            <div className='flex flex-col gap-[10px] md:gap-5 md:w-1/2'>
              <picture>
                <source
                  srcSet='/src/assets/group-photo-1-desktop.svg'
                  media='(min-width: 769px)'
                ></source>
                <source
                  srcSet='/src/assets/group-photo-1-laptop.svg'
                  media='(min-width: 600px)'
                ></source>
                <img
                  src='/src/assets/group-photo-1.svg'
                  alt=''
                />
              </picture>
              <div className='flex gap-[10px] md:gap-5'>
                <picture>
                  <source
                    srcSet='/src/assets/group-1-desktop.svg'
                    media='(min-width: 769px)'
                  ></source>
                  <source
                    srcSet='/src/assets/group-1-laptop.svg'
                    media='(min-width: 600px)'
                  ></source>
                  <img
                    src='/src/assets/group-1.svg'
                    alt=''
                    className='w-full'
                  />
                </picture>
                <picture>
                  <source
                    srcSet='/src/assets/group-2-desktop.svg'
                    media='(min-width: 769px)'
                  ></source>
                  <source
                    srcSet='/src/assets/group-2-laptop.svg'
                    media='(min-width: 600px)'
                  ></source>
                  <img
                    src='/src/assets/group-2.svg'
                    alt=''
                    className='w-full'
                  />
                </picture>
              </div>
            </div>
          </div>
          <div className=''>
            <img
              src='src/assets/linear-stars.svg'
              alt=''
              className='self-start'
            />
            <div className='flex flex-col md:flex-row gap-10'>
              <div className='flex flex-col md:flex-row gap-5'>
                <div className='flex flex-col gap-5 md:gap-[10px] lg:gap-[14px] md:w-1/2'>
                  <h3 className='font-semibold text-[28px] md:text-[38px] lg:text-[48px] leading-[1.5] absolute-white'>
                    Explore Our World
                  </h3>
                  <p className='font-medium text-sm md:text-base lg:text-[18px] leading-[1.5] text-[#999999]'>
                    Step inside the world of JOIAgents, where professionalism
                    meets warmth, and expertise meets passion. Our gallery
                    offers a glimpse into our team and workspaces, inviting you
                    to get to know us better.am.
                  </p>
                </div>
                <picture className='md:w-1/2'>
                  <source
                    srcSet='/src/assets/handshake-desktop.svg'
                    media='(min-width: 769px)'
                  ></source>
                  <source
                    srcSet='/src/assets/handshake-laptop.svg'
                    media='(min-width: 600px)'
                  ></source>
                  <img
                    src='/src/assets/handshake.svg'
                    alt=''
                    className='w-full'
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CALL TO ACTION */}
      <CallToAction />
    </div>
  );
};

export default Contact;
