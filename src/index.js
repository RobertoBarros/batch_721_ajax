const results = document.getElementById('results');
const form = document.getElementById('search-movies');
const input = document.getElementById('keyword');


form.addEventListener('submit', (event) => {
  event.preventDefault(); // Evitar de recarregar a página
  const keyword = input.value;

  const url = `http://www.omdbapi.com/?s=${keyword}&apikey=adf1f2d7`;

  results.innerHTML = '';

  fetch(url)
    .then(response => response.json())
    .then((data) => {
      const movies = data.Search;

      movies.forEach((movie) => {
      // console.log(movie.Title);

        const movieTag = `<li>
                            <img src="${movie.Poster}">
                            <h4>${movie.Title} (${movie.Year})</h4>
                          </li>`;

        results.insertAdjacentHTML('beforeend', movieTag);
      });
    });
});

