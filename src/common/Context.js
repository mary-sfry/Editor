import { createContext, useState } from 'react';
import { data } from '../components/index';

export const filterContext = createContext()

const Context = ({ children }) => {
    const [filters, setFilters] = useState(data);
    const [filterMethod, setFilterMethod] = useState('');
  return (
    <filterContext.Provider value={{filters, filterMethod, setFilterMethod}}>
        { children }
    </filterContext.Provider>
  )
}

export default Context