import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMagnifyingGlass, faHeadphones, faPlus, faGlobe } from '@fortawesome/free-solid-svg-icons';
import '../styles/components/_Sidebar.scss'
import logo from '../assets/icons/logo-spotify-green.png';

export function Sidebar() {
  return (
    <aside className="sidebar__container">
      <nav className="sidebar__navigation">
        <div className="logo">
          <a href="#" target="_blank">
            <img src={logo} alt="logo do spotify" title="Spotify-fake" />
          </a>
        </div>
        <ul>
          <li>
            <a href="#">
              <span><FontAwesomeIcon icon={faHouse} /></span>
              <span>Início</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
              <span>Buscar</span>
            </a>
          </li>
        </ul>
      </nav>

      <div className="library">
        <section className="library__content">
          <button className="library__button">
            <span><FontAwesomeIcon icon={faHeadphones} /></span>
            <span>Sua Biblioteca</span>
          </button>
          <span><FontAwesomeIcon icon={faPlus} /></span>
        </section>

        <section className="library__playlist">
          <div className='playlist-card'>
            <p className='card__title'>Crie sua primeira playlist</p>
            <p className='card__subtitle'>É fácil, vamos te ajudar.</p>
            <button className="card__button">Criar playlist</button>
          </div>

          <div className='playlist-card'>
            <p className='card__title'>Que tal seguir um podcast novo?</p>
            <p className='card__subtitle'>Avisaremos você sobre novos episódios.</p>
            <button className="card__button">Explore podcasts</button>
          </div>
        </section>

        <section className="sidebar__links">
          <ul>
            <li><a href="">Legal</a></li>
            <li><a href="">Centro de Privacidade</a></li>
            <li><a href="">Política de Privacidade</a></li>
            <li><a href="">Cookies</a></li>
            <li><a href="">Sobre anúncios</a></li>
            <li><a href="">Acessibilidade</a></li>
            <li><a href="">Notice at Collection</a></li>
            <li><a href="">Definições de cookies</a></li>
            <li><a href="">Cookies</a></li>
          </ul>
        </section>

        <section className="sidebar__languages">
          <button className="languages__button">
            <span><FontAwesomeIcon icon={faGlobe} /></span>
            <span>Português do Brasil</span>
          </button>
        </section>
      </div>
    </aside>
  );
}