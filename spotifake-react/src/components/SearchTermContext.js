import { createContext, useState } from 'react';
import '../styles/components/_Main.scss';

export const SearchTermContext = createContext();

export const SearchTermContextProvider = ({children}) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <SearchTermContext.Provider value={{searchTerm, setSearchTerm}}>
      {children}
    </SearchTermContext.Provider>
  );
};
