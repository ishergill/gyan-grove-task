import React from "react";


const Header = () => {
  return (
    <div className={"px-3 w-full h-screen bg-[url('/banner.svg')] "}>
      <h2 className="text-white leading-10 md:font-semibold text-[30px] sm:text-6xl md:max-w-[1100px] mx-auto text-center pt-20">
        Discover Exciting Events Happening Near You - Stay Tuned for Updates
      </h2>

      <p className=" text-white  text-center mt-5">
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
};

export default Header;
