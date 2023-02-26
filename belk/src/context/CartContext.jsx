import React, { createContext, useState } from 'react'

export const CartContext = createContext();

function CartContextProvider({children}) {
const [cartData,setCartData] = useState([]);


  return (
    <div>
        <CartContext.Provider value={{cartData,setCartData}}>
            {children}
        </CartContext.Provider>
      
    </div>
  )
}

export default CartContextProvider;
