import { Box, Button, Flex, Image, Center, Select, Checkbox,RadioGroup,Radio,Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { BsCartPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";




const Women = () => {

    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [order,setOrder] = useState("");
    const[pagelimit,setPageLimit] = useState(0);


    const getData = (page) => {
        return axios(`https://filthy-frog-pants.cyclic.app/womens?_page=${page}&_limit=12`)
            .then((res) => {
                setData(res.data)
            });
    }

    useEffect(() => {
        getData(page);
        sortLow(order);
    }, [page,order]);

    const handleCart = () => {
        alert("Item Added to the cart Successfully");
    }

    const sortLow =async (order) =>{

        if(order){

            // let res = await axios(`http://localhost:8080/kids?_page=${page}&_limit=12&_sort=price&_order=${order}`)
            //    setData(res.data)
            //    setPageLimit(res.headers["x-total-count"])

            axios.get(`http://localhost:8080/womens?_page=${page}&_limit=12&_sort=price&_order=${order}`)
            .then((res)=>{
                setData(res.data);
                console.log(res)
                setPageLimit(res.headers["x-total-count"])
                console.log(pagelimit)
            })
           }else{
            let res = await axios(`http://localhost:8080/womens?_page=${page}&_limit=12`)
            setData(res.data)
            setPageLimit(res.headers["x-total-count"])
    }
          

    }


    return <>
        <Navbar />
        <Box bg="white" pb={50}>

            {/* top section */}

            <Box m='auto' mt={120} w="90%" bg="white" >

            <Image src="https://belk.scene7.com/is/image/Belk/wk48_2022_chan_women_1226_fh_1?$DWP_PHOTO$" m="auto" mb={20}/>
            <Image src=""/>
            <Image src="https://belk.scene7.com/is/image/Belk/wk31_2022_chan_women_0829_denim_fh_1?$DWP_PHOTO$" m="auto" />
            <Image src="https://belk.scene7.com/is/image/Belk/wk31_2022_chan_women_0829_denim_fh_2?$DWP_PHOTO$" m="auto" />
            <Image src="https://belk.scene7.com/is/image/Belk/wk31_2022_chan_women_0829_denim_fh_3?$DWP_PHOTO$" m="auto" mb={20}/>
            <Image src="https://belk.scene7.com/is/image/Belk/wk04_2023_SPEC_lovefordenim_fp_fh_2?$DWP_PHOTO$" m="auto" mb={20}/>
            <Image src="https://belk.scene7.com/is/image/Belk/wk50_2023_chan_women_0109_fh_1?$DWP_PHOTO$" m="auto" mb={20}/>


            </Box>

            {/* filter section */}


            <Flex p={5} m="auto" mt={120} mb={50} w="80%" boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" bg="white" h="auto">
                <Box w="20%" h="100%" pr={5}>

                    <Select placeholder='Sort By Price'  onChange={(e)=>setOrder(e.target.value)} border="1px solid grey" mb={5} mt={50}>
                        <option value='option1'>Low To High</option>
                        <option value='option2'>High To Low</option>
                    </Select>
                    <Box boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" mt={25} pb={10}>
                        <Center fontSize={20} fontWeight="bold" color="#4299E1" py={15}>Filter By Brand</Center>
                        <RadioGroup textAlign="start" pl={10}>
                            <Stack spacing={5} direction='column'>
                                <Radio colorScheme='blue' value='' defaultChecked>
                                    All Products
                                </Radio>                                
                                <Radio colorScheme='blue' value='Puma'>
                                Puma
                                </Radio>
                                <Radio colorScheme='blue' value='Campus'>
                                Campus
                                </Radio>
                                <Radio colorScheme='blue' value='Adidas'>
                                Addidas
                                </Radio>
                                <Radio colorScheme='blue' value='Roadster'>
                                Roadster
                                </Radio>
                                <Radio colorScheme='blue' value='Wrong'>
                                Wrong
                                </Radio>
                            </Stack>
                        </RadioGroup>
                    </Box>
                    <Box boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" mt={25} pb={10}>
                        <Center fontSize={20} fontWeight="bold" color="#4299E1" py={15}>Filter By Product</Center>
                        <RadioGroup textAlign="start" pl={10}>
                            <Stack spacing={5} direction='column'>
                                <Radio colorScheme='blue' value='' defaultChecked>
                                    All Products
                                </Radio>                                
                                <Radio colorScheme='blue' value='Top'>
                                    Top
                                </Radio>
                                <Radio colorScheme='blue' value='Jeans'>
                                    Jeans
                                </Radio>
                                <Radio colorScheme='blue' value='Kurtas'>
                                    Kurta
                                </Radio>
                                <Radio colorScheme='blue' value='Saree'>
                                   Saree
                                </Radio>
                                <Radio colorScheme='blue' value='Shoes'>
                                    Shoes
                                </Radio>
                                <Radio colorScheme='blue' value='Jacket'>
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
                                <Link to={`/women/${item.id}`} > <Button color="white" bg="#4299E1" border="1px solid white" borderRadius="5px"
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

export default Women;