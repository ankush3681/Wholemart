import { Box, Button, Flex, Image, Center, Select, Checkbox,RadioGroup,Radio,Stack, Accordion,useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { BsCartPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import FencySlider from "../components/homeslider/FencySlider";




const Kid = () => {

    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [order,setOrder] = useState("");
    const[pagelimit,setPageLimit] = useState(0);
    const [category,setCatagory] = useState("");
    const [product,setProduct] = useState("");
    const [cartData,setCartData] = useState([]);
    const toast = useToast();
    // console.log(category);
    // console.log(cartData)


    // console.log(order)


    // if(order){
    //     console.log("ankush")
    // }


    const getData = (page) => {
         axios(`http://localhost:8080/kids?_page=${page}&_limit=12`)
            .then((res) => {
                setData(res.data)
                setPageLimit(res.headers["x-total-count"])
            });
    }

    useEffect(() => {
        getData(page);
        // handelCatagory(category);
        sortLow(order);
        // handleProduct(product);
    }, [product,page,order]);//,order,category

    const handleCart = () => {
        toast({
            title: 'Item Added to Cart.',
            description: "You can check it in cart section",
            status: 'success',
            position:"top",
            duration: 3000,
            isClosable: true,
          })
    }


    // sort by price

    function justForSetOrder(value){
        if(value=='asc'){
            console.log(value)

            // let res = await axios(`http://localhost:8080/kids?_page=${page}&_limit=12&_sort=price&_order=${order}`)
            //    setData(res.data)
            //    setPageLimit(res.headers["x-total-count"])
            let temp = [...data];
            temp = temp.sort(function (a, b){
                return +a.price - +b.price
            })
            // setData(temp);
            // console.log(temp)
        //     axios.get(`http://localhost:8080/kids?_page=${page}&_limit=12&_sort=price&_order=${order}`)
        //     .then((res)=>{
        //         setData(res.data);
        //         console.log(res.data)
        //         setPageLimit(res.headers["x-total-count"])
        //         console.log(pagelimit)
        //     })
        //    }else{
        //     let res = await axios(`http://localhost:8080/kids?_page=${page}&_limit=12`)
        //     setData(res.data)
        //     setPageLimit(res.headers["x-total-count"])
    }
    }
    const sortLow =async (order) =>{

        if(order){

            // let res = await axios(`http://localhost:8080/kids?_page=${page}&_limit=12&_sort=price&_order=${order}`)
            //    setData(res.data)
            //    setPageLimit(res.headers["x-total-count"])
            // let temp = [...data];
            // temp = temp.sort(function (a, b){
            //     return +a.price - +b.price
            // })
            // setData(temp);
            // console.log(temp)
            axios.get(`http://localhost:8080/kids?_page=${page}&_limit=12&_sort=price&_order=${order}`)
            .then((res)=>{
                setData(res.data);
                console.log(res.data)
                setPageLimit(res.headers["x-total-count"])
                console.log(pagelimit)
            })
           }else{
            let res = await axios(`http://localhost:8080/kids?_page=${page}&_limit=12`)
            setData(res.data)
            setPageLimit(res.headers["x-total-count"])
    }
          

    }




    // filter by category



    const handelCatagory = (category) =>{
        if(category){
            console.log(category)
            axios.get(`http://localhost:8080/kids?brand=${category}&_page=${page}&_limit=12`)
            .then((res)=>{
               console.log(res);
               setData(res.data);
               setPageLimit(res.headers["x-total-count "])
            })
        }else{
            axios.get(`http://localhost:8080/kids?_page=${page}&_limit=12`)
            .then((res)=>{
            //    console.log(res.data);
            //    console.log(res.data.length)
               setData(res.data);
               setPageLimit(res.headers["x-total-count"])

            })
        }
         

    }


    const handleProduct = (product) =>{
        if(product){
            console.log(product)
            axios.get(`http://localhost:8080/kids?title=${product}&_page=${page}&_limit=6`)
            .then((res)=>{
               console.log(res.data);
               setData(res.data);
               setPageLimit(res.headers["x-total-count "])
            })
        }else{
            axios.get(`http://localhost:8080/kids?_page=${page}&_limit=12`)
            .then((res)=>{
               console.log(res.data);
            //    console.log(res.data.length)
               setData(res.data);
               setPageLimit(res.headers["x-total-count "])

            })
        }
         
    }
    // Accordion


    return <>
        <Navbar />
        <Box bg="white" pb={50}>

            {/* top section */}

            <Box m='auto' mt={120} w="90%" bg="white" >

            <Image src="https://belk.scene7.com/is/image/Belk/wk52_2023_chan_kids_0123_fh_1_cta?$DWP_PHOTO$" m="auto" mb={20}/>
            <Image src="https://belk.scene7.com/is/image/Belk/wk40_2022_chan_kids_1031_fh_3?$DWP_PHOTO$" m="auto"/>


            <Flex justifyContent="center">
            <Image src="https://belk.scene7.com/is/image/Belk/wk48_2022_chan_kids_1226_6c_1?$DWP_PHOTO$"/>
            <Image src="https://belk.scene7.com/is/image/Belk/wk48_2022_chan_kids_1226_6c_2?$DWP_PHOTO$"/>
            <Image src="https://belk.scene7.com/is/image/Belk/wk48_2022_chan_kids_1226_6c_3?$DWP_PHOTO$"/>
            <Image src="https://belk.scene7.com/is/image/Belk/wk48_2022_chan_kids_1226_6c_4?$DWP_PHOTO$"/>
            <Image src="https://belk.scene7.com/is/image/Belk/wk48_2022_chan_kids_1226_6c_4?$DWP_PHOTO$"/>
            <Image src="https://belk.scene7.com/is/image/Belk/wk48_2022_chan_kids_1226_6c_6?$DWP_PHOTO$"/>
            </Flex>
            <FencySlider/>

            <Box mt={20}>
            <Image src="https://belk.scene7.com/is/image/Belk/wk48_2022_chan_kids_1226_fh_3_cta?$DWP_PHOTO$" m="auto" />
            <Image src="https://belk.scene7.com/is/image/Belk/wk48_2022_chan_kids_1226_fh_4_cta?$DWP_PHOTO$" m="auto" />
            <Image src="https://belk.scene7.com/is/image/Belk/wk48_2022_chan_kids_1226_fh_5_cta?$DWP_PHOTO$" m="auto" />
            </Box>

            <Flex w="75%" m="auto" mt={20} justifyContent="center">
             <Image src="https://belk.scene7.com/is/image/Belk/wk48_2022_chan_kids_1226_3c_1?$DWP_PHOTO$" m="auto"/>
             <Image src="https://belk.scene7.com/is/image/Belk/wk48_2022_chan_kids_1226_3c_2?$DWP_PHOTO$" m="auto"/>
             <Image src="https://belk.scene7.com/is/image/Belk/wk01_2023_chan_kids_0130_3c_3?$DWP_PHOTO$" m="auto"/>
            </Flex>


            </Box>

            {/* filter section */}


            <Flex p={5} m="auto" mt={20} mb={50} w="80%" boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" bg="white" h="auto">
                <Box w="20%" h="100%" pr={5}>
                    {/* <Button onClick={()=>setOrder("asc")}>LTH</Button>
                    <Button onClick={()=>setOrder("desc")}>HTL</Button> */}

                    <Select border="1px solid grey"  onChange={(e)=>setOrder(e.target.value)} mb={5} mt={50}>
                        <option value=''>Sort By Price</option>
                        <option value='asc'>Low To High</option>
                        <option value='desc'>High To Low</option>
                    </Select>



                    <Box boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px">
                        <Center fontSize={20} fontWeight="bold" color="#4299E1" py={15}>Filter By Category</Center>
                        <Box textAlign="start" pl={10}>
                            <RadioGroup>
                        <Stack spacing={5} direction='column'>
                            <Radio colorScheme='blue' value='1' onChange={()=>setCatagory("")}>
                                All Items
                                </Radio>
                                <Radio colorScheme='blue' value='Forboy' onChange={(e)=>handelCatagory(e.target.value)}>
                                For Boys
                                </Radio>
                                <Radio colorScheme='blue' value='Forgirl' onChange={(e)=>handelCatagory(e.target.value)}>
                                For Girls
                                </Radio>
                            </Stack>
                            </RadioGroup>
                        </Box>
                    </Box>

                    <Box boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" mt={25}>
                        <Center fontSize={20} fontWeight="bold" color="#4299E1" py={15}>Filter By Product</Center>
                        <RadioGroup textAlign="start" pl={10}>
                            <Stack spacing={5} direction='column'>
                                <Radio colorScheme='blue' value='' onChange={(e)=>handleProduct(e.target.value)} defaultChecked>
                                    All Products
                                </Radio>                                
                                <Radio colorScheme='blue' value='Ethnic_wear' onChange={(e)=>handleProduct(e.target.value)}>
                                Ethnic wear
                                </Radio>
                                <Radio colorScheme='blue' value='Nightdress' onChange={(e)=>handleProduct(e.target.value)}>
                                Nightdress
                                </Radio>
                                <Radio colorScheme='blue' value='Clothing_set' onChange={(e)=>handleProduct(e.target.value)}>
                                Clothing Set
                                </Radio>
                                <Radio colorScheme='blue' value='Top' onChange={(e)=>handleProduct(e.target.value)}>
                                Top
                                </Radio>
                                <Radio colorScheme='blue' value='Shirt' onChange={(e)=>handleProduct(e.target.value)}>
                                Shirt
                                </Radio>
                                <Radio colorScheme='blue' value='Kurta' onChange={(e)=>handleProduct(e.target.value)}>
                                Kurta
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
                                <BsCartPlusFill size={30} color="#E53E3E" cursor="pointer" onClick={()=>setCartData(item)} />
                                <Link to={`/kid/${item.id}`} > <Button color="white" bg="#4299E1" border="1px solid white" borderRadius="5px"
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
                <Button color="white" bg="#4299E1" border="1px solid white" borderRadius="5px" isDisabled={page == Math.ceil(pagelimit/12)} onClick={() => setPage(page + 1)}>Next</Button>
            </Box>

        </Box>

        <Footer/>

    </>
}

export default Kid;