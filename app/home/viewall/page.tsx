import Card from "@/components/Card";
import Mobilecard from "@/components/mobilecard";
import React from "react";
import { mobiledata } from "../../../lib/data.js";

function page() {
  return (
    <div>
      <div className="lg:mx-5 md:mx-5 xl:mx-0 mx-5 pb-5">
        <div className="flex flex-col space-y-14 mt-8">
          <h1 className="font-bold text-2xl text-white">Upcoming Events</h1>
          {/* --------------------------------------------------------------------------------------------- */}

          <div className="flex sm:flex-wrap gap-5 flex-col sm:flex-row">
            {mobiledata &&
              mobiledata.map((item) => (
                <Mobilecard
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  date={item.date}
                  time={item.time}
                />
              ))}
          </div>
          {/* -------------------------------------------------------------------------------------- */}
          <div className="flex sm:flex-wrap gap-5 flex-col sm:flex-row">
            {mobiledata &&
              mobiledata.map((item) => (
                <Mobilecard
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  date={item.date}
                  time={item.time}
                />
              ))}
          </div>
          <div className="flex sm:flex-wrap gap-5 flex-col sm:flex-row">
            {mobiledata &&
              mobiledata.map((item) => (
                <Mobilecard
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  date={item.date}
                  time={item.time}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
