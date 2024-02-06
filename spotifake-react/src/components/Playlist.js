import { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import '../styles/components/_Playlist.scss'
import { Greeting } from "./Greeting";
import { CardList } from "./CardList";
import { ResultSearch } from './ResultSearch';
import { SearchTermContext } from './SearchTermContext';

export function Playlist() {
  const { searchTerm } = useContext(SearchTermContext);
  const [resultArtist, setResultArtist] = useState('hidden');
  const [playlist, setPlaylist] = useState('');
  console.log(searchTerm);
  const getSearchTerm = searchTerm.toLowerCase();

  useEffect(() => {

    if(searchTerm !== '') {
      setResultArtist('');
      setPlaylist('hidden');
    }
    else {
      setResultArtist('hidden');
      setPlaylist('');
    }
  });

  return (
    <div className="playlist-container">
      <div id="result-playlists" className={playlist}>
        <Greeting />
        <CardList />
      </div>

      <ResultSearch getSearchTerm={getSearchTerm} resultArtist={resultArtist} />

      <nav className="main__footer">
          <div className="main__footer__links">
            <div className="links-empresa">
              <div className="links-empresa__item">
                <ul>
                  <li>Empresa</li>
                  <li><a href="#">Sobre</a></li>
                  <li><a href="#">Empregos</a></li>
                  <li><a href="#">For the Record</a></li>
                </ul>
              </div>
              <div className="links-empresa__item">
                <ul>
                  <li>Comunidades</li>
                  <li><a href="#">Para Artistas</a></li>
                  <li><a href="#">Desenvolvedores</a></li>
                  <li><a href="#">Publicidade</a></li>
                  <li><a href="#">Investidores</a></li>
                  <li><a href="#">Fornecedores</a></li>
                </ul>
              </div>
              <div className="links-empresa__item">
                <ul>
                  <li>Links úteis</li>
                  <li><a href="#">Suporte</a></li>
                  <li><a href="#">Aplicativo móvel grátis</a></li>
                </ul>
              </div>
            </div>
            <div className="social-midias">
              <a href="#"><span><FontAwesomeIcon icon={faInstagram} /></span></a>
              <a href="#"><span><FontAwesomeIcon icon={faTwitter} /></span></a>
              <a href="#"><span><FontAwesomeIcon icon={faFacebook} /></span></a>
            </div>
          </div>
          <hr />
          <div className="footer__copyright">
            <p>&copy; 2024 - Spotifake - Spotify Clone Imersão Front-end Alura</p>
          </div>
        </nav>
    </div>
  );
}