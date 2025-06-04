// Quiz questions and options
const quizQuestions = [
    {
        id: 1,
        question: "What's your preferred movie genre?",
        options: ["Action", "Drama", "Sci-Fi", "Crime", "Adventure"],
        weight: 2 // This genre preference has higher weight in recommendations
    },
    {
        id: 2,
        question: "How do you feel about complex plot lines?",
        options: ["Love them", "Prefer simpler stories", "Somewhere in between"],
        mapping: {
            "Love them": ["Inception", "The Dark Knight"],
            "Prefer simpler stories": ["Dune"],
            "Somewhere in between": ["Pulp Fiction", "The Shawshank Redemption"]
        }
    },
    {
        id: 3,
        question: "What's your ideal movie length?",
        options: ["Under 2 hours", "2-3 hours", "Don't mind long movies"],
        weight: 0.5
    },
    {
        id: 4,
        question: "Do you prefer recent movies or classics?",
        options: ["Recent (2010+)", "Classics (pre-2010)", "No preference"],
        weight: 1
    },
    {
        id: 5,
        question: "What's most important to you in a movie?",
        options: ["Action sequences", "Character development", "Visual effects", "Story", "Dialogue"],
        mapping: {
            "Action sequences": ["Action"],
            "Character development": ["Drama"],
            "Visual effects": ["Sci-Fi"],
            "Story": ["Drama", "Crime"],
            "Dialogue": ["Drama", "Crime"]
        }
    }
];

// Store quiz answers
let quizAnswers = {};

// Initialize quiz
const initializeQuiz = () => {
    const quizContainer = document.getElementById('quizContainer');
    if (!quizContainer) return;

    quizContainer.innerHTML = `
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div id="quizContent" class="hidden">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4" id="questionText"></h3>
                <div id="optionsContainer" class="space-y-3"></div>
                <div class="mt-6 flex justify-between">
                    <button id="prevQuestion" class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors">
                        Previous
                    </button>
                    <button id="nextQuestion" class="px-4 py-2 bg-primary text-white rounded hover:bg-blue-700 transition-colors">
                        Next
                    </button>
                </div>
            </div>
            <div id="quizStart" class="text-center">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Get Personalized Movie Recommendations</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-6">Answer 5 quick questions to help us recommend movies you'll love!</p>
                <button id="startQuiz" class="px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Start Quiz
                </button>
            </div>
            <div id="quizResults" class="hidden">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Your Personalized Recommendations</h3>
                <div id="recommendedMoviesContainer" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                </div>
                <button id="retakeQuiz" class="mt-6 px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Retake Quiz
                </button>
            </div>
        </div>
    `;

    setupQuizEventListeners();
};

// Set up quiz event listeners
const setupQuizEventListeners = () => {
    const startButton = document.getElementById('startQuiz');
    const prevButton = document.getElementById('prevQuestion');
    const nextButton = document.getElementById('nextQuestion');
    const retakeButton = document.getElementById('retakeQuiz');

    startButton.addEventListener('click', startQuiz);
    prevButton.addEventListener('click', showPreviousQuestion);
    nextButton.addEventListener('click', handleNextQuestion);
    retakeButton.addEventListener('click', resetQuiz);
};

// Quiz state
let currentQuestion = 0;

// Start the quiz
const startQuiz = () => {
    document.getElementById('quizStart').classList.add('hidden');
    document.getElementById('quizContent').classList.remove('hidden');
    showQuestion(0);
};

// Show a specific question
const showQuestion = (questionIndex) => {
    const question = quizQuestions[questionIndex];
    const questionText = document.getElementById('questionText');
    const optionsContainer = document.getElementById('optionsContainer');
    const prevButton = document.getElementById('prevQuestion');
    const nextButton = document.getElementById('nextQuestion');

    questionText.textContent = question.question;
    optionsContainer.innerHTML = question.options.map(option => `
        <div class="flex items-center">
            <input type="radio" id="${option}" name="q${question.id}" value="${option}"
                class="hidden peer" ${quizAnswers[question.id] === option ? 'checked' : ''}>
            <label for="${option}" 
                class="w-full px-4 py-3 border rounded-lg peer-checked:bg-primary peer-checked:text-white 
                peer-checked:border-primary cursor-pointer transition-colors hover:bg-gray-50 dark:hover:bg-gray-700
                text-gray-700 dark:text-gray-300">
                ${option}
            </label>
        </div>
    `).join('');

    // Add event listeners to options
    optionsContainer.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', () => {
            quizAnswers[question.id] = radio.value;
        });
    });

    // Update button states
    prevButton.style.visibility = questionIndex === 0 ? 'hidden' : 'visible';
    nextButton.textContent = questionIndex === quizQuestions.length - 1 ? 'Show Results' : 'Next';
};

// Show previous question
const showPreviousQuestion = () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion(currentQuestion);
    }
};

// Handle next question or show results
const handleNextQuestion = () => {
    if (!quizAnswers[quizQuestions[currentQuestion].id]) {
        alert('Please select an answer before proceeding.');
        return;
    }

    if (currentQuestion < quizQuestions.length - 1) {
        currentQuestion++;
        showQuestion(currentQuestion);
    } else {
        showResults();
    }
};

// Calculate and show results
const showResults = async () => {
    document.getElementById('quizContent').classList.add('hidden');
    document.getElementById('quizResults').classList.remove('hidden');

    const recommendedMovies = await getRecommendedMoviesFromAnswers(quizAnswers);
    const container = document.getElementById('recommendedMoviesContainer');
    container.innerHTML = '';

    recommendedMovies.forEach(movie => {
        container.appendChild(createMovieCard(movie));
    });
};

// Get recommended movies based on quiz answers
const getRecommendedMoviesFromAnswers = async (answers) => {
    const allMovies = await getAllMovies();
    
    // Calculate scores for each movie
    const movieScores = allMovies.map(movie => {
        let score = 0;
        
        // Genre preference (Question 1)
        if (movie.genre.includes(answers[1])) {
            score += 2;
        }

        // Plot complexity (Question 2)
        const complexityMovies = quizQuestions[1].mapping[answers[2]] || [];
        if (complexityMovies.includes(movie.title)) {
            score += 1;
        }

        // Movie era preference (Question 4)
        if (answers[4] === "Recent (2010+)" && movie.year >= 2010) {
            score += 1;
        } else if (answers[4] === "Classics (pre-2010)" && movie.year < 2010) {
            score += 1;
        }

        // Important aspects (Question 5)
        const preferredGenres = quizQuestions[4].mapping[answers[5]] || [];
        if (movie.genre.some(g => preferredGenres.includes(g))) {
            score += 1.5;
        }

        return { movie, score };
    });

    // Sort by score and return top 4 movies
    return movieScores
        .sort((a, b) => b.score - a.score)
        .slice(0, 4)
        .map(item => item.movie);
};

// Reset quiz
const resetQuiz = () => {
    currentQuestion = 0;
    quizAnswers = {};
    document.getElementById('quizResults').classList.add('hidden');
    document.getElementById('quizStart').classList.remove('hidden');
}; 