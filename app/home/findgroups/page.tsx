import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find groups | Localink",
  description: "Find groups",
};
function page() {
  return (
    <div>
      <h2 className="text-white font-semibold text-3xl lg:mx-5 md:mx-5 xl:mx-0 mx-5">
        Hello John,
      </h2>
      <div className="min-h-screen text-white flex justify-center items-center">
        <div className="text-center">
          <h3 className="font-semibold">Let us find groups around you</h3>
          <button className="bg-[#6445F8] px-3 py-1 rounded-2xl mt-2">
            Enable Location
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;
