import CallToAction from "../components/CallToAction";
import Metrics from "../components/Metrics";
import ValuesCard from "../components/ValueCard";
import AchievementCard from "../components/AchievementCard";
import NavigateCard from "../components/NavigateCard";
import TeamMemberCard from "../components/TeamMemberCard";

const About = () => {
  return (
    <div className='bg-[#141414] px-4 py-10 md:px-20 md:py-20 flex flex-col gap-10'>
      {/* LANDING SECTION */}
      <div className=''>
        <div className='flex flex-col md:flex-row-reverse items-center gap-10'>
          <picture className='basis-1/2'>
            <source
              srcSet='/src/assets/about-landing-desktop.svg'
              media='(min-width: 769px)'
            ></source>
            <source
              srcSet='/src/assets/about-landing-laptop.svg'
              media='(min-width: 600px)'
            ></source>
            <img
              src='/src/assets/about-landing.svg'
              alt=''
              className='object-cover'
            />
          </picture>
          <div className='basis-1/2'>
            <img
              src='src/assets/linear-stars.svg'
              alt=''
              className=''
            />
            <div className='flex flex-col gap-10 md:gap-[50px]'>
              <div className='flex flex-col gap-2'>
                <h3 className='font-semibold text-[28px] md:text-[38px] leading-[1.5] absolute-white'>
                  Our Journey
                </h3>
                <p className='font-medium text-sm md:text-base leading-[1.5] text-[#999999]'>
                  Our story is one of continuous growth and evolution. We
                  started as a small team with big dreams, determined to create
                  a real estate platform that transcended the ordinary. Over the
                  years, we've expanded our reach, forged valuable partnerships,
                  and gained the trust of countless clients.
                </p>
              </div>
              <Metrics />
            </div>
          </div>
        </div>
      </div>
      {/* vALUES */}
      <div className=''>
        <div className='flex flex-col items-center md:flex-row gap-10'>
          <div className='basis-1/3 flex flex-col gap-2'>
            <img
              src='src/assets/linear-stars.svg'
              alt=''
              className='self-start'
            />
            <h3 className='font-semibold text-[28px] leading-[1.5] absolute-white'>
              Our Values
            </h3>
            <p className='font-medium text-sm leading-[1.5] text-[#999999]'>
              Our story is one of continuous growth and evolution. We started as
              a small team with big dreams, determined to create a real estate
              platform that transcended the ordinary.
            </p>
          </div>
          <div className='basis-2/3 flex flex-col md:grid p-6 gap-5 md:gap-6 md:p-[50px] border border-[#262626] rounded-[12px] shadow-effect'>
            <div className='flex flex-col gap-5 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-1'>
              <ValuesCard
                title={"Trust"}
                concise={
                  "Trust is the cornerstone of every successful real estate transaction."
                }
                image={"src/assets/trust-icon.svg"}
              />
              <div className='md:hidden w-full border-b border-[#262626]'></div>
            </div>
            <div className='flex flex-col gap-5 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-1'>
              <div className='hidden md:inline-block h-[100%] w-[1px] bg-[#262626] md:mr-5'></div>
              <ValuesCard
                title={"Excellence"}
                concise={
                  "We set the bar high for ourselves. From the properties we list to the services we provide."
                }
                image={"src/assets/excellence-icon.svg"}
              />
            </div>
            <div className='flex flex-col gap-5 md:pt-4'>
              <ValuesCard
                title={"Client-Centric"}
                concise={
                  "Your dreams and needs are at the center of our universe. We listen, understand."
                }
                image={"src/assets/excellence-icon.svg"}
              />
            </div>

            <div className='md:pt-4 md:flex items-center'>
              <ValuesCard
                title={"Our Commitment"}
                concise={
                  "We are dedicated to providing you with the highest level of service, professionalism"
                }
                image={"src/assets/trust-icon.svg"}
              />
            </div>
          </div>
        </div>
      </div>
      {/* ACHIEVEMENTS */}
      <div className=''>
        <img
          src='src/assets/linear-stars.svg'
          alt=''
          className=''
        />
        <div className='flex flex-col gap-10'>
          <div className='flex flex-col gap-2'>
            <h3 className='font-semibold text-[28px] leading-[1.5] absolute-white'>
              Our Achievements
            </h3>
            <p className='font-medium text-sm leading-[1.5] text-[#999999]'>
              Our story is one of continuous growth and evolution. We started as
              a small team with big dreams, determined to create a real estate
              platform that transcended the ordinary.
            </p>
          </div>
          <div className='flex flex-col md:flex-row gap-5 md:gap-[30px]'>
            <AchievementCard
              title={"3+ Years of Excellence"}
              concise={
                "With over 3 years in the industry, we've amassed a wealth of knowledge and experience."
              }
            />
            <AchievementCard
              title={"Happy Clients"}
              concise={
                "Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do."
              }
            />
            <AchievementCard
              title={"Industry Recognition"}
              concise={
                "We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence."
              }
            />
          </div>
        </div>
      </div>
      {/* NAVIGATING */}
      <div className=''>
        <img
          src='src/assets/linear-stars.svg'
          alt=''
          className=''
        />
        <div className='flex flex-col gap-10'>
          <div className='flex flex-col gap-2'>
            <h3 className='font-semibold text-[28px] leading-[1.5] absolute-white'>
              Navigating the JOIAgents Experience
            </h3>
            <p className='font-medium text-sm leading-[1.5] text-[#999999]'>
              At Estatein, we've designed a straightforward process to help you
              find and purchase your dream property with ease. Here's a
              step-by-step guide to how it all works.
            </p>
          </div>
          <div className='flex flex-col md:gap-10'>
            <div className='flex flex-col items-stretch md:grid auto-rows-fr grid-cols-3 gap-5'>
              <NavigateCard
                stepNumber={"01"}
                title={"Discover a World of Possibilities"}
                concise={
                  "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location."
                }
              />
              <NavigateCard
                stepNumber={"02"}
                title={"Narrowing Down Your Choices"}
                concise={
                  "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision."
                }
              />
              <NavigateCard
                stepNumber={"03"}
                title={"Personalized Guidance"}
                concise={
                  "Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away."
                }
              />
            </div>
            <div className='hidden md:grid items-stretch content-stretch grid-rows-1 grid-cols-3 gap-5'>
              <NavigateCard
                stepNumber={"04"}
                title={"See It for Yourself"}
                concise={
                  "Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away."
                }
              />
              <NavigateCard
                stepNumber={"05"}
                title={"Making Informed Decisions"}
                concise={
                  "Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed."
                }
              />
              <NavigateCard
                stepNumber={"06"}
                title={"Getting the Best Deal"}
                concise={
                  "We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms."
                }
              />
            </div>
          </div>
        </div>
      </div>
      {/* TEAM */}
      <div className=''>
        <img
          src='src/assets/linear-stars.svg'
          alt=''
          className=''
        />
        <div className='flex flex-col gap-10 md:gap-15'>
          <div className='flex flex-col gap-2'>
            <h3 className='font-semibold text-[28px] md:text-[38px] leading-[1.5] absolute-white'>
              Meet the JOIAgents Team
            </h3>
            <p className='font-medium text-sm md:text-base leading-[1.5] text-[#999999]'>
              At JOIAgents, our success is driven by the dedication and
              expertise of our team. Get to know the people behind our mission
              to make your real estate dreams a reality.
            </p>
          </div>
          <div className='flex flex-col items-stretch md:grid auto-rows-fr grid-cols-4 gap-5'>
            <TeamMemberCard
              name={"Max Mitchell"}
              status={"Founder"}
              image={"src/assets/max-mitchell.svg"}
            />
            <TeamMemberCard
              name={"Sarah Johnson"}
              status={"Chief Real Estate Officer"}
              image={"src/assets/sarah-johnson.svg"}
            />
            <TeamMemberCard
              name={"David Brown"}
              status={"Head of Property Management"}
              image={"src/assets/david-brown.svg"}
            />
            <TeamMemberCard
              name={"Michael Turner"}
              status={"Legal Counsel"}
              image={"src/assets/michael-turner.svg"}
            />
          </div>
        </div>
      </div>
      {/* VALUED CLIENTS */}
      <div className=''>
        <img
          src='src/assets/linear-stars.svg'
          alt=''
          className=''
        />
        <div className='flex flex-col gap-10'>
          <div className='flex flex-col gap-2'>
            <h3 className='font-semibold text-[28px] leading-[1.5] absolute-white'>
              Our Valued Clients
            </h3>
            <p className='font-medium text-sm leading-[1.5] text-[#999999]'>
              At JOIAgents, we have had the privilege of working with a diverse
              range of clients across various industries. Here are some of the
              clients we've had the pleasure of serving.
            </p>
          </div>
          <div className='flex flex-col gap-[30px]'>
            <div className='flex flex-col gap-[30px] p-6 border border-[#262626] rounded-[12px] shadow-effect'>
              <div className='flex flex-col gap-5'>
                <p className='font-medium text-[#999999] text-sm leading-[1.5]'>
                  Since 2019
                </p>
                <h3 className='absolute-white leading-[1.5] font-semibold text-[20px]'>
                  ABC Corporation
                </h3>
                <button className='bg-[#1a1a1a] absolute-white leading-[1.5] font-medium text-sm px-5 py-[14px] border border-[#262626] rounded-lg'>
                  Visit Website
                </button>
              </div>
              <div className='flex gap-4'>
                <div className=''>
                  <p className='text-[#999999] text-[12px] font-medium leading-[1.5] flex gap-[2px] item-center'>
                    <img
                      src='src/assets/domain-icon.svg'
                      alt=''
                      className=''
                    />
                    Domain
                  </p>
                  <p className='absolute-white leading-[1.5] font-medium text-sm'>
                    Commercial Real Estate
                  </p>
                </div>
                <div className='pl-4 border-l border-[#262626]'>
                  <p className='text-[#999999] text-[12px] font-medium leading-[1.5] flex gap-[2px] item-center'>
                    <img
                      src='src/assets/category-icon.svg'
                      alt=''
                      className=''
                    />
                    Category
                  </p>
                  <p className='absolute-white leading-[1.5] font-medium text-sm'>
                    Luxury Home Development
                  </p>
                </div>
              </div>
              <div className='flex flex-col border border-[#262626] gap-2 p-5 rounded-[12px]'>
                <p className='text-[#999999] leading-[1.5] font-medium text-[14px]'>
                  What They Said 🤗
                </p>
                <p className='absolute-white leading-[1.5] font-medium text-sm'>
                  JOIAgents expertise in finding the perfect office space for
                  our expanding operations was invaluable. They truly understand
                  our business needs.
                </p>
              </div>
            </div>
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
      {/* CALL TO ACTION */}
      <CallToAction />
    </div>
  );
};

export default About;
