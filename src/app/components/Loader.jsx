import Image from "next/image";
import React from "react";

// !assets
import { loader } from "../assets";

const Loader = () => {
  return (
    <>
      <div role="status" className=" w-full flex justify-center my-5">
        <Image className="h-6 w-6" src={loader} height={24} width={24} alt="loader..."/>
        <span class="sr-only text-black">Loading...</span>
      </div>
    </>
  );
};

export default Loader;
