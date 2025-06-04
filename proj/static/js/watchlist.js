// Initialize the watchlist page
const initializeWatchlist = () => {
    displayWatchlist();
    setupClearWatchlistButton();
};

// Display watchlist
const displayWatchlist = () => {
    const watchlist = getWatchlist();
    const watchlistGrid = document.getElementById('watchlistGrid');
    const emptyState = document.getElementById('emptyWatchlist');

    if (watchlist.length === 0) {
        watchlistGrid.classList.add('hidden');
        emptyState.classList.remove('hidden');
        return;
    }

    watchlistGrid.classList.remove('hidden');
    emptyState.classList.add('hidden');
    watchlistGrid.innerHTML = '';

    watchlist.forEach(movie => {
        watchlistGrid.appendChild(createMovieCard(movie, true));
    });
};

// Setup clear watchlist button
const setupClearWatchlistButton = () => {
    const clearButton = document.getElementById('clearWatchlist');
    clearButton.addEventListener('click', () => {
        if (confirm('Are you sure you want to clear your watchlist?')) {
            clearWatchlist();
            displayWatchlist();
        }
    });
};

// Initialize the page
document.addEventListener('DOMContentLoaded', initializeWatchlist); 