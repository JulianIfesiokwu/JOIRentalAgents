const FAQCard = ({ question, answer }) => {
  return (
    <div className='flex flex-col gap-5 p-[30px] border border-[#262626] rounded-[10px]'>
      <h3 className='text-[18px] leading-[1.5] font-semibold absolute-white'>
        {question}
      </h3>
      <p className='leading-[1.5] font-medium text-sm text-[#999999]'>
        {answer}
      </p>
      <button className='px-5 py-[14px] bg-[#1a1a1a] rounded-[8px] absolute-white border border-[#262626]'>
        Read More
      </button>
    </div>
  );
};

export default FAQCard;
