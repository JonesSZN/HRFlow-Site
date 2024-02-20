import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full py-4 bg-gray-300  flex justify-center">
      <div className="lg:w-[70%] w-full px-5 lg:px-0 max-w-[1920px]">
        <NavBar />
      </div>
    </header>
  );
};

const NavBar = () => {
  const List = [
    "Features",
    "How it Works",
    "Stories",
    "Pricing",
    "Testimonials",
  ];
  return (
    <nav className="w-full flex justify-between items-center">
      <img className="w-[185px] cursor-pointer" src="logo.webp" alt="" />
      <ul className="lg:flex items-center gap-11  hidden">
        {List.map((item) => (
          <li className="text-[#263c61] font-bold cursor-pointer">{item}</li>
        ))}
      </ul>

      <button className="bg-black lg:block hidden font-bold text-white border border-black rounded-full py-[10px] px-[30px] hover:text-[#263c61] hover:bg-transparent duration-300 hover:border border-black">
        Sign Up
      </button>
      <div className="lg:hidden">
        <Menu className="cursor-pointer" color="red" />
      </div>
    </nav>
  );
};

export default Header;
