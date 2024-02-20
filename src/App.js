import { CandyCane, MoonStar } from "lucide-react";

const NavBar = () => {
  return (
    <header className="w-full py-8 flex justify-center bg-black">
      <nav className="w-[90%] max-w-[1120px] flex justify-between">
        <CandyCane color="white" size={32} />
        <ul className="flex gap-8 items-center text-white ">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li className="">Support</li>
        </ul>
      </nav>
    </header>
  );
};
const Hero = () => {
  return (
    <section className="flex flex-col h-[700px] w-full bg-neutral-500 justify-center items-center">
      <div className="flex items-center justify-center gap-8">
        <Card title={"Twitter"} />
        <Card title={"Instagram"} />
        <Card title={"Facebook"} />
      </div>
    </section>
  );
};
const Card = ({ title }) => {
  return (
    <div className="flex flex-col gap-4 items-center bg-pink-800 text-white p-8 rounded-md border-2 border-white shadow-sm hover:shadow-lg cursor-pointer">
      <p className="font-bold text-xl">{title}</p>
      <p className="max-w-[400px] text-[14px] text-center ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
        atque suscipit ab a dolorum amet iste soluta facilis animi quod magni
        voluptatum quas? Nobis temporibus quisquam vel totam distinctio
        recusandae.
      </p>
      <button className=" flex gap-2 py-4 px-8 rounded-full bg-pink-300">
        Click Here <MoonStar />
      </button>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
