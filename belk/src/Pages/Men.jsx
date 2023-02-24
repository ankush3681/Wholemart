import { Box, Button, Flex, Image, Center, Select, Checkbox,RadioGroup,Radio,Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { BsCartPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";




const Men = () => {

    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);

    const getData = (page) => {
        return axios(`http://localhost:8080/mens?_page=${page}&_limit=12`)
            .then((res) => {
                setData(res.data)
            });
    }

    useEffect(() => {
        getData(page);
    }, [page]);

    const handleCart = () => {
        alert("Item Added to the cart Successfully");
    }



    return <>
        <Navbar />
        <Box bg="white" pb={50}>

            {/* top section */}

            <Box m='auto' mt={120} w="90%" bg="white" >

                <Image src="https://belk.scene7.com/is/image/Belk/wk02_2023_chan_men_0206_fh_1?$DWP_PHOTO$" w="100%" mt={30} mb={60} />
                <Flex justifyContent="space-evenly" mb={60}>
                    <Image src="https://belk.scene7.com/is/image/Belk/wk03_2023_chan_men_0213_2c_1?$DWP_PHOTO$" />
                    <Image src="https://belk.scene7.com/is/image/Belk/wk01_2023_chan_men_0130_2c_2?$DWP_PHOTO$" />
                </Flex>
                <Flex justifyContent="space-evenly" mb={60}>
                    <Image src="https://belk.scene7.com/is/image/Belk/wk48_2022_chan_men_1226_3c_1?$DWP_PHOTO$" />
                    <Image src="https://belk.scene7.com/is/image/Belk/wk48_2022_chan_men_1226_3c_2?$DWP_PHOTO$" />
                    <Image src="https://belk.scene7.com/is/image/Belk/wk48_2022_chan_men_1226_3c_3?$DWP_PHOTO$" />
                </Flex>
                <Flex justifyContent="space-evenly">
                    <Image src="https://belk.scene7.com/is/image/Belk/wk48_2022_chan_men_1226_4c_1?$DWP_PHOTO$" />
                    <Image src="https://belk.scene7.com/is/image/Belk/wk01_2023_chan_men_0130_4c_2?$DWP_PHOTO$" />
                    <Image src="https://belk.scene7.com/is/image/Belk/wk48_2022_chan_men_1226_4c_4?$DWP_PHOTO$" />
                    <Image src="https://belk.scene7.com/is/image/Belk/wk48_2022_chan_men_1226_4c_3?$DWP_PHOTO$" />
                </Flex>


            </Box>

            {/* filter section */}


            <Flex p={5} m="auto" mt={120} mb={50} w="80%" boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" bg="white" h="auto">
                <Box w="20%" h="100%" pr={5}>

                    <Select placeholder='Sort By Price' border="1px solid grey" mb={5} mt={50}>
                        <option value='option1'>Low To High</option>
                        <option value='option2'>High To Low</option>
                    </Select>
                    <Box boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px">
                        <Center fontSize={20} fontWeight="bold" color="#4299E1" py={15}>Filter By Brand</Center>
                        <Box textAlign="start" pl={10}>
                            <Checkbox >Puma</Checkbox><br /><br />
                            <Checkbox >Campus</Checkbox><br /><br />
                            <Checkbox >Addidas</Checkbox><br /><br />
                            <Checkbox >Nike</Checkbox><br /><br />
                            <Checkbox >Roadster</Checkbox><br /><br />
                            <Checkbox >Wrong</Checkbox><br /><br />
                        </Box>
                    </Box>
                    <Box boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" mt={25}>
                        <Center fontSize={20} fontWeight="bold" color="#4299E1" py={15}>Filter By Product</Center>
                        <RadioGroup textAlign="start" pl={10}>
                            <Stack spacing={5} direction='column'>
                                <Radio colorScheme='blue' value='1' defaultChecked>
                                    All Products
                                </Radio>                                
                                <Radio colorScheme='blue' value='2'>
                                    Shirt
                                </Radio>
                                <Radio colorScheme='blue' value='3'>
                                    Jeans
                                </Radio>
                                <Radio colorScheme='blue' value='4'>
                                    Kurta
                                </Radio>
                                <Radio colorScheme='blue' value='5'>
                                    T-Shirt
                                </Radio>
                                <Radio colorScheme='blue' value='6'>
                                    Shoes
                                </Radio>
                                <Radio colorScheme='blue' value='7'>
                                    Jacket
                                </Radio>
                            </Stack>
                        </RadioGroup>
                    </Box>
                </Box>


                {/* mens product  */}



                <Box w="90%" display="grid" gridTemplateColumns="repeat(3,1fr)" gap={10}>
                    {data?.map((item) => (
                        <Box key={item.id}
                            boxShadow="rgba(17, 17, 26, 0.1) 0px 0px 16px"
                            p={10}
                        >
                            <Center fontSize={25} fontWeight="bold" mb={2}>{item.title}</Center>
                            <img src={item.image} width="100%" />
                            <Center fontWeight="bold" my={2}>Rs.{item.price}</Center>
                            <Center fontWeight="bold" mb={2}>{item.brand}</Center>
                            <Flex justifyContent="space-between" alignItems="center">
                                <BsCartPlusFill size={30} color="#E53E3E" cursor="pointer" onClick={handleCart} />
                                <Link to={`/men/${item.id}`} > <Button color="white" bg="#4299E1" border="1px solid white" borderRadius="5px"
                                >View Detail</Button></Link>
                            </Flex>
                        </Box>
                    ))}

                </Box>
            </Flex>

            {/* pagination button */}



            <Box>
                <Button color="white" bg="#4299E1" border="1px solid white" borderRadius="5px" isDisabled={page === 1} onClick={() => setPage(page - 1)}>Previous</Button>
                <Button>{page}</Button>
                <Button color="white" bg="#4299E1" border="1px solid white" borderRadius="5px" isDisabled={page == 5} onClick={() => setPage(page + 1)}>Next</Button>
            </Box>

        </Box>

        <Footer/>

    </>
}

export default Men;