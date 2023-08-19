const movies = [
    {
        title: "The Shawshank Redemption",
        image: "https://www.example.com/shawshank-redemption.jpg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        releaseDate: "1994",
        genre: "Drama",
        cast: ["Tim Robbins", "Morgan Freeman"],
    },
    {
        title: "The Godfather",
        image: "https://www.example.com/godfather.jpg",
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        releaseDate: "1972",
        genre: "Crime",
        cast: ["Marlon Brando", "Al Pacino"],
    },
    // Add more movie objects here
];

const movieList = document.getElementById("movie-list");
const movieDetails = document.getElementById("movie-details");

// Display movie cards
movies.forEach((movie, index) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");
    movieCard.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}">
        <h3>${movie.title}</h3>
        <p>${movie.description}</p>
    `;
    movieCard.addEventListener("click", () => showMovieDetails(index));
    movieList.appendChild(movieCard);
});

// Show movie details
function showMovieDetails(index) {
    const movie = movies[index];
    movieDetails.innerHTML = `
        <h2>${movie.title}</h2>
        <img src="${movie.image}" alt="${movie.title}">
        <p><strong>Release Date:</strong> ${movie.releaseDate}</p>
        <p><strong>Genre:</strong> ${movie.genre}</p>
        <p><strong>Cast:</strong> ${movie.cast.join(", ")}</p>
    `;
    movieDetails.style.display = "block";
}
