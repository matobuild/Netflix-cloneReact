import { Link } from "react-router-dom"
import SearchBar from "./SearchBar"
import { useLocation } from "react-router-dom"

const Navbar = () => {
  const location = useLocation()
  console.log("LOCATION", location)

  return (
    <nav className="bg-gray-900  w-full z-20 top-0 start-0 border-b border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to={`/homepage`}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            NetFLIX
          </span>
        </Link>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col items-center p-4 md:p-0 mt-4 font-medium border rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-gray-900  bg-gray-800  border-gray-700">
            <li>
              <Link
                to={`/homepage`}
                className={
                  location.pathname === "/homepage"
                    ? "block py-2 px-3 text-lg text-white bg-blue-700 rounded md:bg-transparent md:p-0 md:text-blue-500"
                    : "block py-2 px-3 rounded  md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                }
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={`/tvShow`}
                className={
                  location.pathname === "/tvShow"
                    ? "block py-2 px-3 text-lg text-white bg-blue-700 rounded md:bg-transparent md:p-0 md:text-blue-500"
                    : "block py-2 px-3 rounded  md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                }
              >
                Tv Shows
              </Link>
            </li>
            <li>
              <Link
                to={`/movies`}
                className={
                  location.pathname === "/movies"
                    ? "block py-2 px-3 text-lg text-white bg-blue-700 rounded md:bg-transparent md:p-0 md:text-blue-500"
                    : "block py-2 px-3 rounded  md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                }
              >
                Movies
              </Link>
            </li>
            <li>
              <Link
                to={`/newAndPopular`}
                className={
                  location.pathname === "/newAndPopular"
                    ? "block py-2 px-3 text-lg text-white bg-blue-700 rounded md:bg-transparent md:p-0 md:text-blue-500"
                    : "block py-2 px-3 rounded  md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                }
              >
                New & Popular
              </Link>
            </li>
            <li>
              <Link
                to={`/myList`}
                className={
                  location.pathname === "/myList"
                    ? "block py-2 px-3 text-lg text-white bg-blue-700 rounded md:bg-transparent md:p-0 md:text-blue-500"
                    : "block py-2 px-3 rounded  md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                }
              >
                My List
              </Link>
            </li>

            <li>
              <Link
                to={`/searchPage`}
                className={
                  location.pathname === "/searchPage"
                    ? "block py-2 px-3 text-lg text-white bg-blue-700 rounded md:bg-transparent md:p-0 md:text-blue-500"
                    : "block py-2 px-3 rounded  md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                }
              >
                Search
              </Link>
            </li>
          </ul>
        </div>
        <div></div>
      </div>
    </nav>
  )
}

export default Navbar
