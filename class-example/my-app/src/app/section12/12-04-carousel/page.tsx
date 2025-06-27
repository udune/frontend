"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";

export default function CarouselPage() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Image
          src="/images/12-04-dog1.jpg"
          alt="강아지이미지"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "400px", objectFit: "cover" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/images/12-04-dog2.jpg"
          alt="강아지이미지"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "400px", objectFit: "cover" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/images/12-04-dog3.jpg"
          alt="강아지이미지"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "400px", objectFit: "cover" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/images/12-04-dog4.jpg"
          alt="강아지이미지"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "400px", objectFit: "cover" }}
        />
      </SwiperSlide>
    </Swiper>
  );
}
