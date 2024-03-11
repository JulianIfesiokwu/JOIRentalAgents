import CallToAction from "../components/CallToAction";
import LinkToSearch from "../components/LinkToSearch";
import AchievementCard from "../components/AchievementCard";
import PropertyValueCard from "../components/PropertyValueCard";

const Services = () => {
  return (
    <div className='bg-[#141414]'>
      {/* LANDING */}
      <div className=''>
        <div className='flex flex-col gap-[10px] lg:gap-[14px] px-4 py-[50px] md:pl-20 lg:pl-[162px] md:py-[100px] lg:pt-[150px] md:pr-[200px] lg:mr-[400px] md:pb-[130px] lg:pb-[160px] border-b border-[#262626]'>
          <h3 className='font-semibold text-[28px] md:text-[38px] lg:text-[48px] leading-[1.5] absolute-white'>
            Elevate Your Real Estate Experience
          </h3>
          <p className='font-medium text-base lg:text-[18px] leading-[1.5] text-[#999999]'>
            Welcome to JOIAgents, where your real estate aspirations meet expert
            guidance. Explore our comprehensive range of services, each designed
            to cater to your unique needs and dreams.
          </p>
        </div>
        <div className='bg-[#141414] grid grid-cols-2 grid-rows-2 gap-[10px] md:flex md:gap-[10px] xl:gap-5 p-[10px] mx:p-[10px] xl:p-5 border-y-8 border-[#262626] rounded-[12px] md:rounded-none'>
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
      </div>
      {/* PROPERTY VALUE */}
      <div className='px-4 py-10 md:px-20 md:py-20 lg:px-[165px] flex flex-col'>
        <img
          src='src/assets/linear-stars.svg'
          alt=''
          className='self-start'
        />
        <div className='flex flex-col gap-10'>
          <div className='flex flex-col gap-2 md:gap-[10px] md:pr-[250px] lg:gap-[14px]'>
            <h3 className='font-semibold text-[28px] md:text-[38px] lg:text-[48px] leading-[1.5] absolute-white'>
              Unlock Property Value
            </h3>
            <p className='font-medium text-sm md:text-base lg:text-[18px] leading-[1.5] text-[#999999]'>
              Selling your property should be a rewarding experience, and at
              JOIAgents, we make sure it is. Our Property Selling Service is
              designed to maximize the value of your property, ensuring you get
              the best deal possible. Explore the categories below to see how we
              can help you at every step of your selling journey
            </p>
          </div>
          <div className='flex flex-col gap-5'>
            <div className='flex flex-col  md:flex-row gap-5'>
              <PropertyValueCard
                img={"src/assets/valuation-mastery.svg"}
                title={"Valuation Mastery"}
                concise={
                  "Discover the true worth of your property with our expert valuation services."
                }
              />
              <PropertyValueCard
                img={"src/assets/strategic-marketing.svg"}
                title={"Strategic Marketing"}
                concise={
                  "Selling a property requires more than just a listing; it demands a strategic marketing."
                }
              />
              <PropertyValueCard
                img={"src/assets/negotiation-wizardry.svg"}
                title={"Negotiation Wizardry"}
                concise={
                  "Negotiating the best deal is an art, and our negotiation experts are masters of it."
                }
              />
            </div>
            <div className='flex flex-col md:flex-row gap-5'>
              <PropertyValueCard
                img={"src/assets/closing-success.svg"}
                title={"Closing Success"}
                concise={
                  "A successful sale is not complete until the closing. We guide you through the intricate closing process."
                }
              />
              <div className='flex flex-col p-6 md:p-10 md:w-full gap-5 border border-[#262626] rounded-[10px] bg-valueOfProperty bg-[#1a1a1a]'>
                <div className='flex flex-col md:flex-row md:justify-between gap-5'>
                  <h3 className='absolute-white font-bold text-[20px] md:text-[24px] leading-[1.5]'>
                    Unlock the Value of Your Property Today
                  </h3>
                  <button
                    type='button'
                    className='bg-[#141414] leading-[1.5] font-medium text-[14px] absolute-white border border-[#262626] px-5 py-[14px] rounded-lg'
                  >
                    Learn More
                  </button>
                </div>
                <p className='font-medium text-[14px] md:text-base leading-[1.5] text-[#999999]'>
                  Ready to unlock the true value of your property? Explore our
                  Property Selling Service categories and let us help you
                  achieve the best deal possible for your valuable asset.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* EFFORTLESS PROPERTY MANAGEMENT */}
      <div className='px-4 py-10 md:px-20 md:py-20 lg:px-[165px] flex flex-col'>
        <img
          src='src/assets/linear-stars.svg'
          alt=''
          className='self-start'
        />
        <div className='flex flex-col gap-10'>
          <div className='flex flex-col gap-2 md:gap-[10px] md:pr-[250px] lg:gap-[14px]'>
            <h3 className='font-semibold text-[28px] md:text-[38px] lg:text-[48px] leading-[1.5] absolute-white'>
              Effortless Property Management
            </h3>
            <p className='font-medium text-sm md:text-base lg:text-[18px] leading-[1.5] text-[#999999]'>
              Owning a property should be a pleasure, not a hassle. JOIAgents
              Property Management Service takes the stress out of property
              ownership, offering comprehensive solutions tailored to your
              needs. Explore the categories below to see how we can make
              property management effortless for you.
            </p>
          </div>
          <div className='flex flex-col gap-5'>
            <div className='flex flex-col  md:flex-row gap-5'>
              <PropertyValueCard
                img={"src/assets/tenant-harmony.svg"}
                title={"Tenant Harmony"}
                concise={
                  "Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies."
                }
              />
              <PropertyValueCard
                img={"src/assets/maintainance-ease.svg"}
                title={"Maintenance Ease"}
                concise={
                  "Say goodbye to property maintenance headaches. We handle all aspects of property upkeep."
                }
              />
              <PropertyValueCard
                img={"src/assets/peace-of-mind.svg"}
                title={"Financial Peace of Mind"}
                concise={
                  "Managing property finances can be complex. Our financial experts take care of rent collection."
                }
              />
            </div>
            <div className='flex flex-col md:flex-row gap-5'>
              <PropertyValueCard
                img={"src/assets/legal-guardian.svg"}
                title={"Legal Guardian"}
                concise={
                  "Stay compliant with property laws and regulations effortlessly."
                }
              />
              <div className='flex flex-col p-6 md:p-10 md:w-full gap-5 border border-[#262626] rounded-[10px] bg-valueOfProperty bg-[#1a1a1a]'>
                <div className='flex flex-col md:flex-row md:justify-between gap-5'>
                  <h3 className='absolute-white font-bold text-[20px] md:text-[24px] leading-[1.5]'>
                    Experience Effortless Property Management
                  </h3>
                  <button
                    type='button'
                    className='bg-[#141414] leading-[1.5] font-medium text-[14px] absolute-white border border-[#262626] px-5 py-[14px] rounded-lg'
                  >
                    Learn More
                  </button>
                </div>
                <p className='font-medium text-[14px] md:text-base leading-[1.5] text-[#999999]'>
                  Ready to experience hassle-free property management? Explore
                  our Property Management Service categories and let us handle
                  the complexities while you enjoy the benefits of property
                  ownership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Smart Investments, Informed Decisions */}
      <div className='px-4 py-10 md:px-20 md:py-20 lg:px-[165px] flex flex-col'>
        <img
          src='src/assets/linear-stars.svg'
          alt=''
          className='self-start'
        />
        <div className='flex flex-col md:flex-row items-center gap-10 md:gap-[50px]'>
          <div className='md:w-1/3 flex flex-col gap-[30px] md:gap-10'>
            <div className='flex flex-col gap-2 md:gap-[10px] lg:gap-[14px]'>
              <h3 className='font-semibold text-[28px] md:text-[38px] lg:text-[48px] leading-[1.5] absolute-white'>
                Smart Investments, Informed Decisions
              </h3>
              <p className='font-medium text-sm md:text-base md:text-[16px] leading-[1.5] text-[#999999]'>
                Building a real estate portfolio requires a strategic approach.
                JOIAgents Investment Advisory Service empowers you to make smart
                investments and informed decisions.
              </p>
            </div>
            <div className='flex flex-col p-6 gap-5 border border-[#262626] bg-[#1a1a1a] rounded-[10px] bg-valueOfProperty'>
              <h3 className='absolute-white font-bold text-[20px] leading-[1.5]'>
                Unlock Your Investment Potential
              </h3>
              <p className='font-medium text-[14px] leading-[1.5] text-[#999999]'>
                Explore our Property Management Service categories and let us
                handle the complexities while you enjoy the benefits of property
                ownership.
              </p>
              <button
                type='button'
                className='bg-[#141414] leading-[1.5] font-medium text-[14px] absolute-white border border-[#262626] px-5 py-[14px] rounded-lg'
              >
                Learn More
              </button>
            </div>
          </div>
          <div className='md:w-2/3 flex flex-col gap-[10px] p-[10px] bg-[#262626] md:border border-[#262626] rounded-xl'>
            <div className='flex flex-col md:flex-row gap-[10px]'>
              <PropertyValueCard
                img={"src/assets/market-insight.svg"}
                title={"Market Insight"}
                concise={
                  "Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions."
                }
              />
              <PropertyValueCard
                img={"src/assets/roi-assessment.svg"}
                title={"ROI Assessment"}
                concise={
                  "Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments."
                }
              />
            </div>
            <div className='flex flex-col md:flex-row gap-[10px]'>
              <PropertyValueCard
                img={"src/assets/customized-strategies.svg"}
                title={"Customized Strategies"}
                concise={
                  "Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs."
                }
              />
              <PropertyValueCard
                img={"src/assets/diversification-mastery.svg"}
                title={"Diversification Mastery"}
                concise={
                  "Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations."
                }
              />
            </div>
          </div>
        </div>
      </div>
      {/* CALL TO ACTION */}
      <CallToAction />
    </div>
  );
};

export default Services;
