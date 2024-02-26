import React from "react";
import logo from "../public/Assets/nav_Logo.png";
import messageicon from "../public/Assets/message.png";
import user_avataar from "../public/Assets/user_avataar.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
function navbar() {
  return (
    <div className="">
      <div className="flex justify-between">
        <Image src={logo} alt="Nav Logo" />
        <div className="flex space-x-3 items-center">
          <div>
            <Image src={messageicon} alt="Message" className="rounded-[22px]" />
          </div>
          <div>
            <Image
              src={user_avataar}
              alt="User Avatar"
              className="rounded-[20px]"
            />
          </div>
        </div>
      </div>
      <hr className="h-[0.10rem] my-8 bg-gray-400 border-0 dark:bg-gray-700 " />
    </div>
  );
}

export default navbar;
