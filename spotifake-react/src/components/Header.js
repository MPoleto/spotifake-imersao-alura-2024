import { useContext, useState } from 'react';
import '../styles/components/_Header.scss';
import { SearchTermContext } from './SearchTermContext';

export function Header() {
  const { setSearchTerm } = useContext(SearchTermContext);
  const [valueInput, setValueInput] = useState('');

  setSearchTerm(valueInput);
  
  return (
    <nav className="header__navigation">
        <div className="navigation">
          <button className="arrow-left"></button>
          <button className="arrow-right"></button>

          <div className="header__search">
            <input 
              id="search-input" 
              type="text" 
              maxLength="800" 
              placeholder="O que você quer ouvir?" 
              value={valueInput}
              onChange={(e) => setValueInput(e.target.value)}
            />
          </div>
        </div>

        <div className="header__login">
          <button className="subscribe">Inscrever-se</button>
          <button className="login">Entrar</button>
        </div>
      </nav>
  );
}