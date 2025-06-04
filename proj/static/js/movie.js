// Initialize the movie details page
const initializeMovieDetails = async () => {
    const movieId = getUrlParameter('id');
    if (!movieId) {
        window.location.href = '/';
        return;
    }

    const movie = await getMovieById(parseInt(movieId));
    if (!movie) {
        window.location.href = '/';
        return;
    }

    displayMovieDetails(movie);
    await displaySimilarMovies(movie.id);
    setupWatchlistButton(movie);
};

// Display movie details
const displayMovieDetails = (movie) => {
    document.title = `${movie.title} - MovieFlix`;

    // Update movie info
    document.getElementById('movieTitle').textContent = movie.title;
    document.getElementById('movieYear').textContent = movie.year;
    document.getElementById('movieGenre').textContent = movie.genre.join(', ');
    document.getElementById('movieRating').textContent = `${movie.rating} ★`;
    document.getElementById('movieDescription').textContent = movie.description;
    document.getElementById('moviePoster').src = movie.poster;

    // Setup trailer
    const trailerContainer = document.getElementById('trailerContainer');
    if (movie.trailerUrl) {
        trailerContainer.innerHTML = `
            <iframe
                class="w-full aspect-video rounded-lg"
                src="${movie.trailerUrl}"
                title="${movie.title} Trailer"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        `;
    } else {
        trailerContainer.innerHTML = `
            <div class="w-full aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <p class="text-gray-500 dark:text-gray-400">Trailer not available</p>
            </div>
        `;
    }
};

// Display similar movies
const displaySimilarMovies = async (movieId) => {
    const similarMoviesContainer = document.getElementById('similarMovies');
    const movies = await getRecommendedMovies(movieId);

    if (movies.length === 0) {
        similarMoviesContainer.innerHTML = `
            <div class="col-span-full text-center py-8 text-gray-500 dark:text-gray-400">
                No similar movies found
            </div>
        `;
        return;
    }

    similarMoviesContainer.innerHTML = '';
    movies.forEach(movie => {
        similarMoviesContainer.appendChild(createMovieCard(movie));
    });
};

// Setup watchlist button
const setupWatchlistButton = (movie) => {
    const watchlistButton = document.getElementById('addToWatchlist');
    const updateWatchlistButton = () => {
        const isMovieInWatchlist = isInWatchlist(movie.id);
        watchlistButton.textContent = isMovieInWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist';
        watchlistButton.classList.toggle('bg-red-600', isMovieInWatchlist);
        watchlistButton.classList.toggle('hover:bg-red-700', isMovieInWatchlist);
        watchlistButton.classList.toggle('bg-primary', !isMovieInWatchlist);
        watchlistButton.classList.toggle('hover:bg-blue-700', !isMovieInWatchlist);
    };

    watchlistButton.addEventListener('click', () => {
        if (isInWatchlist(movie.id)) {
            removeFromWatchlist(movie.id);
        } else {
            addToWatchlist(movie);
        }
        updateWatchlistButton();
    });

    updateWatchlistButton();
};

// Initialize the page
document.addEventListener('DOMContentLoaded', initializeMovieDetails); 