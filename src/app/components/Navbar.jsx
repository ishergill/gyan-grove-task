"use client";
import Image from "next/image";
import React from "react";

// !assets
import { hamberger, heart, location, search, user } from "../assets";

const Navbar = ({ searchQuery, setSeachQuery }) => {
  return (
    <nav className="px-10 py-2  ">
      <div className=" flex items-center justify-between  ">
        <div>
        <h1 className="text-red-600 font-semibold text-xl">BookUsNow</h1>
        </div>
        <div className="flex gap-x-2 items-center sm:hidden">
          <Image
            className=" w-6 h-6"
            width={16}
            height={16}
            src={search}
            alt="search"
          />
          <Image
            className=" w-6 h-6 text-black"
            src={heart}
            width={16}
            height={16}
            alt="heart"
          />
          <Image
            className=" w-6 h-6 opacity-60"
            src={user}
            width={16}
            height={16}
            alt="user"
          />
        </div>
        <div className=" gap-2  md:flex hidden">
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2  font-medium  justify-center text-sm  text-white rounded-sm px-6 gap-4  bg-black focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <Image
              className=" w-4 h-4 text-black"
              src={hamberger}
              width={16}
              height={16}
              alt="hamberger"
            />
            Categories
          </button>
          <div className="">
            <input
              type="text"
              className=" py-2 w-[150%] pr-8 pl-5 rounded z-0 outline-none  border border-black "
              placeholder="DJI Phantom"
              value={searchQuery}
              onChange={(e) => setSeachQuery(e.target.value)}
            />
            <div className=" top-4 right-3">
              <i className="fa fa-search text-black z-20 hover:text-gray-500" />
            </div>
          </div>
        </div>
        <div className=" md:flex gap-x-5 items-center hidden ">
          <div className="flex gap-1">
            <Image
              className=" w-6 h-6 text-black"
              src={heart}
              width={16}
              height={16}
              alt="heart"
            />
            <p className="opacity-70"> favourites</p>
          </div>
          <button className=" px-4 py-2 border border-[#b2babf]  mr-4 rounded opacity-70">
            Sign In
          </button>
        </div>
      </div>
      <div className=" flex md:flex-row flex-col pt-3  justify-between ">
        <div className="flex gap-1 items-center">
          <Image
            className="h-4 w-auto"
            src={location}
            height={16}
            width={16}
            alt="location"
          />
          <p className="opacity-70"> Mumbai, India </p>
          <span className="text-[#b2babf] opacity-70">{`>`}</span>
        </div>
        <ul className="flex no-scrollbar overflow-x-scroll  pt-3 md:pt-0   gap-x-5 justify-start opacity-70">
          <li className="whitespace-nowrap">Live Shows</li>
          <li className="whitespace-nowrap">Stream</li>
          <li className="whitespace-nowrap">Movies</li>
          <li className="whitespace-nowrap">Plays</li>
          <li className="whitespace-nowrap">Events</li>
          <li className="whitespace-nowrap">Sports</li>
          <li className="whitespace-nowrap">Activities</li>
        </ul>
        <div className=" w-[10%]"></div>
      </div>
    </nav>
  );
};

export default Navbar;
