const FAQCard = ({ question, answer }) => {
  return (
    <div className='basis-1/2 flex flex-col gap-5 md:gap-[24px] lg:gap-[30px] justify-between p-[30px] border border-[#262626] rounded-[10px]'>
      <h3 className='text-[18px] md:text-[20px] lg:text-[24px] leading-[1.5] font-semibold absolute-white'>
        {question}
      </h3>
      <p className='leading-[1.5] font-medium text-sm md:text-[16px] lg:text-[18px] text-[#999999]'>
        {answer}
      </p>
      <button className='px-5 py-[14px] bg-[#1a1a1a] rounded-[8px] absolute-white border border-[#262626] md:self-start text-sm lg:text-[18px]'>
        Read More
      </button>
    </div>
  );
};

export default FAQCard;
