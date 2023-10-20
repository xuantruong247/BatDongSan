import React from "react";
import HeroSlider, { Slide } from "hero-slider";

const bogliasco = "https://i.imgur.com/Gu5Cznz.jpg";
const countyClare = "https://i.imgur.com/idjXzVQ.jpg";
const craterRock = "https://i.imgur.com/8DYumaY.jpg";
const giauPass = "https://i.imgur.com/8IuucQZ.jpg";

const CarouselOutLet = () => {
  return (
    <HeroSlider
      height={"50vh"}
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
       
      }}
    >
      <Slide
        background={{
          backgroundImageSrc: giauPass,
          backgroundAnimation: "zoom",
        }}
      />
      <Slide
        background={{
          backgroundImageSrc: bogliasco,
          backgroundAnimation: "zoom",
        }}
      />
      <Slide
        background={{
          backgroundImageSrc: countyClare,
          backgroundAnimation: "zoom",
        }}
      />
      <Slide
        background={{
          backgroundImageSrc: craterRock,
          backgroundAnimation: "zoom",
        }}
      />
      {/* <MenuNav /> */}
    </HeroSlider>
  );
};

export default CarouselOutLet;
