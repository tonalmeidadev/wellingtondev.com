"use client";

import "swiper/css";
import "swiper/css/navigation";

import { useState, useEffect } from "react";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";

import type { CarouselProps } from "@/types";

import { Video } from "./video";

export function Carousel({ media }: CarouselProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full">
      {loading ? (
        <div className="h-72 w-full lg:grid lg:grid-cols-2 lg:gap-6">
          <div className="h-full w-full animate-pulse rounded-md bg-neutral-800" />
          <div className="hidden h-full w-full animate-pulse rounded-md bg-neutral-800 lg:block" />
        </div>
      ) : (
        <Swiper
          modules={[Navigation]}
          navigation={true}
          spaceBetween={24}
          breakpoints={{
            1024: {
              slidesPerView: 2,
            },
            300: {
              slidesPerView: 1,
            },
          }}
          className="w-full cursor-grab overflow-hidden rounded-md"
        >
          {media.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="group relative flex h-72 w-full flex-col items-end justify-end overflow-hidden rounded-md p-4 after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:h-1/3 after:w-full after:bg-linear-to-t after:from-neutral-950/80 after:transition-colors">
                {item.video ? (
                  <Video src={item.url} />
                ) : (
                  <Image
                    src={item.url}
                    alt={
                      item.title
                        ? item.title
                        : "Imagem representativa do projeto"
                    }
                    width={655}
                    height={368}
                    className="pointer-events-none absolute inset-0 h-full w-full object-cover object-top-left select-none"
                    priority
                  />
                )}

                <span className="pointer-events-none z-10 text-sm text-neutral-50 lowercase select-none">
                  {item.title}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}
