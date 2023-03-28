import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import { Box, Center, Img, Text, Heading, Flex, Grid, Button, Divider } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import Navbar from "../components/Navbar";
// import { Grid } from 'swiper'

const Cart = () => {
    const { cartData, setCartData } = useContext(CartContext)
    const toast=useToast()


    const handleRemove = (id) => {
        const newData = cartData.filter((e) => e.id !== id)
        setCartData(newData)
        return  toast({
            title: 'Product Removed From Cart',
            description: "",
            status: 'error',
            duration: 5000,
            isClosable: true,
            position:'top'
          })
    }
    return (
      <>
      <Navbar/>
      <Box mt={120}>
       { cartData.length === 0 ? <Heading  color={"chartreuse"} backgroundColor={"black"}>Start Shopping!!!<br></br>Your Cart Is Empty</Heading> :
            <Flex justifyContent={"space-around"} marginTop={"5%"}>
                <Text></Text>
                <Grid templateColumns='repeat(3, 1fr)' gap={"20px"} width={"70%"} margin="auto">
                    {cartData.map((e) => {
                        return <Box fontFamily={"sans-serif"} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" padding={"3%"}>
                            <Center><Img boxSize={250} src={e.image} /></Center>
                            <Text noOfLines={1} fontSize='2xl' fontStyle={"oblique"} color={"black"}>{e.title}</Text>
                            <Heading fontFamily={"serif"} color={"black"}>Rs.{e.price}</Heading>
                            <Text noOfLines={2} color={"GrayText"}>{e.category}</Text>
                            <Text color={"GrayText"}>Rating:4.2</Text>
                            <Button onClick={() => handleRemove(e.id)} color={"chartreuse"} backgroundColor={"black"}>Remove</Button>
                        </Box>
                    })}
                </Grid>
                <Flex textAlign={"start"} flexDirection={"column"} mr={30} width={"20%"}>
                    <Heading color={"chartreuse"} backgroundColor={"black"}>Order Summary</Heading>
                    <hr ></hr>
                    {cartData.map((e) => {
                        return <Box padding={"2%"}>
                            <Text textAlign={"left"} fontSize={"xl"}>{e.title}:Rs.{e.price}</Text>
                            <hr />
                        </Box>
                    })}
                    <Heading marginTop={"3%"}>Total=Rs.{cartData.reduce((acc, item) => { return acc + item.price }, 0)}</Heading>
                    <Button margin={"auto"} width={"160px"} color={"chartreuse"} backgroundColor={"black"}>CHECKOUT</Button>
                </Flex>
            </Flex>}
            </Box>
            </>
    )
}

export default Cart