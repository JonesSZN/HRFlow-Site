const Trial = () => {
  return (
    <section className="w-full bg-white  py-24 flex justify-center">
      <div className=" lg:w-[70%] w-[95%] max-w-[1920px]">
        <div className="bg-[#ff6b82] lg:flex lg:flex-row flex flex-col gap-24 items-center justify-around pt-16 px-8 lg:p-0  lg:pt-12  rounded-[60px] ">
          <Left />
          <RightImage />
        </div>
      </div>
    </section>
  );
};

const Left = () => {
  return (
    <div className="flex flex-col lg:pl-16 gap-12">
      <h1 className="lg:text-[46px] text-[34px] text-white font-bold max-w-[550px]">
        Experience the future of HR management with HR Flow TNC.
      </h1>
      <LeftButtons />
    </div>
  );
};

const LeftButtons = () => {
  return (
    <div className="lg:flex lg:flex-row flex flex-col max-w-[220px] lg:max-w-[600px] gap-4 lg:items-center">
      <button className="bg-[#1a1919] py-[10px] px-[30px] border-[2px] border-[#1a1919] text-white hover:bg-transparent hover:border-[2px]  hover:text-[#1a1919] font-bold rounded-full duration-300 ">
        Request a demo
      </button>
      <button className="bg-[#1a1919] border-[2px] font-bold border-[#1a1919] text-[#1a1919] py-[10px] px-[30px] bg-transparent  hover:bg-black rounded-full hover:text-white  duration-300 ">
        Try Free Trial Today
      </button>
    </div>
  );
};
const RightImage = () => {
  return (
    <div>
      <img className="lg:w-[560px]  w-[360px]" src="person.webp" alt="" />
    </div>
  );
};

export default Trial;
