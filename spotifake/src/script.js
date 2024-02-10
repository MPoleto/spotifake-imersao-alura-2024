const greeting = document.getElementById('greetings');
const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');

// SAUDAÇÃO
const hoursNow = new Date().getHours();

function changeGreeting(hours) {
  let message = 'Boas vindas';
  if (hours >= 0 && hours < 5) {
    message = "Zzzzzz";
  }
  else if (hours >= 5 && hours < 13) {
    message = "Bom dia";
  }
  else if (hours >= 13 && hours <= 18) {
    message = "Boa tarde";
  }
  else {
    message = "Boa noite"
  }

  greeting.innerText = message;
}

setInterval(changeGreeting(hoursNow), 300000);


// BUSCA NA API E EXIBIÇÃO DO RESULTADO

function requestApi(searchTerm) {
  const url = `http://localhost:3000/artists?name_like=${searchTerm}`
  fetch(url)
    .then((response) => response.json())
    .then((result) => displayResults(result))
}

function displayResults(result) {
  resultPlaylist.classList.add('hidden');
  const artistName = document.getElementById('artist-name');
  const artistGenre = document.getElementById('artist-genre');
  const artistImage = document.getElementById('artist-img');

  result.forEach(element => {
    artistName.innerText = element.name;
    artistGenre.innerText = element.genre;
    artistImage.src = element.urlImg;
  });

  resultArtist.classList.remove('hidden');
}

document.addEventListener('input', function() {
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm === '') {
    resultPlaylist.classList.remove('hidden');
    resultArtist.classList.add('hidden');
    return;
  }
  
  requestApi(searchTerm);
});
