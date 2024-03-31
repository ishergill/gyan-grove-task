import Image from "next/image";

// !assets
import { location } from "../assets";

const EventCard = ({ event }) => {

  const date = new Date(event.date).toDateString("DD-MM-YYYY");

  return (
    <div className=" bg-white py-3 px-1 rounded-lg  relative  border border-[#B0BABF] cursor-pointer">
      <div className="  relative">
        <Image
          className="  w-[360px]  object-fill  rounded-lg object-top "
          src={`https://drive.google.com/thumbnail?id=${
            event.imgUrl.split(`/`)[5]
          }&sz=w1000`}
          height={280}
          width={400}
          alt={event.cityName}
        />
        <p className=" text-white  absolute bottom-5  bg-black/70  rounded-b-lg px-6 mx-5  w-[90%] py-2  ">
          {date}
        </p>
      </div>
      <div className=" px-3 ">
        <p className=" font-bold text-sm">{event.eventName}</p>
        <div className=" flex mt-1 w-full justify-between text-xs">
            <div className="flex gap-1 items-center">
                <Image className="h-4 w-auto"  src={location} height={16} width={16} alt="loc"/>
            <p className="text-[#999191]"> {event.cityName}</p>

            </div>
          <p className="text-[#999191]">
            {event.weather} | {event.distanceKm.split(".")[0]} km
          </p>
        </div>
      </div>
    </div>
  );
};
export default EventCard;
