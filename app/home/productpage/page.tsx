import React from "react";
import { Metadata } from "next";
import SingleProduct from "../../../components/SingleProduct";
import Card from "../../../components/Card";
import { data } from "../../../lib/data.js";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Single Product | Localink",
  description: "Product Page",
};
function page() {
  return (
    <div className="pb-5">
      <SingleProduct />
      <div className="lg:mx-5 md:mx-5 xl:mx-0 mx-5">
        <div className="text-white mb-5">
          <div className="flex items-center space-x-5">
            <h1 className="font-bold text-2xl">Similar Items</h1>
            <Link
              href="/home/viewall"
              className="border-solid border-[1px] border-white rounded-lg text-white text-[12px] px-6"
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
  );
}

export default page;
