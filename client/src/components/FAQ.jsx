import FAQCard from "./FAQCard";
import { questions } from "../data";

const FAQ = () => {
  return (
    <div className='px-4 py-10 md:px-20 md:py-20 lg:px-[165px] flex flex-col'>
      <img
        src='src/assets/linear-stars.svg'
        alt=''
        className='self-start'
      />
      <div className='flex flex-col gap-10'>
        <div className='flex items-end md:gap-[150px] lg:gap-[200px] gap-[6px]'>
          <div className='flex flex-col gap-[6px]'>
            <h3 className='leading-[1.5] absolute-white font-semibold text-[28px] md:text-[38px] lg:text-[48px]'>
              Frequently Asked Questions
            </h3>
            <p className='font-medium leading-[1.5] text-14px md:text-[16px] lg:text-[18px] text-[#999999]'>
              Find answers to common questions about JOIAgents services,
              property listings, and the real estate process. We're here to
              provide clarity and assist you every step of the way.
            </p>
          </div>
          <button className='hidden md:inline leading-[1.5] text-[14px] md:text-[16px] lg:text-[18px] absolute-white text-center px-5 py-[14px] bg-[#1a1a1a] rounded-[8px] md:shrink-0'>
            View All FAQ's
          </button>
        </div>
        <div className='flex flex-col gap-5 md:flex-row md:gap-5'>
          {questions.map((item, index) => (
            <FAQCard
              question={item.question}
              answer={item.answer}
              key={index}
            />
          ))}
        </div>
        <div className='border-t border-[#262626] flex items-center justify-between pt-4'>
          <button className='md:hidden leading-[1.5] text-[14px] absolute-white text-center px-5 py-[14px] bg-[#1a1a1a] rounded-[8px]'>
            View All FAQ's
          </button>
          <div className='flex gap-[10px] items-center justify-between'>
            <div className='rounded-full p-[10px] border border-[#262626] md:hidden'>
              <img
                src='/src/assets/left-button.svg'
                alt=''
                className='md:hidden'
              />
            </div>
            <div className=''>
              <p className='font-medium text-[14px] text-[#999999]'>
                <span className='absolute-white '>01</span>
                {"  "}of 10
              </p>
            </div>
            <div className='rounded-full p-[10px] border border-[#262626] md:hidden'>
              <img
                src='/src/assets/right-button.svg'
                alt=''
              />
            </div>
          </div>
          <div className='hidden md:flex md:gap-[10px]'>
            <div className='rounded-full p-[10px] border border-[#262626] hidden md:inline'>
              <img
                src='/src/assets/left-button.svg'
                alt=''
              />
            </div>
            <div className='rounded-full p-[10px] border border-[#262626] hidden md:inline'>
              <img
                src='/src/assets/right-button.svg'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
