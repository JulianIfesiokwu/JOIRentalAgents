import InfoCard from "./InfoCard";

const Metrics = () => {
  return (
    <div className='grid grid-cols-2 grid-rows-2 gap-3 md:flex md:gap-4 xl:gap-5'>
      <div className='inline'>
        <InfoCard
          amount={"200+"}
          detail={"Happy Customers"}
        />
      </div>
      <div className='inline'>
        <InfoCard
          amount={"10k+"}
          detail={"Properties For Clients"}
        />
      </div>
      <div className='col-start-1 col-end-3'>
        <InfoCard
          amount={"16+"}
          detail={"Years of Experience"}
        />
      </div>
    </div>
  );
};

export default Metrics;
