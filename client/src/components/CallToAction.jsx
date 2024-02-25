const CallToAction = () => {
  return (
    <div className=' bg-[#141414] flex flex-col md:flex-row gap-[30px] py-[50px] md:gap-[50px] xl:gap-[250px] md:px-[80px] xl:px-[162px] xl:py-[100px] border-t border-[#262626]'>
      <div className='flex flex-col gap-[6px] md:gap-[10px]'>
        <h3 className='text-[28px] md:text-[38px] leading-[1.5] font-semibold absolute-white'>
          Start Your Real Estate Journey Today
        </h3>
        <p className='text-sm md:text-base leading-[1.5] font-medium text-[#999999]'>
          Your dream property is just a click away. Whether you're looking for a
          new home, a strategic investment, or expert real estate advice,
          JOIEstateAgents is here to assist you every step of the way. Take the
          first step towards your real estate goals and explore our available
          properties or get in touch with our team for personalized assistance.
        </p>
      </div>
      <button
        type='button'
        className='leading-[1.5] text-[14px] md:shrink-0 md:self-center absolute-white text-center px-5 py-[14px] md:px-5 md:py-[14px] bg-[#703BF7] rounded-[8px]'
      >
        Explore Properties
      </button>
    </div>
  );
};

export default CallToAction;