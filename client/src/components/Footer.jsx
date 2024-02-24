import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className='flex flex-col'>
        <div className='border-t border-[#262626] flex flex-col px-4 py-[50px] md:p-20 gap-[50px] md:gap-20 xl:px-[162px] xl:py-[100px] md:flex-row md:justify-between bg-[#141414]'>
          <div className='flex flex-col gap-5 md:gap-6'>
            <picture>
              <source
                srcSet='/src/assets/desktop-logo.svg'
                media='(min-width: 769px)'
              ></source>
              <source
                srcSet='/src/assets/laptop-logo.svg'
                media='(min-width: 600px)'
              ></source>
              <img
                src='/src/assets/mobile-logo.svg'
                alt='JOI logo'
              />
            </picture>
            <div className='flex items-center justify-between gap-[6px] px-4 py-[14px] border border-[#262626] rounded-xl'>
              <img
                src='/src/assets/email-icon.svg'
                alt='email'
              />
              <input
                placeholder='Enter Your Email'
                type='email'
                className='md:w-[200px] leading-[24px] font-medium text-[#999999] text-lg bg-transparent outline-none border-none'
              />
              <img
                src='/src/assets/sendEmail-icon.svg'
                alt='email'
                className='cursor-pointer w-[24px] h-[24px]'
              />
            </div>
          </div>
          <div className='md:w-2/3 grid grid-rows-3 grid-cols-2 md:flex flex-wrap md:justify-between gap-y-5 gap-x-4 md:gap-0'>
            <div className='flex flex-col gap-6'>
              <Link
                to='/'
                className='text-base md:text-xl font-medium leading-[1.24] text-[#999999] tracking-[0.94]'
              >
                Home
              </Link>
              <ul className='flex flex-col gap-4 list-none'>
                <li>
                  <Link
                    to='/#hero-section'
                    className='text-sm md:text-base absolute-white leading-[1.24] tracking-[0.94]'
                  >
                    Hero section
                  </Link>
                </li>
                <li>
                  <Link
                    to='/#features'
                    className='text-sm md:text-base absolute-white leading-[1.24] tracking-[0.94]'
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    to='/#properties'
                    className='text-sm md:text-base absolute-white leading-[1.24] tracking-[0.94]'
                  >
                    Properties
                  </Link>
                </li>
                <li>
                  <Link
                    to='/#testimonials'
                    className='text-sm md:text-base absolute-white leading-[1.24] tracking-[0.94]'
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    to='/#faqs'
                    className='text-sm md:text-base absolute-white leading-[1.24] tracking-[0.94]'
                  >
                    FAQ's
                  </Link>
                </li>
              </ul>
            </div>
            <div className='flex flex-col gap-6'>
              <Link
                to='/about'
                className='text-base md:text-xl font-medium leading-[1.24] text-[#999999] tracking-[0.94]'
              >
                About Us
              </Link>
              <ul className='flex flex-col gap-4 list-none'>
                <li>
                  <Link
                    to='/about#our-story'
                    className='text-sm md:text-base absolute-white leading-[1.24] tracking-[0.94]'
                  >
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    to='/about#our-works'
                    className='text-sm md:text-base absolute-white leading-[1.24] tracking-[0.94]'
                  >
                    Our Works
                  </Link>
                </li>
                <li>
                  <Link
                    to='/about#how-it-works'
                    className='text-sm md:text-base absolute-white leading-[1.24] tracking-[0.94]'
                  >
                    How it Works
                  </Link>
                </li>
                <li>
                  <Link
                    to='/about#our-team'
                    className='text-sm md:text-base absolute-white leading-[1.24] tracking-[0.94]'
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    to='/about#our-clients'
                    className='text-sm md:text-base absolute-white leading-[1.24] tracking-[0.94]'
                  >
                    Our Clients
                  </Link>
                </li>
              </ul>
            </div>
            <div className='row-start-2 row-end-3 inline-flex flex-col gap-6'>
              <Link
                to='/properties'
                className='text-base md:text-xl font-medium leading-[1.24] text-[#999999] tracking-[0.94]'
              >
                Properties
              </Link>
              <ul className='flex flex-col gap-4 list-none'>
                <li>
                  <Link
                    to='/properties#portfolio'
                    className='text-sm md:text-base absolute-white leading-[1.24] tracking-[0.94]'
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    to='/properties#categories'
                    className='text-sm md:text-base absolute-white leading-[1.24] tracking-[0.94]'
                  >
                    Categories
                  </Link>
                </li>
              </ul>
            </div>
            <div className='row-start-2 row-end-4 col-start-2 col-end-2 flex flex-col gap-6'>
              <Link
                to='/services'
                className='text-base md:text-xl font-medium leading-[1.24] text-[#999999] tracking-[0.94]'
              >
                Services
              </Link>
              <ul className='flex flex-col gap-4 list-none'>
                <li>
                  <Link
                    to='/services#valuation-mastery'
                    className='text-base absolute-white leading-[1.24] tracking-[0.94]'
                  >
                    Valuation Mastery
                  </Link>
                </li>
                <li>
                  <Link
                    to='/services#strategic-marketing'
                    className='text-sm md:text-base absolute-white leading-[1.24] tracking-[0.94]'
                  >
                    Strategic Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    to='/services#negotiation-wizardry'
                    className='text-sm md:text-base absolute-white leading-[1.24] tracking-[0.94]'
                  >
                    Negotiation Wizardry
                  </Link>
                </li>
                <li>
                  <Link
                    to='/services#closing-success'
                    className='text-sm md:text-base absolute-white leading-[1.24] tracking-[0.94]'
                  >
                    Closing Success
                  </Link>
                </li>
                <li>
                  <Link
                    to='/services#property-management'
                    className='text-sm md:text-base absolute-white leading-[1.24] tracking-[0.94]'
                  >
                    Property Management
                  </Link>
                </li>
              </ul>
            </div>
            <div className='row-start-3 row-end-4 inline-flex flex-col gap-6'>
              <Link
                to='/'
                className='text-base md:text-xl font-medium leading-[1.24] text-[#999999] tracking-[0.94]'
              >
                Contact Us
              </Link>
              <ul className='flex flex-col gap-4 list-none'>
                <li>
                  <Link
                    to='/contact#contact-form'
                    className='text-sm md:text-base absolute-white leading-[1.24] tracking-[0.94]'
                  >
                    Contact Form
                  </Link>
                </li>
                <li>
                  <Link
                    to='/contact#our-offices'
                    className='text-sm md:text-base absolute-white leading-[1.24] tracking-[0.94]'
                  >
                    Our Offices
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='px-4 py-5 gap-5 md:px-[80px] md:py-3 xl:p-[162px] xl:py-4 flex flex-col-reverse md:flex-row justify-between items-center bg-[#1a1a1a]'>
          <div className='flex flex-col items-center md:flex-row gap-[10px] text-sm leading-[24px] tracking-[94%] absolute-white'>
            <p className=''>@2023 JOIEstateAgents. All Rights Reserved.</p>
            <p className=''>Terms & Conditions</p>
          </div>
          <div className='flex item-center justify-between gap-2'>
            <a
              href='https://wwww.facebook.com'
              target='_blank'
              rel='noreferrer noopener'
              className='text-white rounded-full bg-[#141414] p-[10px]'
            >
              <img
                src='/src/assets/facebook-icon.svg'
                alt='Facebook'
              />
            </a>
            <a
              href='https://wwww.linkedin.com'
              target='_blank'
              rel='noreferrer noopener'
              className='text-white rounded-full bg-[#141414] p-[10px]'
            >
              <img
                src='/src/assets/linkedin-icon.svg'
                alt='linkedin'
              />
            </a>
            <a
              href='https://wwww.twitter.com'
              target='_blank'
              rel='noreferrer noopener'
              className='text-white rounded-full bg-[#141414] p-[10px]'
            >
              <img
                src='/src/assets/twitter-icon.svg'
                alt='twitter'
              />
            </a>
            <a
              href='https://wwww.youtube.com'
              target='_blank'
              rel='noreferrer noopener'
              className='text-white rounded-full bg-[#141414] p-[10px]'
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
