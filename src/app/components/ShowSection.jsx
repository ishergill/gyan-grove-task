"use client"
import React, { useEffect, useState } from "react";

// !components
import Loader from "./Loader";
import ShowCard from "./ShowCard";

const ShowSection = () => {

// * Local states
  const [showsData, setShowsData] = useState();

  // * function to fetch show Data
  const fetchEventData = async () => {
      const response = await fetch(
        "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco"
      );
  
      const data = await response.json();
      setShowsData(data.events);

  };
  

  // * call a function to fetch data
  useEffect(() => {
    fetchEventData();
  }, []);

  return (
    <div className="ml-4 sm:ml-[10%] mt-4 mt-[-150px] p-4 overflow-x-scroll no-scrollbar">
      <h2 className=" mb-5 text-white text-lg font-semibold pb-4">
        Recommanded Shows &#8594;
      </h2>
      <div className="flex relative gap-x-10  min-w-max">
        {showsData ? (
          showsData.map((show,ind) => {
            return <ShowCard  key={ind} show={show} />;
          })
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default ShowSection;
