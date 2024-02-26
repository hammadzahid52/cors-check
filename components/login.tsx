"use client";
import * as React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { Icons } from "../components/icons";
import { LuUser2 } from "react-icons/lu";
import { RiKey2Line } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsLoading(true);
    try {
      const response = await fetch("http://188.166.2.188/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Fix typo in contentType
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const responseData = await response.json();
        // Assuming responseData contains user data including email and password
        if (
          responseData.email === data.email &&
          responseData.password === data.password
        ) {
          console.log("Login Success");
          // Redirect or perform any action after successful login
          // Redirect to dashboard after successful login
        } else {
          console.log("Invalid credentials");
        }
      } else {
        console.log("Login Failed");
      }
    } catch (error) {
      console.log("Error Occurred", error);
    }
    setIsLoading(false);
    reset();
  };
  return (
    <div className="grid gap-6 max-w-80 font-inter">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-7">
          <div className="grid gap-2">
            <Label className="text-md" htmlFor="email">
              Email
            </Label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <LuUser2 className="w-4 h-4 text-gray-100 dark:text-gray-400" />
              </div>
              <Input
                className="block w-full p-4 ps-10 text-sm text-white border-none bg-gradient-to-br from-[#7A61F8] to-transparent  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-transparent placeholder:text-white  dark:placeholder-opacity-50"
                id="username"
                {...register("email", { required: "Eamil is Required" })}
                placeholder="Email"
                type="email"
                autoCapitalize="none"
                autoComplete="text"
                autoCorrect="off"
                disabled={isLoading}
              />
            </div>
            {errors.email && (
              <p className="text-red-700 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div className="grid gap-2">
            <Label className="text-md" htmlFor="password">
              Password
            </Label>

            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <RiKey2Line className="w-4 h-4 text-gray-100 dark:text-gray-400" />
              </div>
              <Input
                className="block w-full p-4 ps-10 text-sm text-white border-none bg-gradient-to-br from-[#7A61F8] to-transparent  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-transparent placeholder:text-white  dark:placeholder-opacity-50"
                id="password"
                placeholder="Password"
                type="password"
                {...register("password", {
                  required: "Password is Required",
                  minLength: {
                    value: 3,
                    message: "Password must be at least 8 characters",
                  },
                })}
                autoCapitalize="none"
                autoComplete="text"
                autoCorrect="off"
                disabled={isLoading}
              />
            </div>
            {errors.password && (
              <p className="text-red-700 text-sm">{errors.password.message}</p>
            )}
          </div>
          <Button disabled={isLoading} className="bg-[#5037C6] rounded-xl">
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign in
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-[#6445F8] px-2 text-[#E1E1E1]">
            Or continue with
          </span>
        </div>
      </div>

      <div className="flex justify-center">
        <Button disabled={isLoading} className="max-w-14 bg-[#281C63]">
          {isLoading ? (
            <Icons.spinner className="mr-2 h-12 w-12 animate-spin" />
          ) : (
            <FcGoogle className="w-14 h-14" />
          )}
        </Button>
      </div>
    </div>
  );
}

export default Login;
