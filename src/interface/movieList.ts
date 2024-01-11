export interface IMovieListResponse {
  dates: Dates
  page: number
  results: MovieDetail[]
  total_pages: number
  total_results: number
}

export interface Dates {
  maximum: string
  minimum: string
}

export interface MovieDetail {
  adult: boolean
  backdrop_path?: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
  media_type: string
  name?: string
  original_name?: string
  first_air_date?: string
  origin_country?: string[]
}
