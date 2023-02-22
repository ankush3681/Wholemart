import { Box,Input,Button,ButtonGroup  } from "@chakra-ui/react";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

const Login =() =>{
 const [email,setEmail] = useState("");
 const [password,setPassword] = useState("");

 const initState={
    email,
    password
 }  

 const handleClick = () =>{
    setEmail("");
    setPassword("");
   axios({
    method:"post",
    url:`https://reqres.in/api/login`,
    data:initState
   }).then((res)=>{
    console.log(res.data.token)
   }).catch((err)=>console.log(err))
 }
    

    return <>
    <Navbar/>
    <Box mt={120}>
    <h1>Login From Here</h1>
    <Box w="20%" m="auto" >
    <Input 
     placeholder="Enter Email Here"
     p={10} w="100%"
     onChange={(e)=>setEmail(e.target.value)}
     />
    <br />
    <br />
    <Input 
     placeholder="Enter Password Here"
     p={10} w="100%"
     onChange={(e)=>setPassword(e.target.value)}

     />
    <br />
    <br />
    <Button w="100px" p={10} cursor="pointer" bg="RGBA(0, 0, 0, 0.48)" border="1px solid black" color="white" borderRadius="5px" fontSize={15}  onClick={handleClick}>Login </Button>
    </Box>
    </Box>
    </>
}

export default Login;