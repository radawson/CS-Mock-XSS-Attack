require('dotenv').config()

const API_KEY = process.env.API_KEY

const connect_string = "https://api.themoviedb.org/3/discover/movie?api_key=" + API_KEY + "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"