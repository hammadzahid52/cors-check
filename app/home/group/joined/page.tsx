import React from "react";
import Card from "@/components/Card";
import Eventimg from "../../../../public/Assets/event_image.png";
import { data } from "../../../../lib/data.js";
import Link from "next/link";
function page() {
  const mem = 404;
  return (
    <div className="lg:mx-5 md:mx-5 xl:mx-0 mx-5">
      <div className="flex flex-col space-y-14 mt-8">
        <div>
          <div className="text-white mb-5">
            <div className="flex items-center gap-7 justify-between sm:justify-normal">
              <h1 className="font-bold text-xl md:text-2xl lg:text-2xl xl:text-2xl">
                Upcoming Events
              </h1>
              <Link
                href="/home/viewall"
                className="border-solid border-[1px] border-white rounded-lg text-white text-[14px] px-3 py-0 md:px-6 lg:px-6 xl:px-6 md:py-0"
              >
                View All
              </Link>
            </div>
          </div>
          <div className="flex sm:flex-wrap flex-nowrap gap-5 overflow-x-auto sm:overflow-visible">
            {data &&
              data.map((item) => (
                <Card
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  members={item.members}
                  image={item.image}
                  color="black"
                  backgroundColor="customeindigo"
                />
              ))}
          </div>
        </div>
        <div>
          <div className="text-white mb-5">
            <div className="flex items-center gap-7 justify-between sm:justify-normal">
              <h1 className="font-bold text-xl md:text-2xl lg:text-2xl xl:text-2xl">
                Giveaway Items
              </h1>
              <Link
                href="/home/viewall"
                className="border-solid border-[1px] border-white rounded-lg text-white text-[14px] px-3 py-0 md:px-6 lg:px-6 xl:px-6 md:py-0"
              >
                View All
              </Link>
            </div>
          </div>
          <div className="flex sm:flex-wrap flex-nowrap gap-5 overflow-x-auto sm:overflow-visible">
            {data &&
              data.map((item) => (
                <Card
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  members={item.members}
                  image={item.image}
                  color="black"
                  backgroundColor="customeindigo"
                />
              ))}
          </div>
        </div>
        <div>
          <div className="text-white mb-5">
            <div className="flex items-center gap-7 justify-between sm:justify-normal">
              <h1 className="font-bold text-xl md:text-2xl lg:text-2xl xl:text-2xl">
                Items for Sale
              </h1>
              <Link
                href="/home/viewall"
                className="border-solid border-[1px] border-white rounded-lg text-white text-[14px] px-3 py-0 md:px-6 lg:px-6 xl:px-6 md:py-0"
              >
                View All
              </Link>
            </div>
          </div>
          <div className="flex sm:flex-wrap flex-nowrap gap-5 overflow-x-auto sm:overflow-visible">
            {data &&
              data.map((item) => (
                <Card
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  members={item.members}
                  image={item.image}
                  color="black"
                  backgroundColor="customeindigo"
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
