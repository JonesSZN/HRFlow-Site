import Header from "./header";

const Howitworks = () => {
  return (
    <section className="w-full flex justify-center py-24 bg-white">
      <div className="lg:w-[70%] w-[95%] max-w-[1920px]">
        <div className="flex flex-col gap-12">
          <TopText />
          <div className="lg:flex lg:flex-row flex flex-col gap-[6px] lg:gap-[6px]">
            <Left />
            <Middle />
            <Right />
          </div>
        </div>
      </div>
    </section>
  );
};

const Left = () => {
  return (
    <div className="flex lg:flex-col lg:w-auto w-full gap-2">
      <LeftTop />
      <LeftBottom />
    </div>
  );
};

const Middle = () => {
  return (
    <div className="bg-gradient-to-l from-sky-200 to-gray-900 flex lg:h-auto h-[400px] gap-2 cursor-pointer   items-center justify-center  w-full rounded-3xl">
      <BearCore />
    </div>
  );
};

const Right = () => {
  return (
    <div className="flex lg:flex-col lg:w-auto w-full gap-2">
      <RightTop />
      <RightBottom />
    </div>
  );
};

const LeftTop = () => {
  return (
    <div className="p-5 lg:w-[308px] w-[50%] bg-[#bac1ff] rounded-3xl lg:h-[257px]   flex justify-center items-center">
      <img
        className="max-h-[204px] max-w-[232px]  bg-[#bac1ff]"
        src="snake1.webp"
        alt=""
      />
    </div>
  );
};

const LeftBottom = () => {
  return (
    <div className="p-5 lg:w-[308px] w-[50%] bg-[#ddc4ff] rounded-3xl h-[257px] flex justify-center items-center">
      <img
        className=" max-h-[204px] max-w-[232px]  bg-[#ddc4ff]"
        src="money.webp"
        alt=""
      />
    </div>
  );
};

const RightTop = () => {
  return (
    <div className="p-5 lg:w-[308px] w-[50%] bg-[#d9e7fa] rounded-3xl h-[257px] flex justify-center items-center">
      <img className=" max-h-[204px] max-w-[232px] " src="chart.webp" alt="" />
    </div>
  );
};

const RightBottom = () => {
  return (
    <div className="p-5 lg:w-[308px] w-[50%] bg-[#fdd] rounded-3xl h-[257px] flex justify-center items-center">
      <img
        className=" max-h-[204px] max-w-[232px] 204px  "
        src="viewing.webp"
        alt=""
      />
    </div>
  );
};

const TopText = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className="lg:text-[46px] text-[28px] font-bold text-[#263c61]">
        How HRFlow TNC Works
      </h1>
      <p className="text-center text-[#717185] lg:text-[18px] max-w-[350px] lg:max-w-[650px]">
        HRMLand is your all-in-one HR management solution. Our user-friendly
        interface and modules allow you to tailor the software to fit your
        specific HR needs.
      </p>
    </div>
  );
};

const BearCore = () => {
  return (
    <>
      <p className="font-bold text-[50px] bg-gradient-to-l from-neutral-300 to-slate-400 bg-clip-text text-transparent">
        BearCore
      </p>
      <img
        className="rounded-full animate-bounce w-[70px]"
        src="Bear.jpg"
        alt=""
      />
    </>
  );
};

export default Howitworks;
