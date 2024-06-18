import { CheckIcon } from "lucide-react";
import { useState } from "react";

const Pricing = () => {
  return (
    <section className="w-full flex justify-center relative py-24">
      <div className="lg:w-[70%] w-[95%] max-w-[1920px] flex flex-col gap-8">
        <div className="flex flex-col items-center gap-4">
          <TopDiv />
        </div>

        <div className="flex flex-col">
          <div className="lg:flex lg:flex-row flex flex-col gap-10 lg:gap-8 items-center">
            <PricingCard price="$12" title="Essentials" />
            <PricingCard price="$24" title="Advanced HR Management" />
            <PricingCard price="$60" title="Enterprise Solutions" />
          </div>
        </div>
      </div>
      <img
        className="absolute left-0 w-[500px] top-0"
        src="bubble.webp"
        alt=""
      />
      <img
        className="absolute right-0 bottom-0 lg:-bottom-[20%] -rotate-180 lg:rotate-180 w-[500px]"
        src="bubble.webp"
        alt=""
      />
    </section>
  );
};

const PricingCard = ({ price, title }) => {
  return (
    <div className="flex flex-col group gap-4">
      <div className="py-[36px] w-full group shadow-lg z-40  hover:bg-[#263c61] duration-700 px-[40px] flex flex-col gap-4 border border-[rgba(0,0,0,0.4)] rounded-2xl">
        <h2 className="text-[#263c61] group-hover:text-white text-[18px] font-bold">
          {title}
        </h2>
        <p className="text-[#ff6b82] text-[60px] font-bold">{price}</p>
        <div className="flex flex-col text-[#717185] font-bold gap-4">
          <PricingRow />
          <button className="py-[14px] mt-6 group-hover:bg-[#ff6b82] duration-700 shadow-2xl px-[30px] text-white bg-black rounded-full cursor-pointer max-w-[147px] ">
            Get Started
          </button>
        </div>
      </div>
      <BottomRow />
    </div>
  );
};

const PricingRow = () => {
  return (
    <>
      <div className="flex gap-2 items-center group-hover:text-white duration-700 ">
        <CheckIcon />
        <p>Centralized employee database</p>
      </div>
      <div className="flex gap-2 items-center group-hover:text-white duration-700">
        <CheckIcon />
        <p>Employee self-service portal</p>
      </div>
      <div className="flex gap-2 items-center group-hover:text-white duration-700">
        <CheckIcon />
        <p>Basic offboarding workflows</p>
      </div>
      <div className="flex gap-2 items-center group-hover:text-white duration-700">
        <CheckIcon />
        <p>Standard reports and analytics</p>
      </div>
      <div className="flex gap-2 items-center group-hover:text-white duration-700 ">
        <CheckIcon />
        <p>Compliance and security features</p>
      </div>
    </>
  );
};
const BottomRow = () => {
  return (
    <div className="bg-white rounded-xl group-hover:bg-[#263c61] group-hover:text-white text-[#717185] grou duration-700  shadow-2xl py-5 px-[30px]">
      <p className="">
        Ideal FOr small businesss and startups looking for essential HR
        management tools.
      </p>
    </div>
  );
};

const SaveRow = () => {
  const [Slider, setSlider] = useState(false);
  return (
    <div className="flex z-40  gap-6 py-8 cursor-pointer items-center">
      <p className="text-[#263c61] text-[18px] font-bold">Monthly</p>
      <button className="border-[2px]  relative  shadow-2xl border-[#ff6b82] rounded-full p-2 flex gap-3">
        <div
          onClick={() => setSlider(true)}
          className="bg-[#c572721a] w-[55px] h-[38px] rounded-full" //left-button
        ></div>

        <div
          onClick={() => setSlider(false)}
          className="bg-[#c572721a] w-[55px] h-[38px] rounded-full  " //right-button
        ></div>

        <div
          className={`bg-[#ff6b82] transition-all duration-300  absolute z-[999] w-[55px] h-[38px] rounded-full  ${
            Slider ? "left-2" : "left-[calc(50%+8px)]"
          } `}
        ></div>
      </button>
      <p className="text-[#263c61] text-[18px] font-bold">Yearly</p>
    </div>
  );
};

const TopDiv = () => {
  return (
    <>
      <h1 className="text-[#263c61] text-[28px] lg:text-[46px] font-bold">
        TNC Pricing Plan
      </h1>
      <p className="text-[#717185] lg:text-[18px] text-center max-w-[650px]">
        Unlock the power of seamless recruitment with HrFlow, where innovation
        meets efficiency. Our pricing plans are designed to cater to the diverse
        needs.
      </p>
      <SaveRow />
    </>
  );
};
export default Pricing;

// #c572721a
//#ff6b82
