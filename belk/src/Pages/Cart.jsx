
import {
  Box,
  Flex,
  Heading,
  HStack,
  Stack,
  Image,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import Navbar from '../components/Navbar';
import {Link} from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { CartItem } from "./CartItem"
import { CartOrderSummary } from './CartOrderSummary '
// import { cartData } from './_data'



 const Cart = () => {

    const {cartData} = useContext(CartContext);
    console.log(cartData)
    return(
    <>
    <Navbar/>
    
  <Box
    maxW={{ base: '3xl', lg: '7xl' }}
    mx="auto"
    px={{ base: '4', md: '8', lg: '12' }}
    py={{ base: '6', md: '8', lg: '12' }}
  >
    
    <Stack
      mt={120}
      direction={{ base: 'column', lg: 'row' }}
      align={{ lg: 'flex-start' }}
      spacing={{ base: '8', md: '16' }}
    >
      <Stack spacing={{ base: '8', md: '10' }} flex="2">
        <Heading fontSize="2xl" fontWeight="extrabold">
          Shopping Cart (3 items)
        </Heading>

        <Stack spacing="6">
          {cartData.map((item) => (
            <CartItem key={item.id} {...item} />
            // <Image src={item.image}/>
          ))}
        </Stack>
      </Stack>

      <Flex direction="column" align="center" flex="1">
        <CartOrderSummary />
        <HStack mt="6" fontWeight="semibold">
          <p>or</p>
          <Link to="/men" color={mode('blue.500', 'blue.200')}>Continue shopping</Link>
        </HStack>
      </Flex>
    </Stack>
  </Box>
  </>
)
}
export default Cart;

