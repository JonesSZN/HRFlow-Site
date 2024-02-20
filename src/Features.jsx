import { CheckCircle } from "lucide-react";

const Features = () => {
  return (
    <section className="bg-gray-300 w-full py-12 flex justify-center">
      <div className="lg:w-[70%] w-[95%] max-w-[1920px] flex gap-16 flex-col">
        <TopText />
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
          <Cards image="stat1.webp" />
          <Cards image="stat2.webp" />
          <Cards image="stat3.webp" />
          <Cards image="stat4.webp" />
        </div>
      </div>
    </section>
  );
};

const Cards = ({ image }) => {
  return (
    <div className="lg:flex   p-9 gap-6 w-full lg:h-[401px] bg-[#F2EFF7] items-center rounded-xl">
      <img
        className="rounded-md object-contain p-4 bg-white w-full lg:w-[235px] h-[304px]"
        src={image}
        alt=""
      />
      <div className="flex flex-col gap-12">
        <Title />
        <div className="flex flex-col gap-8">
          <CardRow />
          <CardRow />
          <CardRow />
        </div>
      </div>
    </div>
  );
};

const CardRow = () => {
  return (
    <div className="flex gap-2 items-center">
      <CheckCircle size={20} />
      <p className="text-[#717185] text-[16px]">
        Customizable workflows and approvals
      </p>
    </div>
  );
};

const Title = () => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-[20px] lg:p-0 py-4 text-[#263c61] font-bold">
        Streamlined HR Processes
      </h2>
      <div className="w-12 h-[6px] rounded-full bg-[#b1adde]"></div>
    </div>
  );
};

const TopText = () => {
  return (
    <div className="flex flex-col items-center gap-4 relative">
      <h1 className="text-center text-[28px] lg:text-[56px] font-bold text-[#263c61]">
        HRFlow Key Features
      </h1>
      <p className="text-center lg:text-[18px] max-w-[350px] lg:max-w-[650px] text-[#717185]">
        HRMLand is your all-in-one HR management solution. Our user-friendly
        interface and modules allow you to tailor the software to fit your
        specific HR needs.
      </p>
      <img
        className="absolute  -right-5 lg:right-56 -top-14 lg:-top-8 w-[127px] lg:w-[200px]"
        src="chinese.webp"
        alt=""
      />
    </div>
  );
};

export default Features;
