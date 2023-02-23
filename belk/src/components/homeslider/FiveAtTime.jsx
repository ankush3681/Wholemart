import React, { useRef, useState } from 'react';
import SwiperCore, { Virtual, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Box} from "@chakra-ui/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './FiveAtTime.css';
import { Image } from '@chakra-ui/react';

// install Virtual module
SwiperCore.use([Virtual, Navigation, Pagination]);

const slider = [
  {id:"1",image:"https://belk.scene7.com/is/image/Belk/wk03_021523_hp_6c_carl7?$DWP_PHOTO$"},
  {id:"2",image:"https://belk.scene7.com/is/image/Belk/wk03_021523_hp_6c_carl6?$DWP_PHOTO$"},
  {id:"3",image:"https://belk.scene7.com/is/image/Belk/wk03_021523_hp_6c_carl3?$DWP_PHOTO$"},
  {id:"4",image:"https://belk.scene7.com/is/image/Belk/wk03_021523_hp_6c_carl2?$DWP_PHOTO$"},
  {id:"5",image:"https://belk.scene7.com/is/image/Belk/wk03_021523_hp_6c_carl8?$DWP_PHOTO$"},
  {id:"6",image:"https://belk.scene7.com/is/image/Belk/wk04_022123_hp_6c_carl1?$DWP_PHOTO$"},
  {id:"7",image:"https://belk.scene7.com/is/image/Belk/wk03_021523_hp_6c_carl5?$DWP_PHOTO$"},
  {id:"8",image:"https://belk.scene7.com/is/image/Belk/wk03_021523_hp_6c_carl4?$DWP_PHOTO$"},
  {id:"9",image:"https://belk.scene7.com/is/image/Belk/wk34_2022_mensactive_4c2?$DWP_PHOTO$"},
  {id:"10",image:"https://belk.scene7.com/is/image/Belk/wk34_2022_mensactive_4c4?$DWP_PHOTO$"},
  {id:"11",image:"https://belk.scene7.com/is/image/Belk/wk34_2022_mensactive_4c1?$DWP_PHOTO$"},
  {id:"12",image:"https://belk.scene7.com/is/image/Belk/wk48_2022_chan_forthehome_1226_carl_4c_2?$DWP_PHOTO$"},
  {id:"13",image:"https://belk.scene7.com/is/image/Belk/wk07_2022_chan_bedbath_0314_4c_brands_3?$DWP_PHOTO$"},
  {id:"14",image:"https://belk.scene7.com/is/image/Belk/wk30_2022_chan_bedbath_0822_4c_3?$DWP_PHOTO$"},
  {id:"15",image:"https://belk.scene7.com/is/image/Belk/wk04_022123_hp_4c_carl2?$DWP_PHOTO$"},
  {id:"16",image:"https://belk.scene7.com/is/image/Belk/wk48_2022_chan_forthehome_1226_carl_4c_3?$DWP_PHOTO$"},
  {id:"17",image:"https://belk.scene7.com/is/image/Belk/wk04_022123_hp_4c_carl2?$DWP_PHOTO$"},
  {id:"18",image:"https://belk.scene7.com/is/image/Belk/wk07_2022_chan_bedbath_0314_4c_brands_8?$DWP_PHOTO$"},
  {id:"19",image:"https://belk.scene7.com/is/image/Belk?layer=0&src=7100972_JQQ2322_A_331&$DWP_PRODUCT_PLP_LARGE_t1$"},
];

export default function FiveAtTime() {
  const [swiperRef, setSwiperRef] = useState(null);
  // const appendNumber = useRef(500);
  // const prependNumber = useRef(1);
  // Create array with 500 slides
  const [slides, setSlides] = useState(
    slider.map((url, index) => `${url.image}`)
  );

  // const prepend = () => {
  //   setSlides([
  //     `Slide ${prependNumber.current - 2}`,
  //     `Slide ${prependNumber.current - 1}`,
  //     ...slides,
  //   ]);
  //   prependNumber.current = prependNumber.current - 2;
  //   swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
  // };

  // const append = () => {
  //   setSlides([...slides, 'Slide ' + ++appendNumber.current]);
  // };

  // const slideTo = (index) => {
  //   swiperRef.slideTo(index - 1, 0);
  // };

  return (
    <>
    <Box w="81%" m="auto" >
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={5}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        virtual
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide key={slideContent} virtualIndex={index}>
            {<Image src={`${slideContent}`}/>}
          </SwiperSlide>
        ))}
      </Swiper>
      </Box>
  
    </>
  );
}





