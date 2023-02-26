import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import {Box,Image,Flex, Button,Spinner, Heading,Text,useToast } from "@chakra-ui/react";
import logo from "./userlogo.jpg";
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const MenSingle = () => {

  const [user,setUser] = useState([]);
  const [loading,setLoading] = useState(false);
  const toast = useToast();
    const val = useParams();
    // console.log(val.user_id)

    const getData = () =>{
      setLoading(true)
      axios.get(`http://localhost:8080/mens/${val.user_id}`)
      .then((res)=>{
         setUser(res.data)
         setLoading(false);
        //  console.log(res.data)
        // console.log(user.image)
      }).catch((err)=>{
        console.log(err);
      })
    }

    useEffect(()=>{
      getData();
    },[]);

    const handleCart = () => {
      toast({
          title: 'Item Added to Cart.',
          description: "You can check it in cart section",
          status: 'success',
          position:"top",
          duration: 3000,
          isClosable: true,
        })
  }


    if(loading) {
      return <Spinner
      thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      color='blue.500'
      size='xl'
      mt={10}
    />
    }



  return ( 
    <div>
      <Navbar/>
      <Box mt={120}>
      <Box bgImage={logo} p={26} h="auto" w="100%">
        <Flex w={"75%"} h="auto"  m="auto" mt={5} boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px"  p={15}  borderRadius="10px" bg="white">
            <Image src={user.image} boxShadow= "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" borderRadius={"5"} />

            <Box h="auto" bg="black" p={10} borderRadius="10px">
                <Heading textDecor="underline" color="blue" mb={25}>Description</Heading>
                <Text fontFamily="sans-serif" color="white" fontSize={17} w="80%" m="auto" mb={5}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</Text>
                <Box textAlign="start" w="30%" m="auto" mb={5}>
                <Text color="blue" fontSize={19}>Title :  <span style={{fontFamily:"sans-serif",color:"white"}}>{user.title}</span></Text><br/>
                <Text color="blue" fontSize={19}>Price :   <span style={{fontFamily:"sans-serif",color:"white"}}> Rs.{user.price}</span></Text><br/>
                <Text color="blue" fontSize={19}>Brand :  <span style={{fontFamily:"sans-serif",color:"white"}}> {user.brand}</span></Text><br/>
                </Box>
                <Flex w="60%" m="auto" justifyContent="space-around">
               <Link to="/men"> <Button color="white" bg="#4299E1" border="1px solid white"  borderRadius="5px">GO Back</Button></Link><br/><br/>
                <Button color="white" bg="#4299E1" border="1px solid white" onClick={handleCart}  borderRadius="5px">Add To Cart</Button>
                </Flex>
            </Box>
        </Flex>
      </Box>
      </Box>
    </div>
  )
}

export default MenSingle;
