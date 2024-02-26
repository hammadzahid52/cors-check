"use client";
import * as React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { sliderData } from "../lib/data";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import ImageModal from "./Imagemodal";

export default function SingleProduct() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      console.log("current");
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  const handleImageClick = (image: string | StaticImport) => {
    setSelectedImage(image as string);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div>
        <div className="flex space-x-0 md:space-x-0 lg:space-x-16 xl:space-x-16 m-7 md:ml-20 flex-wrap lg:flex-nowrap mt-20">
          <Carousel setApi={setApi} className="w-full max-w-sm">
            <CarouselContent>
              {sliderData &&
                sliderData.map(
                  (item: {
                    index: React.Key | null | undefined;
                    image: string | StaticImport;
                  }) => (
                    <CarouselItem key={item.index}>
                      <Card className="bg-transparent border-none shadow-none">
                        {/* items-center justify-center */}
                        <CardContent className="flex aspect-square p-0">
                          <Image
                            src={item.image}
                            alt="Carousal Table rounded-lg"
                            style={{ borderRadius: "10px" }}
                            onClick={() => handleImageClick(item.image)}
                            className="hover:cursor-pointer"
                          />
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  )
                )}
            </CarouselContent>
            <div className="py-2 text-center text-sm text-muted-foreground">
              {Array.from({ length: count }, (_, index) => (
                <button
                  className={`rounded-full w-3 h-3 mx-1 bg-${
                    index === current - 1 ? "white" : "gray-400"
                  }`}
                  key={index}
                  onClick={() => {
                    if (api) {
                      api.scrollTo(index);
                    }
                  }}
                ></button>
              ))}
            </div>
          </Carousel>
          {showModal && (
            <ImageModal
              src={selectedImage}
              alt="Full Image"
              onClose={handleCloseModal}
            />
          )}
          <div className="text-white max-w-[490px] flex flex-col justify-center space-y-3">
            <h1 className="font-bold text-3xl">Product title</h1>
            <h1 className="font-bold text-3xl">$102</h1>
            <p className="text-lg">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 4
            </p>
            <button className="bg-[#6445F8] rounded-2xl w-36">
              Contact Seller
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
