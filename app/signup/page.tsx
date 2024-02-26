import { Metadata } from "next";
import Image from "next/image";
import Logo from "./../../public/Assets/Logo_icon.png";
import Signup from "@/components/signup";
import Link from "next/link";
export const metadata: Metadata = {
  title: "SignUp to lockalink",
  description: "Authentication",
};

export default function page() {
  return (
    <div className="h-screen bg-[#6445F8] flex justify-center items-center">
      <div>
        <div className="flex w-full flex-col space-y-5 sm:w-[450px] text-white">
          <div className="flex flex-col space-y-2 items-center mb-2">
            <Image
              src={Logo}
              alt="Logo"
              width={70}
              height={70}
              className="mb-5"
            />
            <h1 className="text-3xl font-semibold tracking-tight">Welcome !</h1>
            <div className="flex space-x-1 text-[#E1E1E1]">
              <p className="md:text-[20px] ">Already have an Account? </p>
              <Link href="/auth" className="md:text-[20px] font-semibold">
                Signin
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <Signup />
          </div>
        </div>
      </div>
    </div>
  );
}
