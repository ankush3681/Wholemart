import {
  Box,
  Flex,
  Spacer,
  Input,
  InputGroup,
  Image,
  Button,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import { color } from "framer-motion";
import { NavLink, Link, Navigate, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "./logo.png";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import { TiShoppingCart } from "react-icons/ti";
import { AiOutlineSearch } from "react-icons/ai";

let lower_link = [
  { to: "/men", title: "Men" },
  { to: "/women", title: "Women" },
  { to: "/kid", title: "Kids" },
  { to: "/gifts", title: "Gifts" },
  { to: "/handbag", title: "Handbags" },
  { to: "/shoes", title: "Shoes" },
  { to: "/brand", title: "Brand" },
  { to: "/beauty", title: "Beauty" },
  { to: "/jewelry", title: "Jwelery" },
  { to: "/bed&bath", title: "Bed & Bath" },
  { to: "/clearance", title: "Clearance" },
];

const Navbar = () => {
  const { isAuth, logout } = useContext(AuthContext);
  const toast = useToast();
  const navigate = useNavigate();

  const logout_function = async () => {
    // alert("Logout Successfully");
    logout();
    toast({
      title: "Logout Successfully.",
      description: "You've been logout from your account.",
      status: "success",
      position: "top",
      duration: 3000,
      isClosable: true,
    });
    navigate("/login");
    // if(!isAuth){
    //     return <Navigate to="/login"/>

    // }
  };

  return (
    <>
      {/* Navbar Upper Part */}

      <Box w="100%" position="fixed" top="0" bg="white" zIndex="100">
        <Box bg="#EDF2F7" w="100%" margin="auto" p={2} color="white">
          <Flex w="80%" h="100%" m="auto">
            <Box w="20%" h="100%" color="black">
              <Link to="/">
                <Image src={logo} w="90%" />
              </Link>
            </Box>
            <Box w="50%" h="100%">
              <InputGroup>
                <Input
                  placeholder="Search Here to Find Products"
                  p={5}
                  textAlign="center"
                  border="1px solid grey"
                  bg="white"
                />
                <InputRightElement
                  children={<AiOutlineSearch color="black" />}
                />
              </InputGroup>
            </Box>
            <Flex
              w="35%"
              justifyContent="space-evenly"
              alignItems="center"
              color="black"
            >
              <NavLink className="link" to="/">
                {" "}
                Belk Reward
              </NavLink>
              <NavLink className="link" to="/">
                Coupan
              </NavLink>
              {isAuth ? (
                <Button fontSize={15} color="grey" onClick={logout_function}>
                  Logout
                </Button>
              ) : (
                <NavLink className="link" to="/login">
                  Login
                </NavLink>
              )}

              <NavLink className="link" to="/cart">
                <TiShoppingCart size={30} />
              </NavLink>
            </Flex>
          </Flex>
        </Box>

        {/* Navbar lower part */}

        <Box
          boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
          alignContent="center"
        >
          <Flex
            w="80%"
            margin="auto"
            h="50px"
            color="black"
            alignItems="center"
          >
            <Flex width="60%" justifyContent="space-between" fontWeight="100px">
              {lower_link.map((item) => (
                <NavLink
                  key={item.to}
                  style={({ isActive }) => {
                    return isActive ? { color: "red" } : { color: "none" };
                  }}
                  className="link"
                  to={item.to}
                >
                  {item.title}
                </NavLink>
              ))}
            </Flex>
            <Spacer />
            <Box width="10%" fontSize="14px" fontWeight="100px">
              <NavLink className="link">Find a Store</NavLink>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
