import React, { createContext } from "react";
import all_product from '../Components/Assets/all_product';

// Create a new context
export const ShopContext = createContext(null);

const ShopContextProvider = ({ children }) => {
    const contextValue = { all_product }; // Define context value

    return (
        <ShopContext.Provider value={contextValue}>
            {children} {/* Provide context to the children */}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
