// Mock movie data
const movies = [
    {
        "id": 1,
        "title": "The Prestige 1",
        "description": "A sample description for movie 1.",
        "year": 2020,
        "rating": 8.3,
        "genre": [
            "Crime",
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        "trailerUrl": "https://www.youtube.com/embed/8g18jFHCLXk",
        "trending": false,
        "topRated": false
    },
    {
        "id": 2,
        "title": "Joker 2",
        "description": "A sample description for movie 2.",
        "year": 1994,
        "rating": 7.7,
        "genre": [
            "Action",
            "Adventure"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
        "trailerUrl": "https://www.youtube.com/embed/zSWdZVtXT7E",
        "trending": true,
        "topRated": false
    },
    {
        "id": 3,
        "title": "The Social Network 3",
        "description": "A sample description for movie 3.",
        "year": 2009,
        "rating": 9.3,
        "genre": [
            "Biography",
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
        "trailerUrl": "https://www.youtube.com/embed/zSWdZVtXT7E",
        "trending": false,
        "topRated": true
    },
    {
        "id": 4,
        "title": "Titanic 4",
        "description": "A sample description for movie 4.",
        "year": 1980,
        "rating": 7.4,
        "genre": [
            "Fantasy",
            "Family"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        "trailerUrl": "https://www.youtube.com/embed/zAGVQLHvwOY",
        "trending": false,
        "topRated": false
    },
    {
        "id": 5,
        "title": "Fight Club 5",
        "description": "A sample description for movie 5.",
        "year": 1997,
        "rating": 6.9,
        "genre": [
            "Fantasy",
            "Family"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        "trailerUrl": "https://www.youtube.com/embed/s7EdQ4FqbhY",
        "trending": true,
        "topRated": false
    },
    {
        "id": 6,
        "title": "The Matrix 6",
        "description": "A sample description for movie 6.",
        "year": 2021,
        "rating": 9.2,
        "genre": [
            "Mystery",
            "Crime"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/eEslKSwcqmiNS6va24Pbxf2UKmJ.jpg",
        "trailerUrl": "https://www.youtube.com/embed/8g18jFHCLXk",
        "trending": true,
        "topRated": true
    },
    {
        "id": 7,
        "title": "The Godfather 7",
        "description": "A sample description for movie 7.",
        "year": 2003,
        "rating": 7.3,
        "genre": [
            "Fantasy",
            "Family"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg",
        "trailerUrl": "https://www.youtube.com/embed/6hB3S9bIaco",
        "trending": true,
        "topRated": false
    },
    {
        "id": 8,
        "title": "Dune 8",
        "description": "A sample description for movie 8.",
        "year": 1987,
        "rating": 7.8,
        "genre": [
            "Action",
            "Adventure"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/eEslKSwcqmiNS6va24Pbxf2UKmJ.jpg",
        "trailerUrl": "https://www.youtube.com/embed/zAGVQLHvwOY",
        "trending": false,
        "topRated": false
    },
    {
        "id": 9,
        "title": "The Lion King 9",
        "description": "A sample description for movie 9.",
        "year": 1986,
        "rating": 7.4,
        "genre": [
            "Biography",
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        "trailerUrl": "https://www.youtube.com/embed/sY1S34973zA",
        "trending": true,
        "topRated": false
    },
    {
        "id": 10,
        "title": "Whiplash 10",
        "description": "A sample description for movie 10.",
        "year": 2015,
        "rating": 7.0,
        "genre": [
            "Comedy",
            "Romance"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        "trailerUrl": "https://www.youtube.com/embed/YoHD9XEInc0",
        "trending": false,
        "topRated": false
    },
    {
        "id": 11,
        "title": "Forrest Gump 11",
        "description": "A sample description for movie 11.",
        "year": 2000,
        "rating": 9.2,
        "genre": [
            "Mystery",
            "Crime"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
        "trailerUrl": "https://www.youtube.com/embed/zAGVQLHvwOY",
        "trending": true,
        "topRated": true
    },
    {
        "id": 12,
        "title": "The Shawshank Redemption 12",
        "description": "A sample description for movie 12.",
        "year": 2004,
        "rating": 8.8,
        "genre": [
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        "trailerUrl": "https://www.youtube.com/embed/s7EdQ4FqbhY",
        "trending": true,
        "topRated": true
    },
    {
        "id": 13,
        "title": "The Godfather 13",
        "description": "A sample description for movie 13.",
        "year": 1993,
        "rating": 7.0,
        "genre": [
            "Biography",
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        "trailerUrl": "https://www.youtube.com/embed/8g18jFHCLXk",
        "trending": false,
        "topRated": false
    },
    {
        "id": 14,
        "title": "The Green Mile 14",
        "description": "A sample description for movie 14.",
        "year": 1981,
        "rating": 7.1,
        "genre": [
            "Mystery",
            "Crime"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/eEslKSwcqmiNS6va24Pbxf2UKmJ.jpg",
        "trailerUrl": "https://www.youtube.com/embed/8g18jFHCLXk",
        "trending": true,
        "topRated": false
    },
    {
        "id": 15,
        "title": "Avengers: Endgame 15",
        "description": "A sample description for movie 15.",
        "year": 1988,
        "rating": 8.0,
        "genre": [
            "Horror",
            "Thriller"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        "trailerUrl": "https://www.youtube.com/embed/8g18jFHCLXk",
        "trending": false,
        "topRated": false
    },
    {
        "id": 16,
        "title": "Interstellar 16",
        "description": "A sample description for movie 16.",
        "year": 1996,
        "rating": 8.5,
        "genre": [
            "Comedy",
            "Romance"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg",
        "trailerUrl": "https://www.youtube.com/embed/vKQi3bBA1y8",
        "trending": false,
        "topRated": false
    },
    {
        "id": 17,
        "title": "Inception 17",
        "description": "A sample description for movie 17.",
        "year": 2017,
        "rating": 9.4,
        "genre": [
            "Horror",
            "Thriller"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg",
        "trailerUrl": "https://www.youtube.com/embed/zAGVQLHvwOY",
        "trending": true,
        "topRated": true
    },
    {
        "id": 18,
        "title": "The Matrix 18",
        "description": "A sample description for movie 18.",
        "year": 2020,
        "rating": 7.1,
        "genre": [
            "Action",
            "Adventure"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        "trailerUrl": "https://www.youtube.com/embed/zSWdZVtXT7E",
        "trending": true,
        "topRated": false
    },
    {
        "id": 19,
        "title": "Titanic 19",
        "description": "A sample description for movie 19.",
        "year": 2007,
        "rating": 8.6,
        "genre": [
            "Mystery",
            "Crime"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        "trailerUrl": "https://www.youtube.com/embed/s7EdQ4FqbhY",
        "trending": false,
        "topRated": true
    },
    {
        "id": 20,
        "title": "The Godfather 20",
        "description": "A sample description for movie 20.",
        "year": 2008,
        "rating": 8.7,
        "genre": [
            "Biography",
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        "trailerUrl": "https://www.youtube.com/embed/YoHD9XEInc0",
        "trending": true,
        "topRated": true
    },
    {
        "id": 21,
        "title": "Inception 21",
        "description": "A sample description for movie 21.",
        "year": 1989,
        "rating": 9.3,
        "genre": [
            "Horror",
            "Thriller"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        "trailerUrl": "https://www.youtube.com/embed/zAGVQLHvwOY",
        "trending": false,
        "topRated": true
    },
    {
        "id": 22,
        "title": "Dune 22",
        "description": "A sample description for movie 22.",
        "year": 2000,
        "rating": 7.5,
        "genre": [
            "Biography",
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
        "trailerUrl": "https://www.youtube.com/embed/8g18jFHCLXk",
        "trending": true,
        "topRated": false
    },
    {
        "id": 23,
        "title": "Gladiator 23",
        "description": "A sample description for movie 23.",
        "year": 1994,
        "rating": 8.2,
        "genre": [
            "Crime",
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
        "trailerUrl": "https://www.youtube.com/embed/zSWdZVtXT7E",
        "trending": false,
        "topRated": false
    },
    {
        "id": 24,
        "title": "The Social Network 24",
        "description": "A sample description for movie 24.",
        "year": 2001,
        "rating": 7.9,
        "genre": [
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        "trailerUrl": "https://www.youtube.com/embed/zAGVQLHvwOY",
        "trending": true,
        "topRated": false
    },
    {
        "id": 25,
        "title": "The Matrix 25",
        "description": "A sample description for movie 25.",
        "year": 1989,
        "rating": 6.9,
        "genre": [
            "Adventure",
            "Sci-Fi"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
        "trailerUrl": "https://www.youtube.com/embed/8g18jFHCLXk",
        "trending": true,
        "topRated": false
    },
    {
        "id": 26,
        "title": "Whiplash 26",
        "description": "A sample description for movie 26.",
        "year": 2011,
        "rating": 7.3,
        "genre": [
            "Horror",
            "Thriller"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
        "trailerUrl": "https://www.youtube.com/embed/sY1S34973zA",
        "trending": true,
        "topRated": false
    },
    {
        "id": 27,
        "title": "The Departed 27",
        "description": "A sample description for movie 27.",
        "year": 1986,
        "rating": 9.4,
        "genre": [
            "Action",
            "Sci-Fi",
            "Thriller"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        "trailerUrl": "https://www.youtube.com/embed/sY1S34973zA",
        "trending": false,
        "topRated": true
    },
    {
        "id": 28,
        "title": "Dune 28",
        "description": "A sample description for movie 28.",
        "year": 2006,
        "rating": 7.3,
        "genre": [
            "Crime",
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        "trailerUrl": "https://www.youtube.com/embed/EXeTwQWrcwY",
        "trending": false,
        "topRated": false
    },
    {
        "id": 29,
        "title": "The Godfather 29",
        "description": "A sample description for movie 29.",
        "year": 2018,
        "rating": 6.0,
        "genre": [
            "Mystery",
            "Crime"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
        "trailerUrl": "https://www.youtube.com/embed/EXeTwQWrcwY",
        "trending": false,
        "topRated": false
    },
    {
        "id": 30,
        "title": "The Godfather 30",
        "description": "A sample description for movie 30.",
        "year": 2017,
        "rating": 6.5,
        "genre": [
            "Fantasy",
            "Family"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        "trailerUrl": "https://www.youtube.com/embed/zSWdZVtXT7E",
        "trending": false,
        "topRated": false
    },
    {
        "id": 31,
        "title": "Fight Club 31",
        "description": "A sample description for movie 31.",
        "year": 1987,
        "rating": 6.1,
        "genre": [
            "Crime",
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
        "trailerUrl": "https://www.youtube.com/embed/6hB3S9bIaco",
        "trending": false,
        "topRated": false
    },
    {
        "id": 32,
        "title": "Inception 32",
        "description": "A sample description for movie 32.",
        "year": 1987,
        "rating": 7.1,
        "genre": [
            "Mystery",
            "Crime"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
        "trailerUrl": "https://www.youtube.com/embed/EXeTwQWrcwY",
        "trending": false,
        "topRated": false
    },
    {
        "id": 33,
        "title": "The Social Network 33",
        "description": "A sample description for movie 33.",
        "year": 2019,
        "rating": 8.4,
        "genre": [
            "Adventure",
            "Sci-Fi"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg",
        "trailerUrl": "https://www.youtube.com/embed/sY1S34973zA",
        "trending": true,
        "topRated": false
    },
    {
        "id": 34,
        "title": "Joker 34",
        "description": "A sample description for movie 34.",
        "year": 2011,
        "rating": 9.4,
        "genre": [
            "Biography",
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
        "trailerUrl": "https://www.youtube.com/embed/8g18jFHCLXk",
        "trending": false,
        "topRated": true
    },
    {
        "id": 35,
        "title": "Joker 35",
        "description": "A sample description for movie 35.",
        "year": 2023,
        "rating": 9.0,
        "genre": [
            "Action",
            "Adventure"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
        "trailerUrl": "https://www.youtube.com/embed/sY1S34973zA",
        "trending": true,
        "topRated": true
    },
    {
        "id": 36,
        "title": "The Social Network 36",
        "description": "A sample description for movie 36.",
        "year": 1995,
        "rating": 7.8,
        "genre": [
            "Fantasy",
            "Family"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
        "trailerUrl": "https://www.youtube.com/embed/6hB3S9bIaco",
        "trending": true,
        "topRated": false
    },
    {
        "id": 37,
        "title": "The Prestige 37",
        "description": "A sample description for movie 37.",
        "year": 1994,
        "rating": 8.5,
        "genre": [
            "Horror",
            "Thriller"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
        "trailerUrl": "https://www.youtube.com/embed/zSWdZVtXT7E",
        "trending": true,
        "topRated": false
    },
    {
        "id": 38,
        "title": "The Prestige 38",
        "description": "A sample description for movie 38.",
        "year": 1994,
        "rating": 8.1,
        "genre": [
            "Fantasy",
            "Family"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        "trailerUrl": "https://www.youtube.com/embed/s7EdQ4FqbhY",
        "trending": false,
        "topRated": false
    },
    {
        "id": 39,
        "title": "The Matrix 39",
        "description": "A sample description for movie 39.",
        "year": 2009,
        "rating": 6.7,
        "genre": [
            "Fantasy",
            "Family"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        "trailerUrl": "https://www.youtube.com/embed/8g18jFHCLXk",
        "trending": true,
        "topRated": false
    },
    {
        "id": 40,
        "title": "The Godfather 40",
        "description": "A sample description for movie 40.",
        "year": 2014,
        "rating": 6.7,
        "genre": [
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        "trailerUrl": "https://www.youtube.com/embed/s7EdQ4FqbhY",
        "trending": false,
        "topRated": false
    },
    {
        "id": 41,
        "title": "Fight Club 41",
        "description": "A sample description for movie 41.",
        "year": 1999,
        "rating": 6.6,
        "genre": [
            "Horror",
            "Thriller"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
        "trailerUrl": "https://www.youtube.com/embed/zAGVQLHvwOY",
        "trending": false,
        "topRated": false
    },
    {
        "id": 42,
        "title": "The Prestige 42",
        "description": "A sample description for movie 42.",
        "year": 2013,
        "rating": 7.1,
        "genre": [
            "Action",
            "Adventure"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        "trailerUrl": "https://www.youtube.com/embed/s7EdQ4FqbhY",
        "trending": false,
        "topRated": false
    },
    {
        "id": 43,
        "title": "The Social Network 43",
        "description": "A sample description for movie 43.",
        "year": 2006,
        "rating": 7.5,
        "genre": [
            "Comedy",
            "Romance"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        "trailerUrl": "https://www.youtube.com/embed/sY1S34973zA",
        "trending": false,
        "topRated": false
    },
    {
        "id": 44,
        "title": "The Lion King 44",
        "description": "A sample description for movie 44.",
        "year": 1990,
        "rating": 9.4,
        "genre": [
            "Biography",
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/eEslKSwcqmiNS6va24Pbxf2UKmJ.jpg",
        "trailerUrl": "https://www.youtube.com/embed/zSWdZVtXT7E",
        "trending": false,
        "topRated": true
    },
    {
        "id": 45,
        "title": "Joker 45",
        "description": "A sample description for movie 45.",
        "year": 2007,
        "rating": 9.4,
        "genre": [
            "Action",
            "Sci-Fi",
            "Thriller"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        "trailerUrl": "https://www.youtube.com/embed/sY1S34973zA",
        "trending": false,
        "topRated": true
    },
    {
        "id": 46,
        "title": "Dune 46",
        "description": "A sample description for movie 46.",
        "year": 1992,
        "rating": 8.2,
        "genre": [
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/eEslKSwcqmiNS6va24Pbxf2UKmJ.jpg",
        "trailerUrl": "https://www.youtube.com/embed/zAGVQLHvwOY",
        "trending": true,
        "topRated": false
    },
    {
        "id": 47,
        "title": "The Prestige 47",
        "description": "A sample description for movie 47.",
        "year": 1992,
        "rating": 9.4,
        "genre": [
            "Biography",
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
        "trailerUrl": "https://www.youtube.com/embed/s7EdQ4FqbhY",
        "trending": false,
        "topRated": true
    },
    {
        "id": 48,
        "title": "The Shawshank Redemption 48",
        "description": "A sample description for movie 48.",
        "year": 1980,
        "rating": 8.3,
        "genre": [
            "Biography",
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
        "trailerUrl": "https://www.youtube.com/embed/sY1S34973zA",
        "trending": true,
        "topRated": false
    },
    {
        "id": 49,
        "title": "Interstellar 49",
        "description": "A sample description for movie 49.",
        "year": 1984,
        "rating": 9.0,
        "genre": [
            "Adventure",
            "Sci-Fi"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        "trailerUrl": "https://www.youtube.com/embed/zSWdZVtXT7E",
        "trending": false,
        "topRated": true
    },
    {
        "id": 50,
        "title": "Dune 50",
        "description": "A sample description for movie 50.",
        "year": 2007,
        "rating": 6.7,
        "genre": [
            "Adventure",
            "Sci-Fi"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
        "trailerUrl": "https://www.youtube.com/embed/EXeTwQWrcwY",
        "trending": false,
        "topRated": false
    },
    {
        "id": 51,
        "title": "The Lion King 51",
        "description": "A sample description for movie 51.",
        "year": 1997,
        "rating": 9.3,
        "genre": [
            "Crime",
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/eEslKSwcqmiNS6va24Pbxf2UKmJ.jpg",
        "trailerUrl": "https://www.youtube.com/embed/zAGVQLHvwOY",
        "trending": true,
        "topRated": true
    },
    {
        "id": 52,
        "title": "The Matrix 52",
        "description": "A sample description for movie 52.",
        "year": 1989,
        "rating": 6.6,
        "genre": [
            "Action",
            "Adventure"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        "trailerUrl": "https://www.youtube.com/embed/6hB3S9bIaco",
        "trending": true,
        "topRated": false
    },
    {
        "id": 53,
        "title": "Avengers: Endgame 53",
        "description": "A sample description for movie 53.",
        "year": 1992,
        "rating": 6.3,
        "genre": [
            "Adventure",
            "Sci-Fi"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        "trailerUrl": "https://www.youtube.com/embed/s7EdQ4FqbhY",
        "trending": true,
        "topRated": false
    },
    {
        "id": 54,
        "title": "The Godfather 54",
        "description": "A sample description for movie 54.",
        "year": 1997,
        "rating": 9.4,
        "genre": [
            "Action",
            "Sci-Fi",
            "Thriller"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/eEslKSwcqmiNS6va24Pbxf2UKmJ.jpg",
        "trailerUrl": "https://www.youtube.com/embed/8g18jFHCLXk",
        "trending": true,
        "topRated": true
    },
    {
        "id": 55,
        "title": "Inception 55",
        "description": "A sample description for movie 55.",
        "year": 1986,
        "rating": 8.2,
        "genre": [
            "Action",
            "Adventure"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        "trailerUrl": "https://www.youtube.com/embed/8g18jFHCLXk",
        "trending": true,
        "topRated": false
    },
    {
        "id": 56,
        "title": "The Lion King 56",
        "description": "A sample description for movie 56.",
        "year": 1988,
        "rating": 8.6,
        "genre": [
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
        "trailerUrl": "https://www.youtube.com/embed/8g18jFHCLXk",
        "trending": false,
        "topRated": true
    },
    {
        "id": 57,
        "title": "Inception 57",
        "description": "A sample description for movie 57.",
        "year": 2009,
        "rating": 8.2,
        "genre": [
            "Crime",
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
        "trailerUrl": "https://www.youtube.com/embed/8g18jFHCLXk",
        "trending": true,
        "topRated": false
    },
    {
        "id": 58,
        "title": "The Departed 58",
        "description": "A sample description for movie 58.",
        "year": 1990,
        "rating": 7.6,
        "genre": [
            "Action",
            "Adventure"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg",
        "trailerUrl": "https://www.youtube.com/embed/6hB3S9bIaco",
        "trending": false,
        "topRated": false
    },
    {
        "id": 59,
        "title": "Dune 59",
        "description": "A sample description for movie 59.",
        "year": 1991,
        "rating": 8.9,
        "genre": [
            "Action",
            "Adventure"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        "trailerUrl": "https://www.youtube.com/embed/s7EdQ4FqbhY",
        "trending": true,
        "topRated": true
    },
    {
        "id": 60,
        "title": "Dune 60",
        "description": "A sample description for movie 60.",
        "year": 1987,
        "rating": 9.2,
        "genre": [
            "Adventure",
            "Sci-Fi"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        "trailerUrl": "https://www.youtube.com/embed/sY1S34973zA",
        "trending": false,
        "topRated": true
    },
    {
        "id": 61,
        "title": "Inception 61",
        "description": "A sample description for movie 61.",
        "year": 2016,
        "rating": 6.6,
        "genre": [
            "Horror",
            "Thriller"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
        "trailerUrl": "https://www.youtube.com/embed/EXeTwQWrcwY",
        "trending": false,
        "topRated": false
    },
    {
        "id": 62,
        "title": "The Matrix 62",
        "description": "A sample description for movie 62.",
        "year": 2015,
        "rating": 6.5,
        "genre": [
            "Action",
            "Sci-Fi",
            "Thriller"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
        "trailerUrl": "https://www.youtube.com/embed/sY1S34973zA",
        "trending": false,
        "topRated": false
    },
    {
        "id": 63,
        "title": "Titanic 63",
        "description": "A sample description for movie 63.",
        "year": 2017,
        "rating": 7.3,
        "genre": [
            "Fantasy",
            "Family"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg",
        "trailerUrl": "https://www.youtube.com/embed/8g18jFHCLXk",
        "trending": false,
        "topRated": false
    },
    {
        "id": 64,
        "title": "Avengers: Endgame 64",
        "description": "A sample description for movie 64.",
        "year": 1983,
        "rating": 9.1,
        "genre": [
            "Action",
            "Adventure"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
        "trailerUrl": "https://www.youtube.com/embed/sY1S34973zA",
        "trending": false,
        "topRated": true
    },
    {
        "id": 65,
        "title": "Whiplash 65",
        "description": "A sample description for movie 65.",
        "year": 2013,
        "rating": 9.0,
        "genre": [
            "Biography",
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
        "trailerUrl": "https://www.youtube.com/embed/zSWdZVtXT7E",
        "trending": true,
        "topRated": true
    },
    {
        "id": 66,
        "title": "The Social Network 66",
        "description": "A sample description for movie 66.",
        "year": 1993,
        "rating": 7.7,
        "genre": [
            "Adventure",
            "Sci-Fi"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg",
        "trailerUrl": "https://www.youtube.com/embed/sY1S34973zA",
        "trending": false,
        "topRated": false
    },
    {
        "id": 67,
        "title": "Fight Club 67",
        "description": "A sample description for movie 67.",
        "year": 2010,
        "rating": 6.7,
        "genre": [
            "Horror",
            "Thriller"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
        "trailerUrl": "https://www.youtube.com/embed/8g18jFHCLXk",
        "trending": true,
        "topRated": false
    },
    {
        "id": 68,
        "title": "Whiplash 68",
        "description": "A sample description for movie 68.",
        "year": 1998,
        "rating": 6.1,
        "genre": [
            "Horror",
            "Thriller"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
        "trailerUrl": "https://www.youtube.com/embed/s7EdQ4FqbhY",
        "trending": true,
        "topRated": false
    },
    {
        "id": 69,
        "title": "The Dark Knight 69",
        "description": "A sample description for movie 69.",
        "year": 2010,
        "rating": 8.4,
        "genre": [
            "Adventure",
            "Sci-Fi"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
        "trailerUrl": "https://www.youtube.com/embed/EXeTwQWrcwY",
        "trending": false,
        "topRated": false
    },
    {
        "id": 70,
        "title": "The Shawshank Redemption 70",
        "description": "A sample description for movie 70.",
        "year": 2019,
        "rating": 8.1,
        "genre": [
            "Crime",
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        "trailerUrl": "https://www.youtube.com/embed/EXeTwQWrcwY",
        "trending": true,
        "topRated": false
    },
    {
        "id": 71,
        "title": "The Departed 71",
        "description": "A sample description for movie 71.",
        "year": 2011,
        "rating": 6.3,
        "genre": [
            "Action",
            "Sci-Fi",
            "Thriller"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg",
        "trailerUrl": "https://www.youtube.com/embed/YoHD9XEInc0",
        "trending": false,
        "topRated": false
    },
    {
        "id": 72,
        "title": "Gladiator 72",
        "description": "A sample description for movie 72.",
        "year": 1981,
        "rating": 8.2,
        "genre": [
            "Action",
            "Sci-Fi",
            "Thriller"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
        "trailerUrl": "https://www.youtube.com/embed/8g18jFHCLXk",
        "trending": false,
        "topRated": false
    },
    {
        "id": 73,
        "title": "Inception 73",
        "description": "A sample description for movie 73.",
        "year": 2009,
        "rating": 9.4,
        "genre": [
            "Crime",
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
        "trailerUrl": "https://www.youtube.com/embed/6hB3S9bIaco",
        "trending": true,
        "topRated": true
    },
    {
        "id": 74,
        "title": "Titanic 74",
        "description": "A sample description for movie 74.",
        "year": 1995,
        "rating": 8.7,
        "genre": [
            "Horror",
            "Thriller"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
        "trailerUrl": "https://www.youtube.com/embed/EXeTwQWrcwY",
        "trending": true,
        "topRated": true
    },
    {
        "id": 75,
        "title": "The Prestige 75",
        "description": "A sample description for movie 75.",
        "year": 1987,
        "rating": 7.0,
        "genre": [
            "Biography",
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
        "trailerUrl": "https://www.youtube.com/embed/8g18jFHCLXk",
        "trending": true,
        "topRated": false
    },
    {
        "id": 76,
        "title": "The Prestige 76",
        "description": "A sample description for movie 76.",
        "year": 1984,
        "rating": 9.2,
        "genre": [
            "Crime",
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
        "trailerUrl": "https://www.youtube.com/embed/YoHD9XEInc0",
        "trending": true,
        "topRated": true
    },
    {
        "id": 77,
        "title": "Forrest Gump 77",
        "description": "A sample description for movie 77.",
        "year": 1995,
        "rating": 8.2,
        "genre": [
            "Biography",
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
        "trailerUrl": "https://www.youtube.com/embed/TcMBFSGVi1c",
        "trending": true,
        "topRated": false
    },
    {
        "id": 78,
        "title": "The Departed 78",
        "description": "A sample description for movie 78.",
        "year": 2024,
        "rating": 9.1,
        "genre": [
            "Comedy",
            "Romance"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg",
        "trailerUrl": "https://www.youtube.com/embed/vKQi3bBA1y8",
        "trending": true,
        "topRated": true
    },
    {
        "id": 79,
        "title": "Titanic 79",
        "description": "A sample description for movie 79.",
        "year": 2002,
        "rating": 7.2,
        "genre": [
            "Biography",
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        "trailerUrl": "https://www.youtube.com/embed/8g18jFHCLXk",
        "trending": true,
        "topRated": false
    },
    {
        "id": 80,
        "title": "The Godfather 80",
        "description": "A sample description for movie 80.",
        "year": 1985,
        "rating": 6.2,
        "genre": [
            "Biography",
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/eEslKSwcqmiNS6va24Pbxf2UKmJ.jpg",
        "trailerUrl": "https://www.youtube.com/embed/vKQi3bBA1y8",
        "trending": false,
        "topRated": false
    },
    {
        "id": 81,
        "title": "Joker 81",
        "description": "A sample description for movie 81.",
        "year": 2007,
        "rating": 9.4,
        "genre": [
            "Biography",
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
        "trailerUrl": "https://www.youtube.com/embed/zSWdZVtXT7E",
        "trending": true,
        "topRated": true
    },
    {
        "id": 82,
        "title": "Titanic 82",
        "description": "A sample description for movie 82.",
        "year": 2005,
        "rating": 7.4,
        "genre": [
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        "trailerUrl": "https://www.youtube.com/embed/s7EdQ4FqbhY",
        "trending": true,
        "topRated": false
    },
    {
        "id": 83,
        "title": "Titanic 83",
        "description": "A sample description for movie 83.",
        "year": 1983,
        "rating": 7.5,
        "genre": [
            "Comedy",
            "Romance"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        "trailerUrl": "https://www.youtube.com/embed/6hB3S9bIaco",
        "trending": true,
        "topRated": false
    },
    {
        "id": 84,
        "title": "The Social Network 84",
        "description": "A sample description for movie 84.",
        "year": 2004,
        "rating": 9.3,
        "genre": [
            "Biography",
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        "trailerUrl": "https://www.youtube.com/embed/vKQi3bBA1y8",
        "trending": false,
        "topRated": true
    },
    {
        "id": 85,
        "title": "Joker 85",
        "description": "A sample description for movie 85.",
        "year": 1993,
        "rating": 8.0,
        "genre": [
            "Action",
            "Adventure"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        "trailerUrl": "https://www.youtube.com/embed/zAGVQLHvwOY",
        "trending": true,
        "topRated": false
    },
    {
        "id": 86,
        "title": "The Social Network 86",
        "description": "A sample description for movie 86.",
        "year": 1985,
        "rating": 9.0,
        "genre": [
            "Action",
            "Sci-Fi",
            "Thriller"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        "trailerUrl": "https://www.youtube.com/embed/6hB3S9bIaco",
        "trending": true,
        "topRated": true
    },
    {
        "id": 87,
        "title": "Interstellar 87",
        "description": "A sample description for movie 87.",
        "year": 1994,
        "rating": 7.2,
        "genre": [
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg",
        "trailerUrl": "https://www.youtube.com/embed/EXeTwQWrcwY",
        "trending": true,
        "topRated": false
    },
    {
        "id": 88,
        "title": "Interstellar 88",
        "description": "A sample description for movie 88.",
        "year": 2003,
        "rating": 7.2,
        "genre": [
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/eEslKSwcqmiNS6va24Pbxf2UKmJ.jpg",
        "trailerUrl": "https://www.youtube.com/embed/vKQi3bBA1y8",
        "trending": false,
        "topRated": false
    },
    {
        "id": 89,
        "title": "Interstellar 89",
        "description": "A sample description for movie 89.",
        "year": 1984,
        "rating": 7.1,
        "genre": [
            "Action",
            "Sci-Fi",
            "Thriller"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        "trailerUrl": "https://www.youtube.com/embed/TcMBFSGVi1c",
        "trending": true,
        "topRated": false
    },
    {
        "id": 90,
        "title": "The Social Network 90",
        "description": "A sample description for movie 90.",
        "year": 1981,
        "rating": 6.3,
        "genre": [
            "Action",
            "Adventure"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
        "trailerUrl": "https://www.youtube.com/embed/6hB3S9bIaco",
        "trending": false,
        "topRated": false
    },
    {
        "id": 91,
        "title": "The Matrix 91",
        "description": "A sample description for movie 91.",
        "year": 2018,
        "rating": 8.2,
        "genre": [
            "Horror",
            "Thriller"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
        "trailerUrl": "https://www.youtube.com/embed/TcMBFSGVi1c",
        "trending": true,
        "topRated": false
    },
    {
        "id": 92,
        "title": "Fight Club 92",
        "description": "A sample description for movie 92.",
        "year": 1987,
        "rating": 9.1,
        "genre": [
            "Crime",
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg",
        "trailerUrl": "https://www.youtube.com/embed/s7EdQ4FqbhY",
        "trending": false,
        "topRated": true
    },
    {
        "id": 93,
        "title": "Pulp Fiction 93",
        "description": "A sample description for movie 93.",
        "year": 2007,
        "rating": 9.5,
        "genre": [
            "Action",
            "Adventure"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        "trailerUrl": "https://www.youtube.com/embed/zAGVQLHvwOY",
        "trending": false,
        "topRated": true
    },
    {
        "id": 94,
        "title": "Joker 94",
        "description": "A sample description for movie 94.",
        "year": 2013,
        "rating": 6.3,
        "genre": [
            "Mystery",
            "Crime"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
        "trailerUrl": "https://www.youtube.com/embed/YoHD9XEInc0",
        "trending": false,
        "topRated": false
    },
    {
        "id": 95,
        "title": "Inception 95",
        "description": "A sample description for movie 95.",
        "year": 2021,
        "rating": 7.3,
        "genre": [
            "Action",
            "Adventure"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        "trailerUrl": "https://www.youtube.com/embed/TcMBFSGVi1c",
        "trending": true,
        "topRated": false
    },
    {
        "id": 96,
        "title": "Interstellar 96",
        "description": "A sample description for movie 96.",
        "year": 2009,
        "rating": 9.1,
        "genre": [
            "Action",
            "Adventure"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/eEslKSwcqmiNS6va24Pbxf2UKmJ.jpg",
        "trailerUrl": "https://www.youtube.com/embed/zSWdZVtXT7E",
        "trending": true,
        "topRated": true
    },
    {
        "id": 97,
        "title": "The Matrix 97",
        "description": "A sample description for movie 97.",
        "year": 1992,
        "rating": 8.8,
        "genre": [
            "Adventure",
            "Sci-Fi"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/eEslKSwcqmiNS6va24Pbxf2UKmJ.jpg",
        "trailerUrl": "https://www.youtube.com/embed/YoHD9XEInc0",
        "trending": false,
        "topRated": true
    },
    {
        "id": 98,
        "title": "Inception 98",
        "description": "A sample description for movie 98.",
        "year": 1993,
        "rating": 9.3,
        "genre": [
            "Crime",
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
        "trailerUrl": "https://www.youtube.com/embed/TcMBFSGVi1c",
        "trending": true,
        "topRated": true
    },
    {
        "id": 99,
        "title": "Interstellar 99",
        "description": "A sample description for movie 99.",
        "year": 1984,
        "rating": 8.0,
        "genre": [
            "Mystery",
            "Crime"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        "trailerUrl": "https://www.youtube.com/embed/sY1S34973zA",
        "trending": true,
        "topRated": false
    },
    {
        "id": 100,
        "title": "Avengers: Endgame 100",
        "description": "A sample description for movie 100.",
        "year": 1994,
        "rating": 6.4,
        "genre": [
            "Biography",
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        "trailerUrl": "https://www.youtube.com/embed/EXeTwQWrcwY",
        "trending": false,
        "topRated": false
    },
    {
        "id": 101,
        "title": "Pulp Fiction 101",
        "description": "A sample description for movie 101.",
        "year": 2017,
        "rating": 7.6,
        "genre": [
            "Crime",
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        "trailerUrl": "https://www.youtube.com/embed/zAGVQLHvwOY",
        "trending": false,
        "topRated": false
    },
    {
        "id": 102,
        "title": "The Social Network 102",
        "description": "A sample description for movie 102.",
        "year": 2015,
        "rating": 6.8,
        "genre": [
            "Mystery",
            "Crime"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        "trailerUrl": "https://www.youtube.com/embed/YoHD9XEInc0",
        "trending": true,
        "topRated": false
    },
    {
        "id": 103,
        "title": "The Matrix 103",
        "description": "A sample description for movie 103.",
        "year": 2001,
        "rating": 6.2,
        "genre": [
            "Action",
            "Sci-Fi",
            "Thriller"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg",
        "trailerUrl": "https://www.youtube.com/embed/zSWdZVtXT7E",
        "trending": true,
        "topRated": false
    },
    {
        "id": 104,
        "title": "The Matrix 104",
        "description": "A sample description for movie 104.",
        "year": 2011,
        "rating": 6.7,
        "genre": [
            "Horror",
            "Thriller"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        "trailerUrl": "https://www.youtube.com/embed/zSWdZVtXT7E",
        "trending": true,
        "topRated": false
    },
    {
        "id": 105,
        "title": "The Departed 105",
        "description": "A sample description for movie 105.",
        "year": 2009,
        "rating": 6.8,
        "genre": [
            "Adventure",
            "Sci-Fi"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
        "trailerUrl": "https://www.youtube.com/embed/zSWdZVtXT7E",
        "trending": false,
        "topRated": false
    },
    {
        "id": 106,
        "title": "The Godfather 106",
        "description": "A sample description for movie 106.",
        "year": 2017,
        "rating": 9.1,
        "genre": [
            "Fantasy",
            "Family"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        "trailerUrl": "https://www.youtube.com/embed/zAGVQLHvwOY",
        "trending": true,
        "topRated": true
    },
    {
        "id": 107,
        "title": "The Lion King 107",
        "description": "A sample description for movie 107.",
        "year": 2004,
        "rating": 7.8,
        "genre": [
            "Fantasy",
            "Family"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg",
        "trailerUrl": "https://www.youtube.com/embed/zAGVQLHvwOY",
        "trending": true,
        "topRated": false
    },
    {
        "id": 108,
        "title": "The Shawshank Redemption 108",
        "description": "A sample description for movie 108.",
        "year": 2017,
        "rating": 9.4,
        "genre": [
            "Action",
            "Adventure"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/eEslKSwcqmiNS6va24Pbxf2UKmJ.jpg",
        "trailerUrl": "https://www.youtube.com/embed/8g18jFHCLXk",
        "trending": true,
        "topRated": true
    },
    {
        "id": 109,
        "title": "Avengers: Endgame 109",
        "description": "A sample description for movie 109.",
        "year": 1985,
        "rating": 9.3,
        "genre": [
            "Action",
            "Sci-Fi",
            "Thriller"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
        "trailerUrl": "https://www.youtube.com/embed/YoHD9XEInc0",
        "trending": true,
        "topRated": true
    },
    {
        "id": 110,
        "title": "The Shawshank Redemption 110",
        "description": "A sample description for movie 110.",
        "year": 1981,
        "rating": 7.6,
        "genre": [
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
        "trailerUrl": "https://www.youtube.com/embed/s7EdQ4FqbhY",
        "trending": true,
        "topRated": false
    },
    {
        "id": 111,
        "title": "The Lion King 111",
        "description": "A sample description for movie 111.",
        "year": 1991,
        "rating": 6.2,
        "genre": [
            "Fantasy",
            "Family"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/eEslKSwcqmiNS6va24Pbxf2UKmJ.jpg",
        "trailerUrl": "https://www.youtube.com/embed/sY1S34973zA",
        "trending": true,
        "topRated": false
    },
    {
        "id": 112,
        "title": "The Dark Knight 112",
        "description": "A sample description for movie 112.",
        "year": 2008,
        "rating": 9.3,
        "genre": [
            "Action",
            "Sci-Fi",
            "Thriller"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
        "trailerUrl": "https://www.youtube.com/embed/8g18jFHCLXk",
        "trending": true,
        "topRated": true
    },
    {
        "id": 113,
        "title": "The Departed 113",
        "description": "A sample description for movie 113.",
        "year": 1994,
        "rating": 6.2,
        "genre": [
            "Action",
            "Sci-Fi",
            "Thriller"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        "trailerUrl": "https://www.youtube.com/embed/s7EdQ4FqbhY",
        "trending": true,
        "topRated": false
    },
    {
        "id": 114,
        "title": "Interstellar 114",
        "description": "A sample description for movie 114.",
        "year": 2013,
        "rating": 8.9,
        "genre": [
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        "trailerUrl": "https://www.youtube.com/embed/8g18jFHCLXk",
        "trending": false,
        "topRated": true
    },
    {
        "id": 115,
        "title": "Interstellar 115",
        "description": "A sample description for movie 115.",
        "year": 1988,
        "rating": 8.8,
        "genre": [
            "Crime",
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/eEslKSwcqmiNS6va24Pbxf2UKmJ.jpg",
        "trailerUrl": "https://www.youtube.com/embed/8g18jFHCLXk",
        "trending": true,
        "topRated": true
    },
    {
        "id": 116,
        "title": "Pulp Fiction 116",
        "description": "A sample description for movie 116.",
        "year": 2006,
        "rating": 7.9,
        "genre": [
            "Horror",
            "Thriller"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        "trailerUrl": "https://www.youtube.com/embed/zSWdZVtXT7E",
        "trending": true,
        "topRated": false
    },
    {
        "id": 117,
        "title": "The Shawshank Redemption 117",
        "description": "A sample description for movie 117.",
        "year": 1986,
        "rating": 7.1,
        "genre": [
            "Crime",
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg",
        "trailerUrl": "https://www.youtube.com/embed/6hB3S9bIaco",
        "trending": true,
        "topRated": false
    },
    {
        "id": 118,
        "title": "The Lion King 118",
        "description": "A sample description for movie 118.",
        "year": 1993,
        "rating": 6.4,
        "genre": [
            "Comedy",
            "Romance"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        "trailerUrl": "https://www.youtube.com/embed/EXeTwQWrcwY",
        "trending": true,
        "topRated": false
    },
    {
        "id": 119,
        "title": "The Green Mile 119",
        "description": "A sample description for movie 119.",
        "year": 2016,
        "rating": 9.4,
        "genre": [
            "Biography",
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
        "trailerUrl": "https://www.youtube.com/embed/s7EdQ4FqbhY",
        "trending": false,
        "topRated": true
    },
    {
        "id": 120,
        "title": "Pulp Fiction 120",
        "description": "A sample description for movie 120.",
        "year": 2006,
        "rating": 7.0,
        "genre": [
            "Adventure",
            "Sci-Fi"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
        "trailerUrl": "https://www.youtube.com/embed/zSWdZVtXT7E",
        "trending": false,
        "topRated": false
    },
    {
        "id": 121,
        "title": "The Dark Knight 121",
        "description": "A sample description for movie 121.",
        "year": 1985,
        "rating": 6.9,
        "genre": [
            "Biography",
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/eEslKSwcqmiNS6va24Pbxf2UKmJ.jpg",
        "trailerUrl": "https://www.youtube.com/embed/6hB3S9bIaco",
        "trending": true,
        "topRated": false
    },
    {
        "id": 122,
        "title": "Forrest Gump 122",
        "description": "A sample description for movie 122.",
        "year": 2022,
        "rating": 9.2,
        "genre": [
            "Action",
            "Sci-Fi",
            "Thriller"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
        "trailerUrl": "https://www.youtube.com/embed/zAGVQLHvwOY",
        "trending": false,
        "topRated": true
    },
    {
        "id": 123,
        "title": "Interstellar 123",
        "description": "A sample description for movie 123.",
        "year": 1989,
        "rating": 8.1,
        "genre": [
            "Fantasy",
            "Family"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        "trailerUrl": "https://www.youtube.com/embed/s7EdQ4FqbhY",
        "trending": true,
        "topRated": false
    },
    {
        "id": 124,
        "title": "Inception 124",
        "description": "A sample description for movie 124.",
        "year": 2001,
        "rating": 7.7,
        "genre": [
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
        "trailerUrl": "https://www.youtube.com/embed/zSWdZVtXT7E",
        "trending": true,
        "topRated": false
    },
    {
        "id": 125,
        "title": "The Matrix 125",
        "description": "A sample description for movie 125.",
        "year": 1985,
        "rating": 8.7,
        "genre": [
            "Fantasy",
            "Family"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        "trailerUrl": "https://www.youtube.com/embed/YoHD9XEInc0",
        "trending": true,
        "topRated": true
    },
    {
        "id": 126,
        "title": "Dune 126",
        "description": "A sample description for movie 126.",
        "year": 2021,
        "rating": 8.2,
        "genre": [
            "Adventure",
            "Sci-Fi"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/eEslKSwcqmiNS6va24Pbxf2UKmJ.jpg",
        "trailerUrl": "https://www.youtube.com/embed/8g18jFHCLXk",
        "trending": false,
        "topRated": false
    },
    {
        "id": 127,
        "title": "The Matrix 127",
        "description": "A sample description for movie 127.",
        "year": 2017,
        "rating": 6.9,
        "genre": [
            "Action",
            "Sci-Fi",
            "Thriller"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
        "trailerUrl": "https://www.youtube.com/embed/EXeTwQWrcwY",
        "trending": true,
        "topRated": false
    },
    {
        "id": 128,
        "title": "Joker 128",
        "description": "A sample description for movie 128.",
        "year": 1997,
        "rating": 9.0,
        "genre": [
            "Fantasy",
            "Family"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
        "trailerUrl": "https://www.youtube.com/embed/8g18jFHCLXk",
        "trending": false,
        "topRated": true
    },
    {
        "id": 129,
        "title": "The Departed 129",
        "description": "A sample description for movie 129.",
        "year": 1992,
        "rating": 8.8,
        "genre": [
            "Comedy",
            "Romance"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
        "trailerUrl": "https://www.youtube.com/embed/TcMBFSGVi1c",
        "trending": false,
        "topRated": true
    },
    {
        "id": 130,
        "title": "The Shawshank Redemption 130",
        "description": "A sample description for movie 130.",
        "year": 2014,
        "rating": 6.7,
        "genre": [
            "Action",
            "Adventure"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        "trailerUrl": "https://www.youtube.com/embed/sY1S34973zA",
        "trending": true,
        "topRated": false
    },
    {
        "id": 131,
        "title": "Inception 131",
        "description": "A sample description for movie 131.",
        "year": 2024,
        "rating": 7.6,
        "genre": [
            "Mystery",
            "Crime"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
        "trailerUrl": "https://www.youtube.com/embed/vKQi3bBA1y8",
        "trending": true,
        "topRated": false
    },
    {
        "id": 132,
        "title": "Fight Club 132",
        "description": "A sample description for movie 132.",
        "year": 2008,
        "rating": 6.8,
        "genre": [
            "Action",
            "Adventure"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        "trailerUrl": "https://www.youtube.com/embed/zSWdZVtXT7E",
        "trending": true,
        "topRated": false
    },
    {
        "id": 133,
        "title": "Gladiator 133",
        "description": "A sample description for movie 133.",
        "year": 1994,
        "rating": 8.1,
        "genre": [
            "Mystery",
            "Crime"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg",
        "trailerUrl": "https://www.youtube.com/embed/8g18jFHCLXk",
        "trending": true,
        "topRated": false
    },
    {
        "id": 134,
        "title": "The Matrix 134",
        "description": "A sample description for movie 134.",
        "year": 1983,
        "rating": 7.6,
        "genre": [
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        "trailerUrl": "https://www.youtube.com/embed/TcMBFSGVi1c",
        "trending": true,
        "topRated": false
    },
    {
        "id": 135,
        "title": "Forrest Gump 135",
        "description": "A sample description for movie 135.",
        "year": 1999,
        "rating": 6.9,
        "genre": [
            "Action",
            "Adventure"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg",
        "trailerUrl": "https://www.youtube.com/embed/EXeTwQWrcwY",
        "trending": false,
        "topRated": false
    },
    {
        "id": 136,
        "title": "The Matrix 136",
        "description": "A sample description for movie 136.",
        "year": 1991,
        "rating": 6.4,
        "genre": [
            "Horror",
            "Thriller"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
        "trailerUrl": "https://www.youtube.com/embed/s7EdQ4FqbhY",
        "trending": true,
        "topRated": false
    },
    {
        "id": 137,
        "title": "Dune 137",
        "description": "A sample description for movie 137.",
        "year": 2014,
        "rating": 9.0,
        "genre": [
            "Comedy",
            "Romance"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        "trailerUrl": "https://www.youtube.com/embed/6hB3S9bIaco",
        "trending": false,
        "topRated": true
    },
    {
        "id": 138,
        "title": "Interstellar 138",
        "description": "A sample description for movie 138.",
        "year": 1996,
        "rating": 8.4,
        "genre": [
            "Mystery",
            "Crime"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        "trailerUrl": "https://www.youtube.com/embed/8g18jFHCLXk",
        "trending": false,
        "topRated": false
    },
    {
        "id": 139,
        "title": "The Social Network 139",
        "description": "A sample description for movie 139.",
        "year": 2016,
        "rating": 6.1,
        "genre": [
            "Fantasy",
            "Family"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
        "trailerUrl": "https://www.youtube.com/embed/zAGVQLHvwOY",
        "trending": false,
        "topRated": false
    },
    {
        "id": 140,
        "title": "The Prestige 140",
        "description": "A sample description for movie 140.",
        "year": 1994,
        "rating": 9.3,
        "genre": [
            "Comedy",
            "Romance"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        "trailerUrl": "https://www.youtube.com/embed/TcMBFSGVi1c",
        "trending": false,
        "topRated": true
    },
    {
        "id": 141,
        "title": "The Shawshank Redemption 141",
        "description": "A sample description for movie 141.",
        "year": 2004,
        "rating": 8.5,
        "genre": [
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        "trailerUrl": "https://www.youtube.com/embed/YoHD9XEInc0",
        "trending": false,
        "topRated": false
    },
    {
        "id": 142,
        "title": "Titanic 142",
        "description": "A sample description for movie 142.",
        "year": 1996,
        "rating": 6.4,
        "genre": [
            "Crime",
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg",
        "trailerUrl": "https://www.youtube.com/embed/vKQi3bBA1y8",
        "trending": false,
        "topRated": false
    },
    {
        "id": 143,
        "title": "Titanic 143",
        "description": "A sample description for movie 143.",
        "year": 1981,
        "rating": 7.0,
        "genre": [
            "Action",
            "Sci-Fi",
            "Thriller"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/eEslKSwcqmiNS6va24Pbxf2UKmJ.jpg",
        "trailerUrl": "https://www.youtube.com/embed/YoHD9XEInc0",
        "trending": false,
        "topRated": false
    },
    {
        "id": 144,
        "title": "The Green Mile 144",
        "description": "A sample description for movie 144.",
        "year": 1995,
        "rating": 8.4,
        "genre": [
            "Adventure",
            "Sci-Fi"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        "trailerUrl": "https://www.youtube.com/embed/vKQi3bBA1y8",
        "trending": true,
        "topRated": false
    },
    {
        "id": 145,
        "title": "Interstellar 145",
        "description": "A sample description for movie 145.",
        "year": 1996,
        "rating": 6.8,
        "genre": [
            "Crime",
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg",
        "trailerUrl": "https://www.youtube.com/embed/TcMBFSGVi1c",
        "trending": true,
        "topRated": false
    },
    {
        "id": 146,
        "title": "The Prestige 146",
        "description": "A sample description for movie 146.",
        "year": 2021,
        "rating": 6.6,
        "genre": [
            "Biography",
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
        "trailerUrl": "https://www.youtube.com/embed/6hB3S9bIaco",
        "trending": true,
        "topRated": false
    },
    {
        "id": 147,
        "title": "Fight Club 147",
        "description": "A sample description for movie 147.",
        "year": 1995,
        "rating": 6.6,
        "genre": [
            "Horror",
            "Thriller"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
        "trailerUrl": "https://www.youtube.com/embed/TcMBFSGVi1c",
        "trending": true,
        "topRated": false
    },
    {
        "id": 148,
        "title": "Whiplash 148",
        "description": "A sample description for movie 148.",
        "year": 2015,
        "rating": 7.8,
        "genre": [
            "Horror",
            "Thriller"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
        "trailerUrl": "https://www.youtube.com/embed/s7EdQ4FqbhY",
        "trending": false,
        "topRated": false
    },
    {
        "id": 149,
        "title": "Fight Club 149",
        "description": "A sample description for movie 149.",
        "year": 1984,
        "rating": 6.9,
        "genre": [
            "Mystery",
            "Crime"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        "trailerUrl": "https://www.youtube.com/embed/6hB3S9bIaco",
        "trending": true,
        "topRated": false
    },
    {
        "id": 150,
        "title": "The Prestige 150",
        "description": "A sample description for movie 150.",
        "year": 1984,
        "rating": 8.8,
        "genre": [
            "Horror",
            "Thriller"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
        "trailerUrl": "https://www.youtube.com/embed/s7EdQ4FqbhY",
        "trending": false,
        "topRated": true
    },
    {
        "id": 151,
        "title": "Gladiator 151",
        "description": "A sample description for movie 151.",
        "year": 2024,
        "rating": 7.7,
        "genre": [
            "Biography",
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
        "trailerUrl": "https://www.youtube.com/embed/EXeTwQWrcwY",
        "trending": true,
        "topRated": false
    },
    {
        "id": 152,
        "title": "The Prestige 152",
        "description": "A sample description for movie 152.",
        "year": 2024,
        "rating": 9.2,
        "genre": [
            "Horror",
            "Thriller"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
        "trailerUrl": "https://www.youtube.com/embed/TcMBFSGVi1c",
        "trending": false,
        "topRated": true
    },
    {
        "id": 153,
        "title": "The Green Mile 153",
        "description": "A sample description for movie 153.",
        "year": 2009,
        "rating": 6.1,
        "genre": [
            "Adventure",
            "Sci-Fi"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
        "trailerUrl": "https://www.youtube.com/embed/YoHD9XEInc0",
        "trending": true,
        "topRated": false
    },
    {
        "id": 154,
        "title": "Whiplash 154",
        "description": "A sample description for movie 154.",
        "year": 2007,
        "rating": 8.4,
        "genre": [
            "Horror",
            "Thriller"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
        "trailerUrl": "https://www.youtube.com/embed/6hB3S9bIaco",
        "trending": false,
        "topRated": false
    },
    {
        "id": 155,
        "title": "Joker 155",
        "description": "A sample description for movie 155.",
        "year": 2010,
        "rating": 7.2,
        "genre": [
            "Biography",
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        "trailerUrl": "https://www.youtube.com/embed/zAGVQLHvwOY",
        "trending": true,
        "topRated": false
    },
    {
        "id": 156,
        "title": "Dune 156",
        "description": "A sample description for movie 156.",
        "year": 1998,
        "rating": 8.5,
        "genre": [
            "Action",
            "Adventure"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        "trailerUrl": "https://www.youtube.com/embed/zAGVQLHvwOY",
        "trending": false,
        "topRated": false
    },
    {
        "id": 157,
        "title": "Joker 157",
        "description": "A sample description for movie 157.",
        "year": 1985,
        "rating": 8.1,
        "genre": [
            "Crime",
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        "trailerUrl": "https://www.youtube.com/embed/vKQi3bBA1y8",
        "trending": false,
        "topRated": false
    },
    {
        "id": 158,
        "title": "Interstellar 158",
        "description": "A sample description for movie 158.",
        "year": 1981,
        "rating": 7.6,
        "genre": [
            "Action",
            "Adventure"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
        "trailerUrl": "https://www.youtube.com/embed/s7EdQ4FqbhY",
        "trending": true,
        "topRated": false
    },
    {
        "id": 159,
        "title": "The Shawshank Redemption 159",
        "description": "A sample description for movie 159.",
        "year": 1987,
        "rating": 8.7,
        "genre": [
            "Comedy",
            "Romance"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg",
        "trailerUrl": "https://www.youtube.com/embed/6hB3S9bIaco",
        "trending": true,
        "topRated": true
    },
    {
        "id": 160,
        "title": "Interstellar 160",
        "description": "A sample description for movie 160.",
        "year": 2012,
        "rating": 8.8,
        "genre": [
            "Adventure",
            "Sci-Fi"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        "trailerUrl": "https://www.youtube.com/embed/6hB3S9bIaco",
        "trending": true,
        "topRated": true
    },
    {
        "id": 161,
        "title": "The Prestige 161",
        "description": "A sample description for movie 161.",
        "year": 1980,
        "rating": 8.3,
        "genre": [
            "Action",
            "Adventure"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        "trailerUrl": "https://www.youtube.com/embed/zSWdZVtXT7E",
        "trending": false,
        "topRated": false
    },
    {
        "id": 162,
        "title": "Fight Club 162",
        "description": "A sample description for movie 162.",
        "year": 1984,
        "rating": 6.8,
        "genre": [
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg",
        "trailerUrl": "https://www.youtube.com/embed/TcMBFSGVi1c",
        "trending": true,
        "topRated": false
    },
    {
        "id": 163,
        "title": "Forrest Gump 163",
        "description": "A sample description for movie 163.",
        "year": 1991,
        "rating": 7.0,
        "genre": [
            "Fantasy",
            "Family"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        "trailerUrl": "https://www.youtube.com/embed/YoHD9XEInc0",
        "trending": false,
        "topRated": false
    },
    {
        "id": 164,
        "title": "The Godfather 164",
        "description": "A sample description for movie 164.",
        "year": 2023,
        "rating": 8.4,
        "genre": [
            "Biography",
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg",
        "trailerUrl": "https://www.youtube.com/embed/TcMBFSGVi1c",
        "trending": false,
        "topRated": false
    },
    {
        "id": 165,
        "title": "Gladiator 165",
        "description": "A sample description for movie 165.",
        "year": 1987,
        "rating": 7.2,
        "genre": [
            "Mystery",
            "Crime"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        "trailerUrl": "https://www.youtube.com/embed/zAGVQLHvwOY",
        "trending": true,
        "topRated": false
    },
    {
        "id": 166,
        "title": "The Prestige 166",
        "description": "A sample description for movie 166.",
        "year": 2010,
        "rating": 8.6,
        "genre": [
            "Action",
            "Sci-Fi",
            "Thriller"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
        "trailerUrl": "https://www.youtube.com/embed/TcMBFSGVi1c",
        "trending": false,
        "topRated": true
    },
    {
        "id": 167,
        "title": "Interstellar 167",
        "description": "A sample description for movie 167.",
        "year": 1988,
        "rating": 6.7,
        "genre": [
            "Crime",
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/eEslKSwcqmiNS6va24Pbxf2UKmJ.jpg",
        "trailerUrl": "https://www.youtube.com/embed/6hB3S9bIaco",
        "trending": false,
        "topRated": false
    },
    {
        "id": 168,
        "title": "The Shawshank Redemption 168",
        "description": "A sample description for movie 168.",
        "year": 2009,
        "rating": 8.9,
        "genre": [
            "Comedy",
            "Romance"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg",
        "trailerUrl": "https://www.youtube.com/embed/8g18jFHCLXk",
        "trending": true,
        "topRated": true
    },
    {
        "id": 169,
        "title": "The Shawshank Redemption 169",
        "description": "A sample description for movie 169.",
        "year": 1993,
        "rating": 6.9,
        "genre": [
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
        "trailerUrl": "https://www.youtube.com/embed/sY1S34973zA",
        "trending": false,
        "topRated": false
    },
    {
        "id": 170,
        "title": "Whiplash 170",
        "description": "A sample description for movie 170.",
        "year": 2017,
        "rating": 6.9,
        "genre": [
            "Crime",
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        "trailerUrl": "https://www.youtube.com/embed/TcMBFSGVi1c",
        "trending": true,
        "topRated": false
    },
    {
        "id": 171,
        "title": "Inception 171",
        "description": "A sample description for movie 171.",
        "year": 2013,
        "rating": 6.0,
        "genre": [
            "Action",
            "Sci-Fi",
            "Thriller"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
        "trailerUrl": "https://www.youtube.com/embed/vKQi3bBA1y8",
        "trending": false,
        "topRated": false
    },
    {
        "id": 172,
        "title": "Pulp Fiction 172",
        "description": "A sample description for movie 172.",
        "year": 1982,
        "rating": 9.3,
        "genre": [
            "Mystery",
            "Crime"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        "trailerUrl": "https://www.youtube.com/embed/s7EdQ4FqbhY",
        "trending": false,
        "topRated": true
    },
    {
        "id": 173,
        "title": "The Departed 173",
        "description": "A sample description for movie 173.",
        "year": 2004,
        "rating": 9.1,
        "genre": [
            "Action",
            "Sci-Fi",
            "Thriller"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
        "trailerUrl": "https://www.youtube.com/embed/YoHD9XEInc0",
        "trending": false,
        "topRated": true
    },
    {
        "id": 174,
        "title": "Interstellar 174",
        "description": "A sample description for movie 174.",
        "year": 1987,
        "rating": 6.2,
        "genre": [
            "Crime",
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
        "trailerUrl": "https://www.youtube.com/embed/YoHD9XEInc0",
        "trending": true,
        "topRated": false
    },
    {
        "id": 175,
        "title": "Avengers: Endgame 175",
        "description": "A sample description for movie 175.",
        "year": 2005,
        "rating": 8.7,
        "genre": [
            "Action",
            "Sci-Fi",
            "Thriller"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        "trailerUrl": "https://www.youtube.com/embed/EXeTwQWrcwY",
        "trending": true,
        "topRated": true
    },
    {
        "id": 176,
        "title": "The Godfather 176",
        "description": "A sample description for movie 176.",
        "year": 1994,
        "rating": 6.3,
        "genre": [
            "Comedy",
            "Romance"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
        "trailerUrl": "https://www.youtube.com/embed/zAGVQLHvwOY",
        "trending": true,
        "topRated": false
    },
    {
        "id": 177,
        "title": "Inception 177",
        "description": "A sample description for movie 177.",
        "year": 1994,
        "rating": 7.7,
        "genre": [
            "Mystery",
            "Crime"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg",
        "trailerUrl": "https://www.youtube.com/embed/vKQi3bBA1y8",
        "trending": true,
        "topRated": false
    },
    {
        "id": 178,
        "title": "Gladiator 178",
        "description": "A sample description for movie 178.",
        "year": 1988,
        "rating": 8.5,
        "genre": [
            "Biography",
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
        "trailerUrl": "https://www.youtube.com/embed/YoHD9XEInc0",
        "trending": true,
        "topRated": false
    },
    {
        "id": 179,
        "title": "The Lion King 179",
        "description": "A sample description for movie 179.",
        "year": 2008,
        "rating": 6.7,
        "genre": [
            "Biography",
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        "trailerUrl": "https://www.youtube.com/embed/sY1S34973zA",
        "trending": false,
        "topRated": false
    },
    {
        "id": 180,
        "title": "Joker 180",
        "description": "A sample description for movie 180.",
        "year": 1981,
        "rating": 7.7,
        "genre": [
            "Action",
            "Sci-Fi",
            "Thriller"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg",
        "trailerUrl": "https://www.youtube.com/embed/6hB3S9bIaco",
        "trending": false,
        "topRated": false
    },
    {
        "id": 181,
        "title": "Dune 181",
        "description": "A sample description for movie 181.",
        "year": 2017,
        "rating": 6.8,
        "genre": [
            "Mystery",
            "Crime"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/eEslKSwcqmiNS6va24Pbxf2UKmJ.jpg",
        "trailerUrl": "https://www.youtube.com/embed/6hB3S9bIaco",
        "trending": false,
        "topRated": false
    },
    {
        "id": 182,
        "title": "Titanic 182",
        "description": "A sample description for movie 182.",
        "year": 2002,
        "rating": 8.8,
        "genre": [
            "Action",
            "Sci-Fi",
            "Thriller"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        "trailerUrl": "https://www.youtube.com/embed/sY1S34973zA",
        "trending": false,
        "topRated": true
    },
    {
        "id": 183,
        "title": "The Social Network 183",
        "description": "A sample description for movie 183.",
        "year": 2001,
        "rating": 8.5,
        "genre": [
            "Fantasy",
            "Family"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
        "trailerUrl": "https://www.youtube.com/embed/sY1S34973zA",
        "trending": false,
        "topRated": false
    },
    {
        "id": 184,
        "title": "The Dark Knight 184",
        "description": "A sample description for movie 184.",
        "year": 1984,
        "rating": 7.8,
        "genre": [
            "Fantasy",
            "Family"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
        "trailerUrl": "https://www.youtube.com/embed/vKQi3bBA1y8",
        "trending": true,
        "topRated": false
    },
    {
        "id": 185,
        "title": "The Social Network 185",
        "description": "A sample description for movie 185.",
        "year": 2003,
        "rating": 6.6,
        "genre": [
            "Biography",
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
        "trailerUrl": "https://www.youtube.com/embed/vKQi3bBA1y8",
        "trending": true,
        "topRated": false
    },
    {
        "id": 186,
        "title": "Avengers: Endgame 186",
        "description": "A sample description for movie 186.",
        "year": 1994,
        "rating": 6.4,
        "genre": [
            "Fantasy",
            "Family"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
        "trailerUrl": "https://www.youtube.com/embed/zSWdZVtXT7E",
        "trending": false,
        "topRated": false
    },
    {
        "id": 187,
        "title": "Avengers: Endgame 187",
        "description": "A sample description for movie 187.",
        "year": 1994,
        "rating": 9.0,
        "genre": [
            "Crime",
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg",
        "trailerUrl": "https://www.youtube.com/embed/vKQi3bBA1y8",
        "trending": true,
        "topRated": true
    },
    {
        "id": 188,
        "title": "Dune 188",
        "description": "A sample description for movie 188.",
        "year": 1992,
        "rating": 6.9,
        "genre": [
            "Comedy",
            "Romance"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
        "trailerUrl": "https://www.youtube.com/embed/vKQi3bBA1y8",
        "trending": true,
        "topRated": false
    },
    {
        "id": 189,
        "title": "Gladiator 189",
        "description": "A sample description for movie 189.",
        "year": 1990,
        "rating": 6.8,
        "genre": [
            "Action",
            "Sci-Fi",
            "Thriller"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
        "trailerUrl": "https://www.youtube.com/embed/YoHD9XEInc0",
        "trending": true,
        "topRated": false
    },
    {
        "id": 190,
        "title": "Pulp Fiction 190",
        "description": "A sample description for movie 190.",
        "year": 1984,
        "rating": 8.9,
        "genre": [
            "Action",
            "Adventure"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        "trailerUrl": "https://www.youtube.com/embed/zAGVQLHvwOY",
        "trending": true,
        "topRated": true
    },
    {
        "id": 191,
        "title": "Fight Club 191",
        "description": "A sample description for movie 191.",
        "year": 2020,
        "rating": 8.7,
        "genre": [
            "Action",
            "Adventure"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/eEslKSwcqmiNS6va24Pbxf2UKmJ.jpg",
        "trailerUrl": "https://www.youtube.com/embed/s7EdQ4FqbhY",
        "trending": false,
        "topRated": true
    },
    {
        "id": 192,
        "title": "Joker 192",
        "description": "A sample description for movie 192.",
        "year": 2013,
        "rating": 6.9,
        "genre": [
            "Adventure",
            "Sci-Fi"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        "trailerUrl": "https://www.youtube.com/embed/sY1S34973zA",
        "trending": false,
        "topRated": false
    },
    {
        "id": 193,
        "title": "The Prestige 193",
        "description": "A sample description for movie 193.",
        "year": 2012,
        "rating": 7.2,
        "genre": [
            "Biography",
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        "trailerUrl": "https://www.youtube.com/embed/zAGVQLHvwOY",
        "trending": false,
        "topRated": false
    },
    {
        "id": 194,
        "title": "The Social Network 194",
        "description": "A sample description for movie 194.",
        "year": 2008,
        "rating": 9.3,
        "genre": [
            "Horror",
            "Thriller"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/eEslKSwcqmiNS6va24Pbxf2UKmJ.jpg",
        "trailerUrl": "https://www.youtube.com/embed/TcMBFSGVi1c",
        "trending": false,
        "topRated": true
    },
    {
        "id": 195,
        "title": "The Departed 195",
        "description": "A sample description for movie 195.",
        "year": 2007,
        "rating": 8.2,
        "genre": [
            "Action",
            "Sci-Fi",
            "Thriller"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
        "trailerUrl": "https://www.youtube.com/embed/vKQi3bBA1y8",
        "trending": true,
        "topRated": false
    },
    {
        "id": 196,
        "title": "The Departed 196",
        "description": "A sample description for movie 196.",
        "year": 2022,
        "rating": 9.0,
        "genre": [
            "Adventure",
            "Sci-Fi"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg",
        "trailerUrl": "https://www.youtube.com/embed/8g18jFHCLXk",
        "trending": false,
        "topRated": true
    },
    {
        "id": 197,
        "title": "The Departed 197",
        "description": "A sample description for movie 197.",
        "year": 1990,
        "rating": 8.3,
        "genre": [
            "Horror",
            "Thriller"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
        "trailerUrl": "https://www.youtube.com/embed/zSWdZVtXT7E",
        "trending": false,
        "topRated": false
    },
    {
        "id": 198,
        "title": "Pulp Fiction 198",
        "description": "A sample description for movie 198.",
        "year": 1987,
        "rating": 7.0,
        "genre": [
            "Biography",
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        "trailerUrl": "https://www.youtube.com/embed/6hB3S9bIaco",
        "trending": false,
        "topRated": false
    },
    {
        "id": 199,
        "title": "The Prestige 199",
        "description": "A sample description for movie 199.",
        "year": 1988,
        "rating": 6.5,
        "genre": [
            "Action",
            "Sci-Fi",
            "Thriller"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
        "trailerUrl": "https://www.youtube.com/embed/8g18jFHCLXk",
        "trending": true,
        "topRated": false
    },
    {
        "id": 200,
        "title": "The Shawshank Redemption 200",
        "description": "A sample description for movie 200.",
        "year": 2006,
        "rating": 7.7,
        "genre": [
            "Crime",
            "Drama"
        ],
        "poster": "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
        "trailerUrl": "https://www.youtube.com/embed/s7EdQ4FqbhY",
        "trending": false,
        "topRated": false
    }
];

// Data access functions
const getAllMovies = () => Promise.resolve(movies);

const getMovieById = (id) => {
    const movie = movies.find(m => m.id === parseInt(id));
    return Promise.resolve(movie || null);
};

const getTrendingMovies = () => {
    const trending = movies.filter(m => m.trending);
    return Promise.resolve(trending);
};

const getTopRatedMovies = () => {
    const topRated = movies.filter(m => m.topRated);
    return Promise.resolve(topRated);
};

const getRecommendedMovies = (currentMovieId) => {
    const currentMovie = movies.find(m => m.id === parseInt(currentMovieId));
    if (!currentMovie) return Promise.resolve([]);
    
    const recommended = movies
        .filter(m => m.id !== parseInt(currentMovieId))
        .filter(m => m.genre.some(g => currentMovie.genre.includes(g)))
        .slice(0, 4);
    
    return Promise.resolve(recommended);
};

const searchMovies = (query) => {
    const results = movies.filter(movie => 
        movie.title.toLowerCase().includes(query.toLowerCase()) ||
        movie.genre.some(g => g.toLowerCase().includes(query.toLowerCase())) ||
        movie.year.toString().includes(query)
    );
    return Promise.resolve(results);
};

const filterMovies = (filters) => {
    let filtered = [...movies];
    
    if (filters.genre) {
        filtered = filtered.filter(m => m.genre.includes(filters.genre));
    }
    
    if (filters.year) {
        filtered = filtered.filter(m => m.year === parseInt(filters.year));
    }
    
    if (filters.rating) {
        filtered = filtered.filter(m => m.rating >= parseFloat(filters.rating));
    }
    
    return Promise.resolve(filtered);
}; 