import React from "react";
import soccerr from "../public/Assets/Socccerr_image.png";
import event_image from "../public/Assets/event_image.png";
import Image from "next/image";
function EventsCard({ color }: { color: string }) {
  // bg-gradient-to-tl from-[#7968d1] to-[#5543b1]
  //   background: #6445F8B2;

  // w-54 h-[154px]
  return (
    <div className="flex-shrink-0">
      <div className="relative rounded-3xl w-[224px] h-[154px] ">
        <div className="absolute top-0 bottom-0 left-0 right-0 rounded-3xl bg-customeorange z-10"></div>
        <Image
          src={event_image}
          alt="Soccer"
          className="w-full h-full absolute object-cover rounded-3xl"
        />
        <div className="block max-w-sm px-4 py-2 rounded-3xl absolute bottom-0 z-20">
          <h5
            className={`max-w-[145px] text-[18px] font-bold leading-tight mb-1  text-${color} dark:text-neutral-50`}
          >
            Miracle Comedy Show
          </h5>
          <p
            className={`text-[11px] font-semibold  text-${color} mb-1  dark:text-neutral-200 max-w-[150px]`}
          >
            Dec 12, 2023 &nbsp;&nbsp; 16.00 - 18.00
          </p>
        </div>
      </div>
    </div>
  );
}

export default EventsCard;
