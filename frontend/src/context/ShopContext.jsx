import { createContext } from "react";
import { products } from "../assets/assets";

// ✅ Move this inside the component file to avoid ESLint warning
const ShopContext = createContext();

const ShopContextProvider = (props) => {

  const currency = '$';
  const delivery_fee = 10;

   const value = { products, currency, delivery_fee };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export { ShopContext }; // ✅ Export after component definition
export default ShopContextProvider;
