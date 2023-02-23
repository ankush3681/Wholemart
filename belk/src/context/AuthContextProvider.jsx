import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({children}) =>{

   const  [ isAuth,setIsAuth ] = useState(false);
   const [userName,setUserName] = useState("");

   const login = (name ) =>{
    setIsAuth(true);
    setUserName(name)
   }
   const nameOfUser = (name) =>{
    setUserName(name);
   }

   const logout = () =>{
    setIsAuth(false);
    setUserName("Login")

   }

    return <AuthContext.Provider value={{userName,nameOfUser,isAuth,login,logout}}>
        {children}
    </AuthContext.Provider>
    
    
}

export default AuthContextProvider;