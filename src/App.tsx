import { RouterProvider, createBrowserRouter } from "react-router-dom"
import HomePage from "./pages/home"
import ProfilePage from "./pages/profileLogin"
import DetailPage from "./pages/detail"
import TVShowPage from "./pages/tvshows"
import MovieShowPage from "./pages/movieshows"
import NewAndPopularPage from "./pages/new&popular"
import MyList from "./pages/myList"
import SearchPage from "./pages/Search"

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <ProfilePage /> },
    { path: "/homepage", element: <HomePage /> },
    { path: "/tvShow", element: <TVShowPage /> },
    { path: "/movies", element: <MovieShowPage /> },
    { path: "/newAndPopular", element: <NewAndPopularPage /> },
    { path: "/detail/:name", element: <DetailPage /> },
    { path: "/myList", element: <MyList /> },
    { path: "/searchPage", element: <SearchPage /> },
  ])
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
