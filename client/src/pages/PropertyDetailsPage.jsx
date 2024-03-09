import React from "react";

const PropertyDetailsPage = () => {
  return (
    <div className='bg-[#141414]'>
      {/* LANDING SECTION */}
      <div className='px-4 py-10 md:px-20 md:py-20 lg:px-[165px] flex flex-col gap-10'>
        <div className='flex flex-col md:flex-row-reverse items-center gap-10 md:gap-15 lg:gap-20'>
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
                <h3 className='font-semibold text-[28px] md:text-[38px] lg:text-[48px] leading-[1.5] absolute-white'>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsPage;
