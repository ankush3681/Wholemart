import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import {Box,Image,Flex, Center, Button,Spinner } from "@chakra-ui/react";
import logo from "./userlogo.jpg";
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const KidSingle = () => {

  const [user,setUser] = useState([]);
  const [loading,setLoading] = useState(false);

    const val = useParams();
    // console.log(val.user_id)

    const getData = () =>{
      setLoading(true)
      axios.get(`http://localhost:8080/kids/${val.user_id}`)
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
    },[])
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
      <Box bgImage={logo} p={26} h="600px" w="100%">
        <Flex w={"35%"} m="auto" mt={20} boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px" h={350} p={15} justifyContent="space-evenly" borderRadius="10px" bg="white">
            <Image src={user.image}/>
            <Box>
                <Center fontSize={20}>Title :  <span style={{color:"red"}}> {user.title}</span></Center><br/>
                <Center fontSize={20}>Price : Rs.  <span style={{color:"red"}}> {user.price}</span></Center><br/>
                <Center fontSize={20}>Brand :  <span style={{color:"red"}}> {user.brand}</span></Center><br/>
               <Link to="/kid"> <Button color="white" bg="#4299E1" border="1px solid white"  borderRadius="5px">GO Back</Button></Link><br/><br/>
                <Button color="white" bg="#4299E1" border="1px solid white"  borderRadius="5px">Add To Cart</Button>
            </Box>
        </Flex>
      </Box>
      </Box>
    </div>
  )
}

export default KidSingle;
