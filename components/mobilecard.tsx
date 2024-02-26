import React from "react";
import game from "../public/Assets/games.png";
import Image, { StaticImageData } from "next/image";

interface MobilecardProps {
  title: string;
  image: string | StaticImageData;
  description: string;
  date: string;
  time: string;
}
function Mobilecard(props: MobilecardProps) {
  return (
    <div className="flex">
      <div className="relative rounded-2xl sm:rounded-3xl flex-grow w-[340px] h-[73px] sm:w-[224px] sm:h-[154px] sm:flex-grow-0">
        <div
          className={`absolute top-0 bottom-0 left-0 right-0 rounded-2xl sm:rounded-3xl bg-[#FFFFFFBF] z-10`}
        ></div>
        <Image
          src={props.image}
          alt="Soccer"
          className="w-full h-full absolute object-cover rounded-2xl sm:rounded-3xl"
        />
        <div className="rounded-3xl sm:rounded-2xl absolute bottom-0 left-0 right-0 z-20 px-3 pb-2 sm:px-4 py-0 sm:py-2 sm:left-auto sm:right-auto sm:space-y-1">
          <h5
            className={`text-[14px] font-bold leading-tight text-black dark:text-neutral-50`}
          >
            {props.title}
          </h5>
          <div className="flex justify-between sm:justify-normal sm:flex-col flex-row text-black font-semibold sm:space-y-1">
            <p className="text-[11px] max-w-44">{props.description}</p>
            <div className="flex flex-col sm:flex-row justify-normal sm:justify-between max-w-36">
              <p className="text-[11px]"> {props.date} </p>
              <p className="text-[11px]">{props.time}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mobilecard;
