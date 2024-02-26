import React from "react";
import Card from "@/components/Card";
import EventsCard from "@/components/EventsCard";
import { data } from "../../../lib/data.js";
import { events } from "../../../lib/data.js";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Localink",
  description: "Home",
};
function page() {
  return (
    <div>
      <div className="pb-5">
        <div className="lg:mx-5 md:mx-5 xl:mx-0 mx-5">
          <h2 className="text-white font-semibold text-3xl">Hello John,</h2>
          <h3 className="text-white text-3xl mt-0">Discover the nearby...</h3>
          <div className="mt-14 text-white flex flex-col space-y-20">
            <div>
              <div className="flex justify-between mb-5">
                <h2 className="font-bold text-2xl">Popular Groups</h2>
                <button className="border-solid border-[1px] border-border h-7 w-24 rounded-lg">
                  View All
                </button>
              </div>
              {/* <div className="flex space-x-5 overflow-x-auto"> */}
              <div className="flex sm:flex-wrap flex-nowrap gap-5 overflow-x-auto sm:overflow-visible">
                {data &&
                  data.map((item) => (
                    <Card
                      key={item.id}
                      title={item.title}
                      description={item.description}
                      members={item.members}
                      image={item.image}
                      color="white"
                      backgroundColor="customeindigo"
                    />
                  ))}
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-5">
                <h2 className="font-bold text-2xl">Events</h2>
                <button className="border-solid border-[1px] border-border h-7 w-24 rounded-lg">
                  View All
                </button>
              </div>
              {/* <div className="flex space-x-5 overflow-x-auto"> */}
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
                      backgroundColor="customeorange"
                    />
                  ))}
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-5">
                <h2 className="font-bold text-2xl">Shops</h2>
                <button className="border-solid border-[1px] border-[#6445F8] h-7 w-24 rounded-lg">
                  View All
                </button>
              </div>
              {/* <div className="flex space-x-5 overflow-x-auto"> */}
              <div className="flex sm:flex-wrap flex-nowrap gap-5 overflow-x-auto sm:overflow-visible">
                {data &&
                  data.map((item) => (
                    <Card
                      key={item.id}
                      title={item.title}
                      description={item.description}
                      members={item.members}
                      image={item.image}
                      color="white"
                      backgroundColor="customeindigo"
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
