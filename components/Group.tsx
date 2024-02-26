import React from "react";
import Image from "next/image";
import Building from "../public/Assets/building.png";
function Group() {
  return (
    <div className="">
      <div className="flex justify-between flex-wrap-reverse md:space-y-0 space-y-16">
        <div className="text-white flex flex-col space-y-4">
          <h4 className="font-bold text-3xl">404 Residents Society</h4>
          <div className="max-w-[266px] flex flex-col space-y-3">
            <p className="text-lg">
              Welcome to the 404 Residents Society’s Official Group. Outsiders
              not allowed.
            </p>
            <p className="text-sm">
              <span className="font-bold">382</span> Members
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-7">
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-customeindigolight rounded-xl"></div>
            <Image
              src={Building}
              alt=""
              className="rounded-xl w-[605px] h-[215px]"
              width={300}
            />
          </div>
          <div className="flex justify-end">
            <button className="border-solid border-[1px] border-[#6445F8] h-7 w-24 rounded-lg text-[#6445F8]">
              Join Group
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Group;
