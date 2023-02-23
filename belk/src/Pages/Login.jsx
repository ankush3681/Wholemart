import { Box,Input,Button ,Center } from "@chakra-ui/react";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import login_logo from "./login_logo.jpg"

const Login =({children}) =>{
 const {login,userName} = useContext(AuthContext);

 const [email,setEmail] = useState("");
 const [password,setPassword] = useState("");

 const initState={
    email,
    password
 }  

 const handleClick = () =>{
    axios({
       method:"post",
       url:`https://reqres.in/api/login`,
       data:initState
      }).then((res)=>{
         setEmail("");
         setPassword("");
         login(userName);
         alert("Login Successful")
         { return <Navigate to="/"/>}
      }).catch((err)=>{
         alert("Wrong Credentials")
      })

   
 }
    

    return <>
    <Navbar/>
    <Box mt={130} mb={20} h="100%" border="1px solid white" bgImage={login_logo} p={10}>
    <Box w="25%" m="auto" border="1px solid grey" borderRadius="5px" p={5} bg="white">
    <Center fontSize="30px" fontWeight="bold" mb={10}>Login</Center>
    <Input 
     placeholder="Enter Email Here"
     type="email"
      w="100%"
      border="1px solid grey"
     onChange={(e)=>setEmail(e.target.value)}
     style={{textAlign:"center"}}
     />
    <br />
    <br />
    <br />
    <Input 
     placeholder="Enter Password Here"
     type="password"
     w="100%"
     border="1px solid grey"
     onChange={(e)=>setPassword(e.target.value)}
     style={{textAlign:"center"}}
     />
    <br />
    <br />
    <br />
    <Button w="100%" cursor="pointer" bg="#4299E1" border="1px solid black" color="white" borderRadius="5px" fontSize={18}  onClick={handleClick} >Login </Button>
    
    <p style={{
      textAlign:"start",
      cursor:"pointer",
      textDecoration:"underline",
      color:"#00B5D8",
      fontFamily:"sans-serif"
    }}>Forget Password ?</p>
    <br/>
    <br/>
    <Link to="/signin" style={{textDecoration:"none"}}>
    <Button w="100%" cursor="pointer" borderRadius="5px" fontSize={18} border="1px solid #4299E1" color="#4299E1"  className="signin_button">Create Account </Button>
    </Link>
    </Box>
    </Box>
    </>
   }
   

export default Login;