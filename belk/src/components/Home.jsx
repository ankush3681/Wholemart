import Navbar from './Navbar';
import { Image,Flex,Box } from "@chakra-ui/react";
import OneAtTime from './homeslider/OneAtTime';
import FencySlider from './homeslider/FencySlider';
import FiveAtTime from "./homeslider/FiveAtTime";
import Footer from "./Footer"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";

const Home = () =>{
 
    return <>
  <Navbar/>

  {/* body of home page */}


  <Box m="auto" mt={140}>
  <Image src="https://static1.lenskart.com/media/desktop/img/Oct22/kiara/Refresh-Banner-Web.gif" w="81%"  m="auto" my={10}/> 
  <Image src="https://belk.scene7.com/is/image/Belk/wk01_2023_clinique_gwp_hp?$DWP_PHOTO$"  m="auto" my={10}/> 
  <FencySlider/>
  <Image src="https://belk.scene7.com/is/image/Belk/wk04_022123_hp_fh1?$DWP_PHOTO$"    m="auto"/> 
  <MultipleItems/>
  <Image src="https://belk.scene7.com/is/image/Belk/wk04_2023_haircare_tools_hp?$DWP_PHOTO$"   m="auto" my={10}/> 
  <Image src="https://static1.lenskart.com/media/desktop/img/Jan23/sunglasses/Sun-Banner-web.gif" w="81%"  m="auto" my={10}/> 
  <FiveAtTime/>
  <Image src="https://belk.scene7.com/is/image/Belk/wk03_2023_spec_champion_nse_hp?$DWP_PHOTO$"   m="auto" my={10}/>  


  <Image src="https://belk.scene7.com/is/image/Belk/wk04_2023_coupons_hp_fh?$DWP_PHOTO$"   m="auto"/> 
  <Image src="https://belk.scene7.com/is/image/Belk/wk03_021523_hp_fh3?$DWP_PHOTO$"   m="auto" mb={10}/> 
  <Flex w="81%" m="auto">
  <Image src="https://belk.scene7.com/is/image/Belk/wk33_2022_brplus_combo_nonch_2c1?$DWP_PHOTO$" mb={10}/> 
  <Image src="https://belk.scene7.com/is/image/Belk/wk33_2022_brplus_combo_nonch_2c2?$DWP_PHOTO$" mb={10}/> 

  </Flex>
  <Image w="81%" src="https://belk.scene7.com/is/image/Belk/wk36_2022_spec_clearance_bopis_ch_fh1?$DWP_PHOTO$"   m="auto"/> 
  <Flex w="81%"  m="auto">
  <Image src="https://belk.scene7.com/is/image/Belk/wk03_2022_services_4c_1?$DWP_PHOTO$" mb={10} mt={10}/>
  <Image src="https://belk.scene7.com/is/image/Belk/wk03_2022_services_4c_2?$DWP_PHOTO$" mb={10} mt={10}/>
  <Image src="https://belk.scene7.com/is/image/Belk/wk03_2022_services_4c_3?$DWP_PHOTO$" mb={10} mt={10}/>
  <Image src="https://belk.scene7.com/is/image/Belk/wk03_2022_services_4c_4?$DWP_PHOTO$" mb={10} mt={10}/>
  </Flex>
  </Box>
  

 <Footer/>  
</>

}

export default Home;

export class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay:true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div style={{margin:"auto",width:"81%"}}>
        <Slider {...settings}>
          <div>
          <Image src="https://belk.scene7.com/is/image/Belk/wk04_022123_hp_fh5_carl1?$DWP_PHOTO$" mb={10} mt={10}/>
          </div>
          <div>
          <Image src="https://belk.scene7.com/is/image/Belk/wk04_022123_hp_fh5_carl2?$DWP_PHOTO$" mb={10} mt={10}/>
          </div>
          <div>
          <Image src="https://belk.scene7.com/is/image/Belk/wk04_022123_hp_fh5_carl3?$DWP_PHOTO$" mb={10} mt={10}/>
          </div>
        
        </Slider>
        
      </div>
    );
  }
}


