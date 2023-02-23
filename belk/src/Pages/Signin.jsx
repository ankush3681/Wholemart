import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import { Box,Input,Button,Center,Flex } from '@chakra-ui/react';
import axios from 'axios';
import { useContext } from 'react';
import {AuthContext} from '../context/AuthContextProvider';
import logo from "./login_logo.jpg";
import {AiOutlineFacebook} from "react-icons/ai";
import {FcGoogle} from "react-icons/fc";
import {AiOutlineMail} from "react-icons/ai";

const Signin = ({children}) => {
    const {nameOfUser} = useContext(AuthContext);
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleClick=()=>{
      const initState = {
        email,
        password
      };

      axios({
        method:"post",
        url:`https://reqres.in/api/register`,
        data:initState
      }).then(()=>{
        nameOfUser(name);
        alert(`Hello ${name}, Account Created Successfully.`);
        window.location.href="./Login"
      }).catch(()=>{
        alert("Please provide valid details")
      })
    }

  return (
    <div>
      <Navbar/>
      <Box mt={120} bgImage={logo} p={10}>
      <Box w="35%" m="auto" p={10} bg="white" borderRadius="10px">
      <Center fontSize={30} fontWeight="bold" mb={10} >Create Account</Center>
    <Input 
     placeholder="Enter Name Here"
     type="text"
     required
     w="80%"
     onChange={(e)=>setName(e.target.value)}
     style={{textAlign:"center",borderRadius:"5px",border:"1px solid #4299E1"}}
     />
    <br />
    <br />
    <Input 
     placeholder="Enter Email Here"
     type="email"
     required
     w="80%"
     onChange={(e)=>setEmail(e.target.value)}
     style={{textAlign:"center",borderRadius:"5px",border:"1px solid #4299E1"}}
     />
    <br />
    <br />
    <Input 
     placeholder="Set Password Here"
     type="password"
     required
      w="80%"
     onChange={(e)=>setPassword(e.target.value)}
     style={{textAlign:"center",borderRadius:"5px",border:"1px solid #4299E1"}}
     />
    <br />
    <br />
    <Button w="80%" cursor="pointer" bg="#4299E1" border="1px solid black" color="white" borderRadius="5px" fontSize={18}  onClick={handleClick} >Login </Button>
    <br />
    <br />
    <Box>
      <Center fontWeight="bold">Or sign Up Using</Center><br />
      <Flex w="80%" m="auto" border="1px solid #4299E1" borderRadius="5px" py={1} cursor="pointer" bg="#2C5282" color="white" justifyContent="space-evenly"  fontFamily="sans-serif"><AiOutlineFacebook size={25}/> SIGNUP WITH FACEBOOK</Flex>
    <br />
      <Flex w="80%" m="auto"  border="1px solid #4299E1" borderRadius="5px" py={1} cursor="pointer" bg="#718096" color="white" justifyContent="space-evenly"  fontFamily="sans-serif"><FcGoogle size={25}/> SIGNUP WITH GOOGLE</Flex>
    <br />
      <Flex w="80%" m="auto"  border="1px solid #4299E1" borderRadius="5px" color="white" py={1} bg="#E53E3E
" cursor="pointer" justifyContent="space-evenly" fontFamily="sans-serif"><AiOutlineMail size={25}/>SIGNUP WITH EMAIL</Flex>
    <br />
    </Box>
    </Box>
    </Box>
    </div>
  )
}

export default Signin;
