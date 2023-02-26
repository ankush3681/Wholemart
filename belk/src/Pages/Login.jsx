import { Box,Input,Button ,Center,useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import login_logo from "./login_logo.jpg"

const Login =({children}) =>{
 const {login,isAuth} = useContext(AuthContext);

 const [email,setEmail] = useState("");
 const [password,setPassword] = useState("");
 const toast = useToast();

 const initState={
    email,
    password
 }  
const navigate = useNavigate();
 const handleClick = () =>{
    axios({
       method:"post",
       url:`https://reqres.in/api/login`,
       data:initState
      }).then((res)=>{
         setEmail("");
         setPassword("");
         toast({
            title: 'Login Success.',
            description: "You've been login to your account.",
            status: 'success',
            position:"top",
            duration: 3000,
            isClosable: true,
          })
         // alert("Login Successful")
         if(res.data.token){
           login();
          
           navigate("/")
         }     
       })

      .catch((err)=>{
         toast({
            title: 'Wrong Credentials.',
            description: "Please Try Again to Login.",
            status: 'error',
            position:"top",
            duration: 3000,
            isClosable: true,
          })
      })
      

         // if(isAuth){

         //    return <Navigate to="/"/>
         // }

   
 }
    

    return <>
    <Navbar/>
    <Box mt={130} h="700px" border="1px solid white" bgImage={login_logo} p={10}>
    <Box w="25%" m="auto" border="1px solid grey" borderRadius="5px" p={5} bg="white">
    <Center fontSize="30px" fontWeight="bold" mb={10}>Login</Center>
    <Input 
     placeholder="Enter Email Here"
     type="email"
      w="100%"
      border="1px solid grey"
      value = {email}
     onChange={(e)=>setEmail(e.target.value)}
     style={{textAlign:"center"}}
     />
    <br />
    <br />
    <Input 
     placeholder="Enter Password Here"
     type="password"
     w="100%"
     border="1px solid grey"
     value = {password}
     onChange={(e)=>setPassword(e.target.value)}
     style={{textAlign:"center"}}
     />
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