import { useEffect } from "react"
import { ListServices } from "../../services/movieList"
import { useMovieListStore } from "../../store/movieList"
import { ListType } from "../../utils/constant"
import { MovieDetail } from "../../interface/movieList"

import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { Link } from "react-router-dom"

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
    slidesToSlide: 2, // optional, default to 1.
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5,
    partialVisibilityGutter: 40,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
    partialVisibilityGutter: 40,
    slidesToSlide: 1, // optional, default to 1.
  },
}

type MovieCardProps = {
  list: ListType
  autoPlay?: boolean
}

const MovieCategory = ({ list, autoPlay = false }: MovieCardProps) => {
  const { movie, setMovieList } = useMovieListStore()

  const getMovieData = async () => {
    const data = await ListServices.getMovieHomePageList(list)
    console.log("data", data.data)

    if (data && data.data) {
      setMovieList(list, {
        data: data.data.results,
        loading: false,
        error: null,
      })
    }
  }

  useEffect(() => {
    getMovieData()
  }, [])
  console.log("movie", list, movie)

  function capitalizeAndReplaceUnderscore(input: string): string {
    const capitalized = input.charAt(0).toUpperCase() + input.slice(1)
    return capitalized.replace(/_/g, " ")
  }
  return (
    <div className="flex flex-col gap-y-4 pt-4 pb-9 pl-4 ">
      <div className="text-3xl">{capitalizeAndReplaceUnderscore(list)}</div>
      <Carousel
        centerMode={true}
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={autoPlay}
        autoPlaySpeed={900}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {movie[list].data.map((res: MovieDetail) => (
          <div key={`${list} movie ${res.title}`}>
            <Link to={`/detail/${res.title}`} state={{ id: res.id }}>
              <img
                className="rounded-lg border-2 border-transparent hover:border-white"
                src={`https://image.tmdb.org/t/p/w185${res.poster_path}`}
                alt="movie_image"
              />
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default MovieCategory
