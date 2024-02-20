const Stories = () => {
  return (
    <section
      style={{
        background:
          "linear-gradient(105deg, rgba(108, 71, 255, .4), rgba(103, 39, 207, .4) 80%, rgba(246, 88, 65, .4)), linear-gradient(#000, #000)",
      }}
      className="w-full flex relative justify-center py-32 "
    >
      <div className="lg:w-[70%] w-[95%] max-w-[1920px]">
        <div className="flex flex-col max-w-[880px] gap-16 lg:gap-8">
          <Top />
          <Bottom />
        </div>
      </div>
      <img
        className="absolute right-0 lg:top-auto top-72 lg:opacity-100 opacity-25  w-[520px]"
        src="tablet.webp"
        alt=""
      />
    </section>
  );
};

const Top = () => {
  return (
    <div className="flex flex-col gap-2 z-20">
      <p className="text-white font-bold text-[28px] lg:text-[46px] max-w-[620px]">
        Success stories from around the world
      </p>
      <hr className="w-full" />
    </div>
  );
};

const Bottom = () => {
  return (
    <div className="lg:grid lg:grid-cols-4 grid grid-cols-2 z-40  gap-8 text-white font-bold">
      <div className="flex flex-col gap-2">
        <p className="text-[60px]">90+</p>
        <p className="text-[20px] text-[#e7e7e7cc]">
          Countries customers across
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-[60px]">70k+</p>
        <p className="text-[20px] text-[#e7e7e7cc]">
          Global active <br /> users
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-[60px]">90+</p>
        <p className="text-[20px] text-[#e7e7e7cc]">
          reduction in onboarding queries
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-[60px]">90+</p>
        <p className="text-[20px] text-[#e7e7e7cc]">
          Time saved on managing time off
        </p>
      </div>
    </div>
  );
};

export default Stories;
