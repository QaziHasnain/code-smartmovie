// Initialize the homepage
const initializeHomepage = async () => {
    // Initialize quiz
    initializeQuiz();

    // Populate movie sections
    await Promise.all([
        populateTrendingMovies(),
        populateTopRatedMovies(),
        populateRecommendedMovies()
    ]);

    // Initialize search and filters
    initializeSearch();
    initializeFilters();
};

// Populate movie sections
const populateTrendingMovies = async () => {
    const trendingContainer = document.getElementById('trendingMovies');
    const movies = await getTrendingMovies();
    movies.forEach(movie => {
        trendingContainer.appendChild(createMovieCard(movie));
    });
};

const populateTopRatedMovies = async () => {
    const topRatedContainer = document.getElementById('topRatedMovies');
    const movies = await getTopRatedMovies();
    movies.forEach(movie => {
        topRatedContainer.appendChild(createMovieCard(movie));
    });
};

const populateRecommendedMovies = async () => {
    const recommendedContainer = document.getElementById('recommendedMovies');
    const movies = await getAllMovies();
    // For demo purposes, just show random movies as recommended
    const randomMovies = movies.sort(() => 0.5 - Math.random()).slice(0, 4);
    randomMovies.forEach(movie => {
        recommendedContainer.appendChild(createMovieCard(movie));
    });
};

// Search functionality
const initializeSearch = () => {
    const searchInput = document.getElementById('searchInput');
    let debounceTimeout;

    searchInput.addEventListener('input', (e) => {
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(async () => {
            const query = e.target.value.trim();
            if (query) {
                const results = await searchMovies(query);
                updateMovieDisplay(results);
            } else {
                // Reset to original view
                resetMovieDisplay();
            }
        }, 300);
    });
};

// Filter functionality
const initializeFilters = async () => {
    const movies = await getAllMovies();
    
    // Populate filter options
    const genres = [...new Set(movies.flatMap(m => m.genre))];
    const years = [...new Set(movies.map(m => m.year))].sort((a, b) => b - a);
    const ratings = [8, 7, 6, 5, 4];

    const genreFilter = document.getElementById('genreFilter');
    const yearFilter = document.getElementById('yearFilter');
    const ratingFilter = document.getElementById('ratingFilter');

    // Populate genre options
    genres.forEach(genre => {
        const option = document.createElement('option');
        option.value = genre;
        option.textContent = genre;
        genreFilter.appendChild(option);
    });

    // Populate year options
    years.forEach(year => {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearFilter.appendChild(option);
    });

    // Populate rating options
    ratings.forEach(rating => {
        const option = document.createElement('option');
        option.value = rating;
        option.textContent = `${rating}+ Stars`;
        ratingFilter.appendChild(option);
    });

    // Add event listeners
    [genreFilter, yearFilter, ratingFilter].forEach(filter => {
        filter.addEventListener('change', applyFilters);
    });
};

// Apply filters
const applyFilters = async () => {
    const genre = document.getElementById('genreFilter').value;
    const year = document.getElementById('yearFilter').value;
    const rating = document.getElementById('ratingFilter').value;

    const filters = {
        genre: genre || null,
        year: year ? parseInt(year) : null,
        rating: rating ? parseFloat(rating) : null
    };

    const results = await filterMovies(filters);
    updateMovieDisplay(results);
};

// Update movie display
const updateMovieDisplay = (movies) => {
    const sections = ['trending', 'topRated', 'recommended'];
    
    sections.forEach(section => {
        const container = document.getElementById(`${section}Movies`);
        const sectionTitle = container.previousElementSibling;
        
        if (movies.length === 0) {
            container.innerHTML = `
                <div class="col-span-full text-center py-8 text-gray-500 dark:text-gray-400">
                    No movies found matching your criteria
                </div>
            `;
            sectionTitle.style.display = 'none';
        } else {
            container.innerHTML = '';
            movies.forEach(movie => {
                container.appendChild(createMovieCard(movie));
            });
            sectionTitle.style.display = 'block';
        }
    });
};

// Reset movie display to original state
const resetMovieDisplay = async () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.style.display = 'block');
    
    await Promise.all([
        populateTrendingMovies(),
        populateTopRatedMovies(),
        populateRecommendedMovies()
    ]);
};

// Initialize the page
document.addEventListener('DOMContentLoaded', initializeHomepage); 