"use client";
import React, { useEffect, useState } from "react";

// !components
import EventCard from "./EventCard";
import Loader from "./Loader";

const EventSection = () => {
  // *Local States
  const [eventsData, setEventsData] = useState([]);
  const [hasmore, sethasMore] = useState(true);
  const [Loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  //   * function to fetch Data from api
  const fetchEventData = async () => {
    try {
      if (!hasmore) return;
      setLoading(true);
      const response = await fetch(
        `https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${page}&type=upcoming`
      );
      const data = await response.json();
      const event = data.events;
      if (eventsData.length === 0) {
        setEventsData([...event]);
      } else {
        setEventsData((prev) => [...prev, ...event]);
      }
      setLoading(false);
    } catch (error) {
      sethasMore(false);
      setLoading(false);
    }
  };

  // * add data when user enter to end of page
  const handleInfiniteScroll = async () => {
    try {
      if (
        document.documentElement.scrollTop + window.innerHeight + 1 >=
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      sethasMore(false);
    }
  };

  //   * to call function for fetch data
  useEffect(() => {
    fetchEventData();
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, [page]);

  return (
    <>
      <h2 className=" ml-[5%] md:ml-[10%] text-black text-lg font-bold mt-10 mb-5 opacity-80 ">
        Upcoming Events &#8594;
      </h2>
      <div className="flex flex-wrap gap-4 m-auto justify-center px-4 sm:px-0">
        {eventsData ? (
          eventsData?.map((event, ind) => {
            return <EventCard key={ind} event={event} />;
          })
        ) : (
          <Loader />
        )}
      </div>
      {Loading ? <Loader /> : null}
    </>
  );
};

export default EventSection;
