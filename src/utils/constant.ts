export const BASE_URL = "https://api.themoviedb.org/3/"
export const MOVIE_URL = "movie"

export const TV_URL = "tv/"

export enum ListType {
  now_playing = "now_playing",
  popular = "popular",
  topRated = "top_rated",
  Upcoming = "upcoming",
  list = "list",
  movieDiscover = "discover/movie",
  tvDiscover = "discover/tv",
  newAndPopular = "person/popular",
  trending = "trending/all/day",
}

export const API_KEY = "?api_key=9fffd9d7141016b347c2450508406f8c"

// https://api.themoviedb.org/3/movie/popular?api_key=9fffd9d7141016b347c2450508406f8c

// Movie-return genre
// https://api.themoviedb.org/3/genre/movie/list?api_key=9fffd9d7141016b347c2450508406f8c

// TV SHOW-return genre
// https://api.themoviedb.org/3/genre/tv/list?api_key=9fffd9d7141016b347c2450508406f8c

// New& popular
// https://api.themoviedb.org/3/person/popular?api_key=9fffd9d7141016b347c2450508406f8c

// MY list ?
// browse by language

// Discover movie
// https://api.themoviedb.org/3/discover/movie?api_key=9fffd9d7141016b347c2450508406f8c

// Discover tv
// https://api.themoviedb.org/3/discover/tv?api_key=9fffd9d7141016b347c2450508406f8c

// trending
// https://api.themoviedb.org/3/trending/movie/day?api_key=9fffd9d7141016b347c2450508406f8c

// new&popular
// https://api.themoviedb.org/3/trending/all/day?api_key=9fffd9d7141016b347c2450508406f8c

// DEtails
// https://api.themoviedb.org/3/movie/572802?api_key=9fffd9d7141016b347c2450508406f8c

// todo + use local storage to save movie choice
// searchbar, filtermovie
// maybe impliment video feature??
