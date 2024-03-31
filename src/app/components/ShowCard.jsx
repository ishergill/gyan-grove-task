import Image from "next/image";

// !assets
import { location } from "../assets";

const ShowCard = ({ show }) => {
  const img = `https://drive.google.com/thumbnail?id=${
    show.imgUrl.split(`/`)[5]
  }`;
  const date = new Date(show.date).toDateString("DD-MM-YYYY");

  return (
    <div
      className={`  scale-110 w-[240px] h-[300px] bg-cover  rounded-lg `}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className=" w-full text-white flex  px-5 justify-between text-xs  absolute bottom-5  ">
        <div className=" text-[11px]">
          <p className="text-base whitespace-nowrap">Make Agree</p>
          <div className="flex gap-1 items-center ">
            <Image
              className="h-3 w-auto"
              src={location}
              height={16}
              width={16}
              alt="location"
            />
            <p className="opacity-90" >{show.cityName}</p>
          </div>
        </div>
        <div className="text-[9px] text-right flex flex-col justify-end">
          <p className="opacity-90">{date}</p>
          <p className=" opacity-90">
            {show.weather} | {show.distanceKm.split(".")[0]} km
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShowCard;
