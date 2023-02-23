import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './OneAtTime.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import { Box,Image } from '@chakra-ui/react';

export default function OneAtTime() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return ( 
    <>
    <Box  w="81%" m="auto" p={15}>
      <Swiper
        // spaceBetween={60}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide> 
        <Image src="https://belk.scene7.com/is/image/Belk/wk04_022123_hp_fh5_carl1?$DWP_PHOTO$"/>
        </SwiperSlide>
        <SwiperSlide> 
        <Image src="https://belk.scene7.com/is/image/Belk/wk04_022123_hp_fh5_carl2?$DWP_PHOTO$"/>
        </SwiperSlide>
        <SwiperSlide> 
        <Image src="https://belk.scene7.com/is/image/Belk/wk04_022123_hp_fh5_carl3?$DWP_PHOTO$" />
        </SwiperSlide>
        <SwiperSlide> 
        <Image src="https://belk.scene7.com/is/image/Belk/wk48_2022_chan_forthehome_1226_fh_1?$DWP_PHOTO$"/>
        </SwiperSlide>
        <SwiperSlide> 
        <Image src="https://belk.scene7.com/is/image/Belk/wk48_2022_chan_handbags_1226_fh1?$DWP_PHOTO$"/>
        </SwiperSlide>
        <SwiperSlide> 
        <Image src="https://belk.scene7.com/is/image/Belk/wk52_2023_chan_kids_0123_fh_1_cta?$DWP_PHOTO$"/>
        </SwiperSlide>
       
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
           {/* <circle cx="24" cy="24" r="20"></circle>*/}
          </svg>
           <span  ref={progressContent}></span>
        </div>
      </Swiper>
      </Box>
    </>
  );
}
