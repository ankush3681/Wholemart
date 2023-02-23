import { Routes,Route } from "react-router-dom";
import Beauty from "../Pages/Beauty";
import BedBath from "../Pages/BedBath";
import Brand from "../Pages/Brands";
import Clearance from "../Pages/Clearance";
import Gifts from "../Pages/Gifts";
import Handbag from "../Pages/Handbag";
import Jewelry from "../Pages/Jewellry";
import Kid from "../Pages/Kid";
import Men from "../Pages/Men";
import Shoes from "../Pages/Shoes";
import Women from "../Pages/Women";
import Home from "../components/Home"
import Cart from "../Pages/Cart";
import Login from "../Pages/Login";
import Signin from "../Pages/Signin";

const AllRoute = () =>{
    return <Routes>
    <Route path="/*" element={<Home/>}></Route>
    <Route path="/beauty" element={<Beauty/>}></Route>
    <Route path="/brand" element={<Brand/>}></Route>
    <Route path="/gifts" element={<Gifts/>}></Route>
    <Route path="/handbag" element={<Handbag/>}></Route>
    <Route path="/jewelry" element={<Jewelry/>}></Route>
    <Route path="/kid" element={<Kid/>}></Route>
    <Route path="/men" element={<Men/>}></Route>
    <Route path="/shoes" element={<Shoes/>}></Route>
    <Route path="/women" element={<Women/>}></Route>
    <Route path="/bed&bath" element={<BedBath/>}></Route>
    <Route path="/clearance" element={<Clearance/>}></Route>
    <Route path="/cart" element={<Cart/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/signin" element={<Signin/>}></Route>
    </Routes>
}

export default AllRoute;

