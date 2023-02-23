import { Box, Flex,Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";




const Men = () =>{

    const [data,setData] = useState([]);
    const [page,setPage] = useState(1);

    const getData = (page) =>{
        return axios(`https://6370948408218c267e01d3bd.mockapi.io/mens`)
        .then((res)=>{
            setData(res.data)
        });
    }

    useEffect(()=>{
        getData(page);
    },[page])

  

    return <>
    <Navbar/>
    <Box bg="white" pb={50}>

   {/* top section */}

    <Box m='auto' mt={120} w="90%" bg="white" >
    
    <Image src="https://belk.scene7.com/is/image/Belk/wk02_2023_chan_men_0206_fh_1?$DWP_PHOTO$" w="100%"mt={30} mb={60}/>
    <Flex justifyContent="space-evenly" mb={60}>
    <Image src="https://belk.scene7.com/is/image/Belk/wk03_2023_chan_men_0213_2c_1?$DWP_PHOTO$"/>
    <Image src="https://belk.scene7.com/is/image/Belk/wk01_2023_chan_men_0130_2c_2?$DWP_PHOTO$"/>
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

    {/* product and filter section */}


    <Flex p={5} m="auto" mt={120}  mb={50} w="80%" border="1px solid black" h="auto">
    <Box w="20%" h="100%" border="1px solid red">
    
    </Box>
    <Box w="90%" display="grid" gridTemplateColumns="repeat(3,1fr)" gap={10}>
    {data?.map((item)=>(
        <div key={item.id} style={{
            textAlign:"center",
            boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px",
            padding:"10px"
        }}>
        <h2>{item.title}</h2>
        <img src={item.image} width="70%"/>
        <h4>{item.price}</h4>
        <h4>{item.brand}</h4>
        <button
        style={{
            backgroundColor:"#4299E1",
            padding:"3% 20% 3% 20%",
            border:"1px solid white",
            borderRadius:"5px",
            fontSize:"15px",
            color:"white",
            cursor:"pointer"
        }}
        >Add To Cart</button>
        </div>
    ))}

    </Box>
    </Flex>

    {/* pagination button */}
    <Box>
    <button onClick={()=>setPage(page-1)}>Previous</button>
    <button>{page}</button>
    <button onClick={()=>setPage(page+1)}>Next</button>
    </Box>

    </Box>
   
    </>
}

export default Men;