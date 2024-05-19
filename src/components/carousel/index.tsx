"use client";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { register } from "swiper/element-bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import HeaderProjectImg from "../headerProjectImg";
register();

interface IImageCarrousel {
  images: Array<string>;
  title: string;
}
export default function ImageCarousel({ images, title }: IImageCarrousel) {
  return (
    <div className="max-w-3xl mx-auto">
      <Swiper pagination={{ clickable: true }} navigation={true}>
        {images.map(image => (
          <SwiperSlide key={image} className="h-auto sm:h-[450px]">
            <HeaderProjectImg title={title} />
            <img
              src={image}
              alt="Imagem 1"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
