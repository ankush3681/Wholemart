import { Box,Flex,Center,Image,InputGroup,InputRightAddon,Input } from "@chakra-ui/react";
import "./Footer.css";
import {GrFacebook} from "react-icons/gr";
import {SiInstagram} from "react-icons/si";
import {AiFillTwitterCircle} from "react-icons/ai";
import {BsPinterest} from "react-icons/bs";
import {Link} from "react-router-dom";


const Footer = () => {
  return (
    <>
   <Box w="81%" m="auto" my={20}  fontFamily={"sans-serif"}>

    <p style={{textAlign:"start",fontSize:"17px",fontweight:"bold",borderBottom:"1px solid grey"}}>WholeMart - Shop & Save Today</p>

    <p style={{
      textAlign:"start",
      marginTop:"2rem"
    }}>From luggage sets to crossbody bags and fine jewelry, you’ll find what you’re shopping for (and so much more!) on belk.com. Shop < span style={{color:"blue",cursor:"pointer",fontSize:"17px"}} >designer</ span > handbags from many brands including Brahmin and Michael Kors, skincare and makeup from your favorites like Estée Lauder < span  style={{color:"blue",cursor:"pointer",fontSize:"17px"}} >Clinique</ span >and  or men’s suits and sport coats from stylish brands like< span style={{color:"blue",cursor:"pointer",fontSize:"17px"}}  >Tommy Hilfiger</ span > . Get chic in a variety of shoes for women, get active in Nike® or get outdoors in Columbia and Sperry®. < span style={{color:"blue",cursor:"pointer",fontSize:"17px"}}  >Update your home with bedspreads</ span >, comforter sets and new cookware. Create picture-perfect looks with our large selection of kids’ and baby clothes.  < span style={{color:"blue",cursor:"pointer",fontSize:"17px"}}  >Treat yourself to</ span >something new with our wide variety of purses, < span  style={{color:"blue",cursor:"pointer",fontSize:"17px"}} >jewelry</ span > and accessories. If you’re searching for luxury gifts, shop our selection of designer watches and Le Vian® jewelry. No matter your style or your lifestyle, you’ll find something you love at Belk. Happy shopping!</p>

    </Box>


    <Flex mt="5%" mb="3%" h="auto" py={35}  fontFamily="sans-serif" borderTop="1px solid black" borderBottom="1px solid black">
     <Box w="35%" borderRight="1px dashed black" h="100%" pl={60}   textAlign="start">
      <p style={{
        fontSize:"1.5rem",
        fontweight:"bold",
        cursor:"pointer"
      }}>Customer Service</p>
      <p className="footer_p_left">Contact Us</p>
      <p className="footer_p_left" >Find My Order</p>
      <p className="footer_p_left" >Return And Refunds</p>
      <p className="footer_p_left" >Find a Store</p>
      <p className="footer_p_left" >Find a Registery</p>
      <p className="footer_p_left" >Find a Wish List</p>
      <p className="footer_p_left" >Shipping Information</p>
      <p className="footer_p_left" >PickUp And Delivery Option</p>
      <p className="footer_p_left" >Policies And Guidelines</p>
      <p className="footer_p_left" >FAQs</p>
     </Box>
     <Box w="20%" borderRight="1px dashed black" h="100%" textAlign="start" pl={17}>
     <p style={{
        fontSize:"1.5rem",
        fontweight:"bold",
        cursor:"pointer",
        paddingLeft:"0"
      }}>WholeCart Reward</p>
      <p className="footer_p_left">Career</p>
      <p className="footer_p_left" >pay Money Bills</p>
      <p className="footer_p_left" >Manage My Account</p>
      <p className="footer_p_left" >WholeCart Reward</p>
      <p className="footer_p_left" >WholeCart Reward</p>
      <p className="footer_p_left" >Credit Reward</p>
      <p className="footer_p_left" >Return And Refunds</p>
      <p className="footer_p_left" >Find a Store</p>
      <p className="footer_p_left" >Find a Registery</p>
      <p className="footer_p_left" >Find a Wish List</p>
     </Box>
     <Box w="20%" borderRight="1px dashed black" h="100%" textAlign="start" pl={17}>
     <p style={{
        fontSize:"1.5rem",
        fontweight:"bold",
        cursor:"pointer",
        paddingLeft:"0"
      }}>About WholeCart</p>
      <p className="footer_p_left">Career</p>
      <p className="footer_p_left" >Catalog and Ads</p>
      <p className="footer_p_left" >NewsRoom</p>
      <p className="footer_p_left" >Brand We Carry</p>
      <p className="footer_p_left" >Behind The Brand</p>
      <p className="footer_p_left" >Vendor Resorces</p>
      <p className="footer_p_left" >Store Events</p>
      <p className="footer_p_left" >Manage My Account</p>
      <p className="footer_p_left" >WholeCart Reward</p>
      <p className="footer_p_left" >WholeCart Reward</p>
      
      
     </Box>
     <Box w="25%" h="100%" pl={10} textAlign="start">
      <p  style={{
        fontSize:"1rem",
        fontweight:"bold",
        cursor:"pointer",
      }}>Get the WholeMart App</p>
      <Image src="https://media.istockphoto.com/id/828088276/vector/qr-code-illustration.jpg?s=612x612&w=0&k=20&c=FnA7agr57XpFi081ZT5sEmxhLytMBlK4vzdQxt8A70M=" w="50%" mb={10}/>
      <Image src="https://belk.scene7.com/is/image/Belk/footer-app-ios-badge-2x?&$DWP_ARTWORK$" w="50%"  mb={5}/>
      <Image src="https://belk.scene7.com/is/image/Belk/footer-app-android-badge-2x?&$DWP_ARTWORK$" w="50%" />
      
     </Box>
    </Flex>

    <Flex justifyContent="space-around" pb={5} alignItems="center">
      <p w="15%"></p>
      <Center w="15%" fontSize={20} color="grey">Stay Connected</Center>
      <Flex w="15%" justifyContent="space-evenly" cursor="pointer">
        <GrFacebook size={40} color="#4299E1"/>
        <SiInstagram size={40} color="#ED64A6"/>
        <AiFillTwitterCircle size={40} color="#63B3ED"/>
        <BsPinterest size={40} color="#C53030"/>
      </Flex>
      <Center w="20%" fontSize={20} color="grey">Get $10 off with email sign-up! Use on top of coupons.</Center>

      <InputGroup w='20%'>
         <Input placeholder='Enter Your Email' border="1px solid grey"/>
         <InputRightAddon children='Join' bg="#4299E1" color="white" />
      </InputGroup>
      <p w="15%"></p>
    </Flex>
    
   </>
    
  )
}

export default Footer