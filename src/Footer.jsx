import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-center lg:py-24 py-12 bg-[#131315]">
      <div className="lg:w-[70%] w-[95%] max-w-[1920px] p-8">
        <TopFooter />
      </div>
      <BottomFooter />
    </footer>
  );
};

const TopFooter = () => {
  return (
    <div className="lg:flex gap-[70px] mb-8">
      <FirstCol />
      <div className="lg:flex lg:flex-row lg:justify-between flex flex-col gap-8 w-full">
        <SecondCol />
        <ThirdCol />
        <FourthCol />
      </div>
    </div>
  );
};
const BottomFooter = () => {
  return (
    <div className=" w-full flex justify-center border-t border-white">
      <div className="w-[70%] max-w-[1920px]">
        <div className="py-8 lg:flex lg:flex-row flex flex-col gap-4 items-center lg:justify-between">
          <p className="text-[#f3f5feb3] text-center lg:text-left lg:max-w-[800px] max-w-[250px]">
            Copyright © 2024 HRFlow TNC | Designed by ThemeNcode LLC | Powered
            by Webflow
          </p>
          <div className="flex gap-2 cursor-pointer">
            <img
              className="w-[44px] hover:animate-pulse"
              src="card1.webp"
              alt=""
            />
            <img
              className="w-[44px] hover:animate-pulse"
              src="card2.webp"
              alt=""
            />
            <img
              className="w-[44px] hover:animate-pulse"
              src="card3.webp"
              alt=""
            />
            <img className="w-[44px] " src="card4.webp" alt="" />
            <img className="w-[44px]" src="card5.webp" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

const FirstCol = () => {
  return (
    <div className="flex flex-col lg:mb-0 mb-16 gap-6 lg:gap-8">
      <img className="w-[185px] cursor-pointer" src="logo2.webp" alt="" />
      <p className="text-white lg:max-w-[700px]">
        HrFlow stands at the forefront of revolutionizing the recruitment
        landscape, providing cutting-edge solutions to approach talent
        acquisition.
      </p>
      <Socials />
      <Line />
    </div>
  );
};

const SecondCol = () => {
  return (
    <div className="flex flex-col gap-4 lg:gap-8">
      <h2 className="text-white text-[18px]">Company</h2>
      <ul className="flex flex-col gap-4 text-[#f3f5feb3]">
        <a
          className=" hover:text-[#ff6b82] duration-500 cursor-pointer"
          href="www.yt.com"
        >
          Home
        </a>
        <a
          className="hover:text-[#ff6b82] duration-500 cursor-pointer"
          href="www.yt.com"
        >
          Features
        </a>
        <a
          className="hover:text-[#ff6b82] duration-500 cursor-pointer"
          href="www.yt.com"
        >
          Pricing
        </a>
        <a
          className="hover:text-[#ff6b82] duration-500 cursor-pointer"
          href="www.yt.com"
        >
          Testimonials
        </a>
      </ul>
    </div>
  );
};
const ThirdCol = () => {
  return (
    <div className="flex flex-col gap-4 lg:gap-8">
      <h2 className="text-white text-[18px]">Help & Supports</h2>
      <ul className="flex flex-col gap-4 text-[#f3f5feb3]">
        <a
          className=" hover:text-[#ff6b82] duration-500 cursor-pointer"
          href="www.yt.com"
        >
          Contact
        </a>
        <a
          className="hover:text-[#ff6b82] duration-500 cursor-pointer"
          href="www.yt.com"
        >
          Style-Guide
        </a>
        <a
          className="hover:text-[#ff6b82] duration-500 cursor-pointer"
          href="www.yt.com"
        >
          Change-Log
        </a>
        <a
          className="hover:text-[#ff6b82] duration-500 cursor-pointer"
          href="www.yt.com"
        >
          Licensing
        </a>
      </ul>
    </div>
  );
};
const FourthCol = () => {
  return (
    <div className="flex flex-col  gap-4 lg:gap-8">
      <h2 className="text-white text-[18px]">Products</h2>
      <ul className="flex flex-col gap-4 text-[#f3f5feb3]">
        <a
          className=" hover:text-[#ff6b82] duration-500 cursor-pointer"
          href="www.yt.com"
        >
          What's New
        </a>
        <a
          className="hover:text-[#ff6b82] duration-500 cursor-pointer"
          href="www.yt.com"
        >
          LegalArmor Suite
        </a>
        <a
          className="hover:text-[#ff6b82] duration-500 cursor-pointer"
          href="www.yt.com"
        >
          TermsMaster Plus
        </a>
        <a
          className="hover:text-[#ff6b82] duration-500 cursor-pointer"
          href="www.yt.com"
        >
          RegulaText Pro
        </a>
      </ul>
    </div>
  );
};

const Socials = () => {
  return (
    <div className="flex items-center cursor-pointer gap-11">
      <Facebook
        className="hover:-translate-y-2 transition-all duration-300 hover:fill-gray-50 duration-500"
        color="#f3f5feb3"
      />
      <Twitter
        className="hover:-translate-y-2 transition-all duration-300 hover:fill-blue-400 duration-500"
        color="#f3f5feb3"
      />
      <Linkedin
        className="hover:-translate-y-2 transition-all duration-300 hover:fill-blue-400 duration-500"
        color="#f3f5feb3"
      />
      <Youtube
        className="hover:-translate-y-2 transition-all duration-300 hover:fill-red-500 duration-500"
        color="#f3f5feb3"
      />
    </div>
  );
};

const Line = () => {
  return (
    <div className="w-full lg:hidden mt-8 bg-white border border-white"></div>
  );
};

export default Footer;
