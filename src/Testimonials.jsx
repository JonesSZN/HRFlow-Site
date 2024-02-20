import { ArrowLeft } from "lucide-react";
import { ArrowRight } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="w-full bg-white  py-24 flex justify-center">
      <div className=" lg:w-[60%] w-[95%] max-w-[1920px]">
        <div className="bg-[#252937] relative p-24 rounded-2xl flex flex-col items-center gap-20">
          <TopProfile />
          <p className="text-[#ffffffcc] text-[16px] lg:max-w-[660px] text-center">
            HrFlow transformed our recruitment process entirely. The Figma flows
            and boolean search options provided us with unprecedented
            flexibility, allowing us to streamline our talent acquisition
            efforts.
          </p>

          <div className="text-white">
            <p className="text-[18px]">Cameron Williamson</p>
            <p className="text-center text-[14px]">UX Designer</p>
          </div>
          <div className="absolute lg:-left-5 -left-2 cursor-pointer top-[50%] w-[55px] h-[45px]  lg:w-[75px] lg:h-[60px] bg-[#ff6b82] rounded-md flex items-center justify-center">
            <ArrowLeft color="white" size={30} />
          </div>
          <div className="absolute cursor-pointer lg:-right-5 -right-2 top-[50%] w-[55px] h-[45px] lg:w-[75px] lg:h-[60px] bg-[#ff6b82] rounded-md flex items-center justify-center">
            <ArrowRight color="white" size={30} />
          </div>
        </div>
      </div>
    </section>
  );
};

const TopProfile = () => {
  return (
    <div className="flex items-center">
      <img
        className="border-[2px] w-[60px] h-[60px] border-white rounded-full"
        src="profile1.webp"
        alt=""
      />
      <WhiteLine />
      <img
        className="w-[60px] h-[60px] border-[2px] border-white rounded-full"
        src="profile2.webp"
        alt=""
      />
      <WhiteLine />
      <img
        className="w-[100px] h-[100px] border-[2px] border-white rounded-full"
        src="profile3.webp"
        alt=""
      />
      <WhiteLine />
      <img
        className="w-[60px] h-[60px] border-[2px] border-white rounded-full"
        src="profile4.webp"
        alt=""
      />
      <WhiteLine />
      <img
        className="w-[60px] h-[60px] border-[2px] border-white rounded-full"
        src="profile5.webp"
        alt=""
      />
    </div>
  );
};

const WhiteLine = () => {
  return <div className="w-24 h-[1px] bg-white"></div>;
};

export default Testimonials;
