// Dark mode management
const initDarkMode = () => {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    document.documentElement.classList.toggle('dark', darkMode);
    return darkMode;
};

const toggleDarkMode = () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', isDark);
};

// Watchlist management
const getWatchlist = () => {
    const watchlist = localStorage.getItem('watchlist');
    return watchlist ? JSON.parse(watchlist) : [];
};

const addToWatchlist = (movie) => {
    const watchlist = getWatchlist();
    if (!watchlist.some(m => m.id === movie.id)) {
        watchlist.push(movie);
        localStorage.setItem('watchlist', JSON.stringify(watchlist));
    }
};

const removeFromWatchlist = (movieId) => {
    const watchlist = getWatchlist();
    const updatedWatchlist = watchlist.filter(m => m.id !== movieId);
    localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
};

const clearWatchlist = () => {
    localStorage.removeItem('watchlist');
};

const isInWatchlist = (movieId) => {
    const watchlist = getWatchlist();
    return watchlist.some(m => m.id === movieId);
};

// Movie card rendering
const createMovieCard = (movie, showRemoveButton = false) => {
    const card = document.createElement('div');
    card.className = 'bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-200 hover:scale-105';
    
    const isInList = isInWatchlist(movie.id);
    
    card.innerHTML = `
        <a href="movie.html?id=${movie.id}" class="block">
            <img src="${movie.poster}" alt="${movie.title}" class="w-full h-96 object-cover">
            <div class="p-4">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">${movie.title}</h3>
                <div class="flex items-center justify-between">
                    <span class="text-gray-600 dark:text-gray-300">${movie.year}</span>
                    <span class="bg-primary text-white px-2 py-1 rounded-full text-sm">${movie.rating}</span>
                </div>
                <div class="mt-2 flex flex-wrap gap-2">
                    ${movie.genre.map(g => `
                        <span class="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                            ${g}
                        </span>
                    `).join('')}
                </div>
            </div>
        </a>
        ${showRemoveButton ? `
            <button class="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 remove-movie" data-movie-id="${movie.id}">
                Remove from Watchlist
            </button>
        ` : `
            <button class="w-full watchlist-toggle ${isInList ? 'bg-red-600 hover:bg-red-700' : 'bg-primary hover:bg-blue-700'} text-white font-bold py-2 px-4 transition-colors duration-200" data-movie-id="${movie.id}">
                ${isInList ? 'Remove from Watchlist' : 'Add to Watchlist'}
            </button>
        `}
    `;

    if (showRemoveButton) {
        const removeButton = card.querySelector('.remove-movie');
        removeButton.addEventListener('click', (e) => {
            e.preventDefault();
            removeFromWatchlist(movie.id);
            card.remove();
            
            // Check if watchlist is empty after removal
            const watchlist = getWatchlist();
            const emptyState = document.getElementById('emptyWatchlist');
            const watchlistGrid = document.getElementById('watchlistGrid');
            if (watchlist.length === 0 && emptyState && watchlistGrid) {
                emptyState.classList.remove('hidden');
                watchlistGrid.classList.add('hidden');
            }
        });
    } else {
        const watchlistToggle = card.querySelector('.watchlist-toggle');
        watchlistToggle.addEventListener('click', (e) => {
            e.preventDefault();
            const isInList = isInWatchlist(movie.id);
            if (isInList) {
                removeFromWatchlist(movie.id);
                watchlistToggle.textContent = 'Add to Watchlist';
                watchlistToggle.classList.remove('bg-red-600', 'hover:bg-red-700');
                watchlistToggle.classList.add('bg-primary', 'hover:bg-blue-700');
            } else {
                addToWatchlist(movie);
                watchlistToggle.textContent = 'Remove from Watchlist';
                watchlistToggle.classList.remove('bg-primary', 'hover:bg-blue-700');
                watchlistToggle.classList.add('bg-red-600', 'hover:bg-red-700');
            }
        });
    }

    return card;
};

// URL parameter handling
const getUrlParameter = (param) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
};

// Initialize dark mode toggle for all pages
document.addEventListener('DOMContentLoaded', () => {
    initDarkMode();
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }
}); 