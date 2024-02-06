import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import '../styles/components/_ResultSearch.scss';


export function ResultSearch({getSearchTerm, resultArtist}) {

  const [artists, setArtists] = useState([]);
  const previousSearchTerm = useRef("");
  console.log(getSearchTerm);

  const url = `http://localhost:3333/artists?name_like=${getSearchTerm}`;

  useEffect(() => {
    previousSearchTerm.current = getSearchTerm;
    fetch(url)
      .then((response) => response.json())
      .then((result) => setArtists(result))
      .catch(console.log);
  }, [getSearchTerm]);

  return (
    <div id="result-artist" className={resultArtist}>
        <div className="grid-container">
          
          {artists.map((artist) => (
            <div key={artist.id} className="artist-card" id="">
                <div className="card-img">
                  <img src={artist.urlImg} id="artist-img" className="artist-img" />
                  <div className="play">
                    <span><FontAwesomeIcon icon={faPlay} /></span>
                  </div>
                </div>

                <div className="card-text">
                  <a title="Foo Fighters" className="vst" href="">
                    <p className="artist-name" id="artist-name">{artist.name}</p>
                    <p className="artist-category" id="artist-genre">{artist.genre}</p>
                  </a>
                </div>
            </div>
          ))}

        </div>
      </div>
  );
}