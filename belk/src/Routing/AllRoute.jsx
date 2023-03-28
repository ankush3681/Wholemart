import { Routes,Route } from "react-router-dom";
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
import SingleUser from "../Pages/MenSingle";
import PrivateRoute from "./PrivateRoute";
import MenSingle from "../Pages/MenSingle";
import WomenSingle from "../Pages/WomenSingle";
import KidSingle from "../Pages/KidSingle";

const AllRoute = () =>{
    return <Routes>
    <Route path="/*" element={<Home/>}></Route>
    <Route element={<Brand/>}></Route>
    <Route element={<Gifts/>}></Route>
    <Route element={<Handbag/>}></Route>
    <Route element={<Jewelry/>}></Route>
    <Route path="/kid" element={
    <PrivateRoute>
    <Kid/>
    </PrivateRoute>
    }></Route>
    <Route path="/men" element={
    <PrivateRoute>
    <Men/>
    </PrivateRoute>
    }></Route>
    <Route element={<Shoes/>}></Route>
    <Route path="/women" element={<Women/>}></Route>
    <Route  element={<BedBath/>}></Route>
    <Route  element={<Clearance/>}></Route>
    <Route path="/cart" element={
    <PrivateRoute>
    <Cart/>
    </PrivateRoute>
    }></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/signin" element={<Signin/>}></Route>
    <Route path="/men/:user_id" element={<MenSingle/>}></Route>
    <Route path="/women/:user_id" element={<WomenSingle/>}></Route>
    <Route path="/kid/:user_id" element={<KidSingle/>}></Route>
    </Routes>
}

export default AllRoute;

