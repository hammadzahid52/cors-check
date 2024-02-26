import React from "react";
import soccerr from "../public/Assets/Socccerr_image.png";
import event_image from "../public/Assets/event_image.png";
import Image, { StaticImageData } from "next/image";
interface CardProps {
  color: string;
  title: string;
  description: string;
  members: number;
  backgroundColor: string;
  image: string | StaticImageData;
}
function Card({
  color,
  title,
  description,
  members,
  image,
  backgroundColor,
}: CardProps) {
  return (
    <div className="flex-shrink-0">
      <div className="relative rounded-3xl w-[224px] h-[154px] ">
        <div
          className={`absolute top-0 bottom-0 left-0 right-0 rounded-3xl bg-${backgroundColor} z-10`}
        ></div>
        <Image
          src={image}
          alt="Soccer"
          className="w-full h-full absolute object-cover rounded-3xl"
        />
        <div className="block max-w-sm px-4 py-2 rounded-3xl absolute bottom-0 z-20">
          <h5
            className={`text-[14px] font-semibold leading-tight mb-1  text-${color} dark:text-neutral-50`}
          >
            {title}
          </h5>
          <p
            className={`text-[11px] text-${color} mb-1  dark:text-neutral-200 max-w-[150px]`}
          >
            {description}
          </p>
          <p className={`text-[11px] text-${color} mb-1 dark:text-neutral-200`}>
            {members} members
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
