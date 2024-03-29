import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Box, Input, Button, Center, Flex, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import logo from "./login_logo.jpg";
import { AiOutlineFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineApple } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Signin = ({ children }) => {
  const { nameOfUser } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const navigate = useNavigate();

  const handleClick = () => {
    const initState = {
      email,
      password,
    };

    axios({
      method: "post",
      url: `https://reqres.in/api/register`,
      data: initState,
    })
      .then((res) => {
        nameOfUser(name);
        toast({
          title: "Account created.",
          description: ` Hello ${name} We've created your account for you.`,
          status: "success",
          position: "top",
          duration: 3000,
          isClosable: true,
        });
        if (res.data.token) {
          navigate("/login");
        }
      })
      .catch(() => {
        toast({
          title: "Email Not Found",
          description: "Please Try Again to Create your Account",
          status: "error",
          position: "top",
          duration: 3000,
          isClosable: true,
        });
      });
  };

  return (
    <div>
      <Navbar />
      <Box mt={120} bgImage={logo} p={10}>
        <Box w="35%" m="auto" p={10} bg="white" borderRadius="10px">
          <Center fontSize={30} fontWeight="bold" mb={10}>
            Create Account
          </Center>
          <Input
            placeholder="Enter Name Here"
            type="text"
            required
            w="80%"
            onChange={(e) => setName(e.target.value)}
            style={{
              textAlign: "center",
              borderRadius: "5px",
              border: "1px solid #4299E1",
            }}
          />
          <br />
          <br />
          <Input
            placeholder="Enter Email Here"
            type="email"
            required
            w="80%"
            onChange={(e) => setEmail(e.target.value)}
            style={{
              textAlign: "center",
              borderRadius: "5px",
              border: "1px solid #4299E1",
            }}
          />
          <br />
          <br />
          <Input
            placeholder="Set Password Here"
            type="password"
            required
            w="80%"
            onChange={(e) => setPassword(e.target.value)}
            style={{
              textAlign: "center",
              borderRadius: "5px",
              border: "1px solid #4299E1",
            }}
          />
          <br />
          <br />
          <Button
            w="80%"
            cursor="pointer"
            bg="#4299E1"
            border="1px solid black"
            color="white"
            borderRadius="5px"
            fontSize={18}
            onClick={handleClick}
          >
            SignUp{" "}
          </Button>
          <br />
          <br />
          <Box>
            <Center fontWeight="bold">Or sign Up Using</Center>
            <br />
            <Flex
              w="80%"
              m="auto"
              border="1px solid #4299E1"
              borderRadius="5px"
              py={1}
              cursor="pointer"
              bg="#2C5282"
              color="white"
              justifyContent="space-evenly"
              alignItems={"center"}
              fontFamily="sans-serif"
            >
              <AiOutlineFacebook size={25} /> SIGNUP WITH FACEBOOK
            </Flex>
            <br />
            <Flex
              w="80%"
              m="auto"
              border="1px solid #4299E1"
              borderRadius="5px"
              py={1}
              cursor="pointer"
              bg="#718096"
              color="white"
              justifyContent="space-evenly"
              alignItems={"center"}
              fontFamily="sans-serif"
            >
              <FcGoogle size={25} /> SIGNUP WITH GOOGLE
            </Flex>
            <br />
            <Flex
              w="80%"
              m="auto"
              border="1px solid #4299E1"
              borderRadius="5px"
              color="white"
              py={1}
              bg="#171923
"
              cursor="pointer"
              justifyContent="space-evenly"
              alignItems={"center"}
              fontFamily="sans-serif"
            >
              <AiOutlineApple size={25} />
              SIGNUP WITH APPLE
            </Flex>
            <br />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Signin;
