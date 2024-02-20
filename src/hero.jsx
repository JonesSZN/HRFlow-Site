import { MoveRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="w-full bg-gray-300 flex justify-center py-16">
      <div className="lg:w-[70%] px-4 max-w-[1920px]">
        <div className="lg:flex items-center">
          <Left />
          <RightImage />
        </div>
      </div>
    </section>
  );
};

const Left = () => {
  return (
    <div className="flex flex-col gap-2 relative">
      <img
        className="absolute  right-24 lg:right-20"
        src="squiggly1.svg"
        alt=""
      />
      <h1 className="lg:text-[52px] lg:max-w-[1000px] max-w-[300px] text-[34px] text-[#263c61] font-bold">
        Simplifying HR Management for Every Business
      </h1>
      <p className="lg:text-[18px] text-[#717185] max-w-[550px]">
        Introducing HrFlow, the unsung hero of streamlined communication in the
        world of Software as a Service.
      </p>
      <button className="flex gap-3 group mt-9 max-w-[185px] py-3 px-5 items-center bg-[#ff6b82] cursor-pointer rounded-full text-white font-bold hover:bg-black duration-300">
        Request Demo
        <MoveRight
          className="group-hover:translate-x-2 duration-500"
          size={18}
        />
      </button>
    </div>
  );
};

const RightImage = () => {
  return (
    <div>
      <img className="lg:p-0 py-16" src="rating.webp" alt="" />
    </div>
  );
};
export default Hero;
