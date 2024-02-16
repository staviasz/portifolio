"use client";
import Image from "next/image";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { register } from "swiper/element-bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import HeaderProjectImg from "../headerProjectImg";
register();

interface IImageCarrousel {
  images: Array<any>;
}
export default function ImageCarousel({ images }: IImageCarrousel) {
  return (
    <div className="max-w-3xl mx-auto">
      <Swiper pagination={{ clickable: true }} navigation={true}>
        {images.map(image => (
          <SwiperSlide key={image}>
            <HeaderProjectImg />
            <Image src={image} alt="Imagem 1" className="sm:h-auto h-40" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
