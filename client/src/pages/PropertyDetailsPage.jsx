import CallToAction from "../components/CallToAction";
import FAQ from "../components/FAQ.jsx";
import ClientDetails from "../components/ClientDetails.jsx";
import FeaturesCard from "../components/FeaturesCard.jsx";

const PropertyDetailsPage = () => {
  return (
    <div className='bg-[#141414]'>
      {/* LANDING SECTION */}
      <div className='flex flex-col gap-5 px-4 py-10 md:px-20 md:py-20 lg:px-[165px]'>
        <div className='flex flex-col gap-[30px]'>
          <div className='flex flex-col gap-[10px]'>
            <h3 className='absolute-white font-semibold text-[20px] leading-[1.5]'>
              Seaside Serenity Villa
            </h3>
            <div className='flex gap-5'>
              <div className='flex gap-1 rounded-md p-2 border border-[#262626]'>
                <img
                  src='/src/assets/location-icon.svg'
                  alt=''
                />
                <p className='absolute-white font-medium text-[14px] leading-[1.5]'>
                  Malibu, California
                </p>
              </div>
              <p className='flex items-center gap-1 text-[14px] font-medium text-[#999999] leading-[1.5]'>
                Price{" "}
                <span className='absolute-white font-semibold text-[18px] leading-[1.5]'>
                  $1,250,000
                </span>
              </p>
            </div>
          </div>
          <div className='border border-[#262626] rounded-xl flex flex-col p-5 gap-5'>
            <img
              src='/src/assets/malibu-phone-image.svg'
              alt=''
              className='rounded-[10px] w-full'
            />
            <div className='flex p-[10px] gap-[10px] justify-between rounded-xl border border-[#262626]'>
              <img
                src='/src/assets/malibu-small.svg'
                alt=''
              />
              <img
                src='/src/assets/malibu-small.svg'
                alt=''
              />
              <img
                src='/src/assets/malibu-small.svg'
                alt=''
              />
              <img
                src='/src/assets/malibu-small.svg'
                alt=''
              />
            </div>
            <div className='flex items-center justify-between border border-[#262626] rounded-[100px] p-2'>
              <div className='p-[10px] rounded-[69px] border border-[#262626]'>
                <img
                  src='/src/assets/left-button.svg'
                  alt=''
                />
              </div>
              <div className='flex items-center gap-[3px]'>
                <div className='h-[2px] w-[10px] bg-[#703BF7]'></div>
                <div className='h-[2px] w-[10px] bg-[#4d4d4d]'></div>
                <div className='h-[2px] w-[10px] bg-[#4d4d4d]'></div>
                <div className='h-[2px] w-[10px] bg-[#4d4d4d]'></div>
                <div className='h-[2px] w-[10px] bg-[#4d4d4d]'></div>
              </div>
              <div className='p-[10px] rounded-[69px] border border-[#262626] bg-[#1a1a1a]'>
                <img
                  src='/src/assets/right-button.svg'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-5'>
          <div className='flex flex-col border border-[#262626] rounded-[10px] p-5 gap-5'>
            <div className='flex flex-col gap-[6px] pb-5'>
              <h3 className='absolute-white text-[18px] font-semibold leading-[1.5]'>
                Description
              </h3>
              <p className='text-[#999999] leading-[1.5] font-medium text-[14px]'>
                Discover your own piece of paradise with the Seaside Serenity
                Villa. T With an open floor plan, breathtaking ocean views from
                every room, and direct access to a pristine sandy beach, this
                property is the epitome of coastal living.
              </p>
            </div>
            <div className='flex justify-between py-5 border-y border-[#262626]'>
              <div className='basis-1/2 flex flex-col gap-[6px] pr-5 justify-between'>
                <p className='flex gap-1'>
                  <img
                    src='/src/assets/bedroom-icon.svg'
                    alt=''
                  />
                  <span className='text-[#999999]'>Bedrooms</span>
                </p>
                <p className='absolute-white'>04</p>
              </div>
              <div className='basis-1/2 flex flex-col gap-[6px] pl-5 justify-between border-l border-[#262626]'>
                <p className='flex gap-1'>
                  <img
                    src='/src/assets/bathroom-icon.svg'
                    alt=''
                  />
                  <span className='text-[#999999]'>Bathrooms</span>
                </p>
                <p className='absolute-white'>03</p>
              </div>
            </div>
            <div className='flex flex-col gap-[6px]'>
              <p className='flex gap-1'>
                <img
                  src='/src/assets/area-icon.svg'
                  alt=''
                />
                <span className='text-[#999999]'>Area</span>
              </p>
              <p className='absolute-white text-[18px] font-semibold leading-[1.5]'>
                2,500 Square Feet
              </p>
            </div>
          </div>
          <div className='flex flex-col gap-5 border border-[#262626] rounded-[10px] p-5'>
            <h3 className='absolute-white font-semibold text-[18px] leading-[1.5]'>
              Key Features and Amenities
            </h3>
            <div className='flex flex-col gap-[18px]'>
              <FeaturesCard
                concise={
                  "Expansive oceanfront terrace for outdoor entertaining"
                }
              />
              <FeaturesCard
                concise={"Gourmet kitchen with top-of-the-line appliances"}
              />
              <FeaturesCard
                concise={
                  "Private beach access for morning strolls and sunset views"
                }
              />
              <FeaturesCard
                concise={
                  "Master suite with a spa-inspired bathroom and ocean-facing balcony"
                }
              />
              <FeaturesCard
                concise={"Private garage and ample storage space"}
              />
            </div>
          </div>
        </div>
      </div>
      {/* ENQUIRY FORM */}
      <div className='px-4 py-10 md:px-20 md:py-20 lg:px-[165px] '>
        <img
          src='/src/assets/linear-stars.svg'
          alt=''
        />
        <div className='flex flex-col gap-10'>
          <div className='flex flex-col gap-2'>
            <h3 className='font-semibold absolute-white text-[28px] leading-[1.5]'>
              Inquire About Seaside Serenity Villa
            </h3>
            <p className='font-medium leading-[1.5] text-[14px] text-[#999999]'>
              Interested in this property? Fill out the form below, and our real
              estate experts will get back to you with more details, including
              scheduling a viewing and answering any questions you may have.
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
                <ClientDetails
                  type={"text"}
                  placeholder={"Seaside Serenity Villa, Malibu, California"}
                  label={"Selected Property"}
                />
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
      {/* COMPREHENSIVE PRICING DETAILS */}
      <div className='px-4 py-10 md:px-20 md:py-20 lg:px-[165px]'>
        <img
          src='/src/assets/linear-stars.svg'
          alt=''
          className='self-start'
        />
        <div className=' flex flex-col gap-10'>
          <div className='flex flex-col gap-2'>
            <h3 className='font-semibold absolute-white text-[28px] leading-[1.5]'>
              Comprehensive Pricing Details
            </h3>
            <p className='font-medium leading-[1.5] text-[14px] text-[#999999]'>
              At JOIAgents, transparency is key. We want you to have a clear
              understanding of all costs associated with your property
              investment. Below, we break down the pricing for Seaside Serenity
              Villa to help you make an informed decision
            </p>
          </div>
          <div className='flex flex-col gap-[30px]'>
            <div className='bg-[#1a1a1a] px-5 py-6 rounded-lg'>
              <h3 className='absolute-white pb-[10px] border-b border-[#262626]'>
                Note
              </h3>
              <p className='font-medium pt-[10px] leading-[1.5] text-[14px] text-[#999999]'>
                The figures provided above are estimates and may vary depending
                on the property, location, and individual circumstances.
              </p>
            </div>
            <div className='flex flex-col gap-5'>
              <div className=''>
                <p className='text-[#999999] font-medium text-sm leading-[1.5]'>
                  Listing Price
                </p>
                <p className='absolute-white text-[24px] font-semibold leading-[1.5]'>
                  $1,250,000
                </p>
              </div>
              <div className='flex flex-col gap-5'>
                <div className='flex flex-col p-5 border border-[#262626] rounded-xl'>
                  <div className='flex items-center justify-between border-b border-[#262626] pb-5'>
                    <h3 className='absolute-white font-semibold text-[18px] leading-[1.5] '>
                      Additional Fees
                    </h3>
                    <button className='absolute-white border border-[#262626] px-5 py-[14px] bg-[#1a1a1a] rounded-lg'>
                      Learn More
                    </button>
                  </div>
                  <div className='flex flex-col gap-[10px] justify-between border-b border-[#262626] py-5'>
                    <h3 className='text-[#999999] font-medium text-[14px] leading-[1.5] '>
                      Property Transfer Tax
                    </h3>
                    <div className='flex items-center gap-3'>
                      <p className='absolute-white'>$25,000</p>
                      <p className='bg-[#1a1a1a] text-[#999999] text-[14px] px-3 py-[6px] rounded-[6px] border border-[#262626]'>
                        Based on the sale price and local regulations
                      </p>
                    </div>
                  </div>
                  <div className='flex flex-col gap-[10px] justify-between border-b border-[#262626] py-5'>
                    <h3 className='text-[#999999] font-medium text-[14px] leading-[1.5] '>
                      Legal Fees
                    </h3>
                    <div className='flex items-center gap-3'>
                      <p className='absolute-white'>$3,000</p>
                      <p className='bg-[#1a1a1a] text-[#999999] text-[14px] px-3 py-[6px] rounded-[6px] border border-[#262626]'>
                        Approximate cost for legal services, including title
                        transfer
                      </p>
                    </div>
                  </div>
                  <div className='flex flex-col gap-[10px] justify-between border-b border-[#262626] py-5'>
                    <h3 className='text-[#999999] font-medium text-[14px] leading-[1.5] '>
                      Home Inspection
                    </h3>
                    <div className='flex items-center gap-3'>
                      <p className='absolute-white'>$500</p>
                      <p className='bg-[#1a1a1a] text-[#999999] text-[14px] px-3 py-[6px] rounded-[28px] border border-[#262626]'>
                        Recommended for due diligence
                      </p>
                    </div>
                  </div>
                  <div className='flex flex-col gap-[10px] justify-between border-b border-[#262626] py-5'>
                    <h3 className='text-[#999999] font-medium text-[14px] leading-[1.5] '>
                      Property Insurance
                    </h3>
                    <div className='flex items-center gap-3'>
                      <p className='absolute-white'>$1,200</p>
                      <p className='bg-[#1a1a1a] text-[#999999] text-[14px] px-3 py-[6px] rounded-[6px] border border-[#262626]'>
                        Annual cost for comprehensive property insurance
                      </p>
                    </div>
                  </div>
                  <div className='flex flex-col gap-[10px] justify-between pt-5'>
                    <h3 className='text-[#999999] font-medium text-[14px] leading-[1.5] '>
                      Mortgage Fees
                    </h3>
                    <div className='flex items-center gap-3'>
                      <p className='absolute-white'>Varies</p>
                      <p className='bg-[#1a1a1a] text-[#999999] text-[14px] px-3 py-[6px] rounded-[6px] border border-[#262626]'>
                        If applicable, consult with your lender for specific
                        details
                      </p>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col p-5 border border-[#262626] rounded-xl'>
                  <div className='flex items-center justify-between border-b border-[#262626] pb-5'>
                    <h3 className='absolute-white font-semibold text-[18px] leading-[1.5] '>
                      Monthly Costs
                    </h3>
                    <button className='absolute-white border border-[#262626] px-5 py-[14px] bg-[#1a1a1a] rounded-lg'>
                      Learn More
                    </button>
                  </div>
                  <div className='flex flex-col gap-[10px] justify-between border-b border-[#262626] py-5'>
                    <h3 className='text-[#999999] font-medium text-[14px] leading-[1.5] '>
                      Property Taxes
                    </h3>
                    <div className='flex items-center gap-3'>
                      <p className='absolute-white'>$1250</p>
                      <p className='bg-[#1a1a1a] text-[#999999] text-[14px] px-3 py-[6px] rounded-[6px] border border-[#262626]'>
                        Approximate monthly property tax based on the sale price
                        and local rates
                      </p>
                    </div>
                  </div>
                  <div className='flex flex-col gap-[10px] justify-between pt-5'>
                    <h3 className='text-[#999999] font-medium text-[14px] leading-[1.5] '>
                      Homeowners' Association Fee
                    </h3>
                    <div className='flex items-center gap-3'>
                      <p className='absolute-white'>$300</p>
                      <p className='bg-[#1a1a1a] text-[#999999] text-[14px] px-3 py-[6px] rounded-[6px] border border-[#262626]'>
                        Monthly fee for common area maintenance and security
                      </p>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col p-5 border border-[#262626] rounded-xl'>
                  <div className='flex items-center justify-between border-b border-[#262626] pb-5'>
                    <h3 className='absolute-white font-semibold text-[18px] leading-[1.5] '>
                      Total Initial Costs
                    </h3>
                    <button className='absolute-white border border-[#262626] px-5 py-[14px] bg-[#1a1a1a] rounded-lg'>
                      Learn More
                    </button>
                  </div>
                  <div className='flex flex-col gap-[10px] justify-between border-b border-[#262626] py-5'>
                    <h3 className='text-[#999999] font-medium text-[14px] leading-[1.5] '>
                      Listing Price
                    </h3>
                    <p className='absolute-white font-semibold text-[18px] leading-[1.5]'>
                      $1,250,000
                    </p>
                  </div>
                  <div className='flex flex-col gap-[10px] justify-between border-b border-[#262626] py-5'>
                    <h3 className='text-[#999999] font-medium text-[14px] leading-[1.5] '>
                      Additional Fees
                    </h3>
                    <div className='flex items-center gap-3'>
                      <p className='absolute-white'>$29,700</p>
                      <p className='bg-[#1a1a1a] text-[#999999] text-[14px] px-3 py-[6px] rounded-[6px] border border-[#262626]'>
                        Property transfer tax, legal fees, inspection, insurance
                      </p>
                    </div>
                  </div>
                  <div className='flex flex-col gap-[10px] justify-between border-b border-[#262626] py-5'>
                    <h3 className='text-[#999999] font-medium text-[14px] leading-[1.5] '>
                      Down Payment
                    </h3>
                    <div className='flex items-center gap-3'>
                      <p className='absolute-white'>$250,000</p>
                      <p className='bg-[#1a1a1a] text-[#999999] text-[14px] px-3 py-[6px] rounded-[28px] border border-[#262626]'>
                        20%
                      </p>
                    </div>
                  </div>
                  <div className='flex flex-col gap-[10px] justify-between pt-5'>
                    <h3 className='text-[#999999] font-medium text-[14px] leading-[1.5] '>
                      Mortgage Amount
                    </h3>
                    <div className='flex items-center gap-3'>
                      <p className='absolute-white'>$1,000,000</p>
                      <p className='bg-[#1a1a1a] text-[#999999] text-[14px] px-3 py-[6px] rounded-[28px] border border-[#262626]'>
                        If applicable
                      </p>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col p-5 border border-[#262626] rounded-xl'>
                  <div className='flex items-center justify-between border-b border-[#262626] pb-5'>
                    <h3 className='absolute-white font-semibold text-[18px] leading-[1.5] '>
                      Monthly Expenses
                    </h3>
                    <button className='absolute-white border border-[#262626] px-5 py-[14px] bg-[#1a1a1a] rounded-lg'>
                      Learn More
                    </button>
                  </div>
                  <div className='flex flex-col gap-[10px] justify-between border-b border-[#262626] py-5'>
                    <h3 className='text-[#999999] font-medium text-[14px] leading-[1.5] '>
                      Property Taxes
                    </h3>
                    <div className='flex items-center gap-3'>
                      <p className='absolute-white'>$1,250</p>
                    </div>
                  </div>
                  <div className='flex flex-col gap-[10px] justify-between border-b border-[#262626] py-5'>
                    <h3 className='text-[#999999] font-medium text-[14px] leading-[1.5] '>
                      Homeowners' Association Fee
                    </h3>
                    <div className='flex items-center gap-3'>
                      <p className='absolute-white'>$300</p>
                    </div>
                  </div>
                  <div className='flex flex-col gap-[10px] justify-between border-b border-[#262626] py-5'>
                    <h3 className='text-[#999999] font-medium text-[14px] leading-[1.5] '>
                      Mortgage payment
                    </h3>
                    <div className='flex items-center gap-3'>
                      <p className='absolute-white leading-[1.5] text-[18px]'>
                        Varies based on terms and interest rate
                      </p>
                    </div>
                  </div>
                  <div className='flex flex-col gap-[10px] justify-between pt-5'>
                    <h3 className='text-[#999999] font-medium text-[14px] leading-[1.5] '>
                      Property Insurance
                    </h3>
                    <div className='flex items-center gap-3'>
                      <p className='absolute-white'>$100</p>
                      <p className='bg-[#1a1a1a] text-[#999999] text-[14px] px-3 py-[6px] rounded-[28px] border border-[#262626]'>
                        Approximate monthly cost
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FAQs */}
      <FAQ />
      {/* CALL TO ACTION */}
      <CallToAction />
    </div>
  );
};

export default PropertyDetailsPage;
