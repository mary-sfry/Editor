import { createContext, useState } from "react";
import { data } from "../components/index";

export const filterContext = createContext();

const FilterContext = ({ children }) => {
  const [filterMethod, setFilterMethod] = useState("");
  return (
    <filterContext.Provider value={{ data, filterMethod, setFilterMethod }}>
      {children}
    </filterContext.Provider>
  );
};

export default FilterContext;
