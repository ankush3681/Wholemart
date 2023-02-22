import { Box,Flex, Spacer,Input,Center,Image } from '@chakra-ui/react';
import { color } from 'framer-motion';
import { NavLink,Link } from 'react-router-dom';
import "./Navbar.css";
import logo from "./logo.png";


let lower_link = [
    {to:"/men" , title:"Men"},
    {to:"/women" , title:"Women"},
    {to:"/kid" , title:"Kids"},
    {to:"/gifts" , title:"Gifts"},
    {to:"/handbag" , title:"Handbags"},
    {to:"/shoes" , title:"Shoes"},
    {to:"/brand" , title:"Brand"},
    {to:"/beauty" , title:"Beauty"},
    {to:"/jewelry" , title:"Jwelery"},
    {to:"/bed&bath" , title:"Bed & Bath"},
    {to:"/clearance" , title:"Clearance"},
];



const Navbar = () =>{
    return <>

    {/* Navbar Upper Part */}

    <Box w='100%' position="fixed" top="0" bg="white">
    <Box bg='#EDF2F7' w='100%' margin="auto" p={4} h="50px" color='white'>
     <Flex w="80%" h="100%" m="auto">
     <Box w="20%" h="100%" color="black">
        <Link to="/"><Image src={logo} w="90%" /></Link>
        
     </Box>
     <Box w="50%" h="100%" p={5}>
     <Input placeholder='May I Help You?' w="100%" h="70%" variant='filled' focusBorderColor='pink.400'/>
     </Box>
     <Flex w="35%" h="100%" justifyContent="space-evenly" alignItems="center">
        <NavLink className= "link" to="/">Belk Reward</NavLink>
        <NavLink className= "link" to="/">Coupan</NavLink>
        <NavLink className= "link" to="/login">Account</NavLink>
        <NavLink className= "link" to="/cart">Bag</NavLink>
     </Flex>

     </Flex>
</Box>

{/* Navbar lower part */}


<Box  boxShadow= "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px">
<Flex w='80%' margin="auto" h="50px"  color='black'  alignItems="center">
<Flex width="60%" justifyContent="space-between" fontWeight="100px" >
    {/* <NavLink className='link' to="/men" >Men</NavLink>
    <NavLink className='link'  to="/women" >Women</NavLink>
    <NavLink className='link'  to="/kid" >Kids</NavLink>
    <NavLink className='link'  to="/gifts" >Gifts</NavLink>
    <NavLink className='link'  to="/handbag" >Handbag</NavLink>
    <NavLink className='link'  to="/shoes" >Shoes</NavLink>
    <NavLink className='link'  to="/brand" >Brand</NavLink>
    <NavLink className='link'  to="/beauty" >Beauty</NavLink>
    <NavLink className='link'  to="/jewelry" >Jewelry</NavLink>
    <NavLink className='link'  to="/bed&bath" >Bed & Bath</NavLink>
    <NavLink className='link'  to="/clearance" >Clearance</NavLink> */}
    {lower_link.map((item)=>(
        <NavLink key={item.to}
        style={({isActive})=>{
           return  isActive ? {color:"red" }: {color:"none"} 
        }}
        
        className="link" to={item.to}>{item.title}</NavLink>
    ))}
</Flex>
<Spacer/>
<Box width="10%" fontSize="14px" fontWeight="100px" >
  <NavLink className='link'>Find a Store</NavLink>
</Box>
</Flex>
</Box>
</Box>



    </>
}

export default Navbar;