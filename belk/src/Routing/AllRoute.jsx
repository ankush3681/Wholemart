import { Routes,Route } from "react-router-dom";
import Kid from "../Pages/Kid";
import Men from "../Pages/Men";
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
    <Route path="/women" element={<Women/>}></Route>
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

