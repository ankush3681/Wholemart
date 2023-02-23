import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./FencySlider.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { Box } from "@chakra-ui/react";

export default function FencySlider() {
  return (
    <>
    <Box w="85%" m="auto">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://belk.scene7.com/is/image/Belk/wk04_022123_hp_4c_carl3?$DWP_PHOTO$" />
        </SwiperSlide>
        
        <SwiperSlide>
          <img src="https://belk.scene7.com/is/image/Belk/wk04_022123_hp_4c_carl1?$DWP_PHOTO$" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://belk.scene7.com/is/image/Belk/wk04_022123_hp_4c_carl2?$DWP_PHOTO$" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://belk.scene7.com/is/image/Belk/wk40_2022_chan_women_1031_3c_2?$DWP_PHOTO$" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://belk.scene7.com/is/image/Belk/wk48_2022_chan_women_1226_3c_1?$DWP_PHOTO$" />
        </SwiperSlide>
        
        <SwiperSlide>
          <img src="https://belk.scene7.com/is/image/Belk/wk40_2022_chan_women_1031_3c_3?$DWP_PHOTO$" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://belk.scene7.com/is/image/Belk/wk32_2022_chan_handbags_0906_4c_5?$DWP_PHOTO$" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://belk.scene7.com/is/image/Belk/wk32_2022_chan_handbags_0906_4c_2?$DWP_PHOTO$" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://belk.scene7.com/is/image/Belk/wk34_2022_chan_handbags_0919_4c_4?$DWP_PHOTO$" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://belk.scene7.com/is/image/Belk/wk48_2022_chan_men_1226_4c_4?$DWP_PHOTO$" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://belk.scene7.com/is/image/Belk/wk48_2022_chan_men_1226_3c_3?$DWP_PHOTO$" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://belk.scene7.com/is/image/Belk/wk48_2022_chan_men_1226_3c_1?$DWP_PHOTO$" />
        </SwiperSlide>
      </Swiper>
      </Box>
    </>
  );
}
