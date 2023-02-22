import Navbar from './Navbar';
import { Image,Flex,Box } from "@chakra-ui/react";
import Footer from '../Pages/Footer';


const Home = () =>{
 
    return <>
  <Navbar/>

  {/* body of home page */}


  <Box mt={120}>
  <Image src="https://belk.scene7.com/is/image/Belk/wk01_2023_clinique_gwp_hp?$DWP_PHOTO$" m={10}/> 
  <Image src="https://belk.scene7.com/is/image/Belk/wk04_ws_themed_denim_blue_trans_fh1?$DWP_PHOTO$"  m={10}/> 
  <Image src="https://belk.scene7.com/is/image/Belk/wk04_022123_hp_fh1?$DWP_PHOTO$"   m={10}/> 
  <Image src="https://belk.scene7.com/is/image/Belk/wk04_022123_hp_fh2?$DWP_PHOTO$"  m={10}/> 
  <Image src="https://belk.scene7.com/is/image/Belk/wk04_2023_haircare_tools_hp?$DWP_PHOTO$"  m={10}/> 
  <Image src="https://belk.scene7.com/is/image/Belk/wk03_2023_spec_champion_nse_hp?$DWP_PHOTO$"  m={10}/> 
  <Image src="https://belk.scene7.com/is/image/Belk/wk04_2023_coupons_hp_fh?$DWP_PHOTO$"  m={10}/> 
  <Image src="https://belk.scene7.com/is/image/Belk/wk03_021523_hp_fh3?$DWP_PHOTO$"  m={10}/> 
  <Flex w="81%" m="auto">
  <Image src="https://belk.scene7.com/is/image/Belk/wk33_2022_brplus_combo_nonch_2c1?$DWP_PHOTO$" mb={10}/> 
  <Image src="https://belk.scene7.com/is/image/Belk/wk33_2022_brplus_combo_nonch_2c2?$DWP_PHOTO$" mb={10}/> 

  </Flex>
  <Image w="81%" src="https://belk.scene7.com/is/image/Belk/wk36_2022_spec_clearance_bopis_ch_fh1?$DWP_PHOTO$"  m={10}/> 
  <Flex w="81%"  m="auto">
  <Image src="https://belk.scene7.com/is/image/Belk/wk03_2022_services_4c_1?$DWP_PHOTO$" mb={10} mt={10}/>
  <Image src="https://belk.scene7.com/is/image/Belk/wk03_2022_services_4c_2?$DWP_PHOTO$" mb={10} mt={10}/>
  <Image src="https://belk.scene7.com/is/image/Belk/wk03_2022_services_4c_3?$DWP_PHOTO$" mb={10} mt={10}/>
  <Image src="https://belk.scene7.com/is/image/Belk/wk03_2022_services_4c_4?$DWP_PHOTO$" mb={10} mt={10}/>
  </Flex>
  </Box>

  {/* footer of home page */}
  <Footer />

  
</>
}

export default Home;


