import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

const Navbar = () => {
  const location = useLocation()
  console.log("LOCATION", location)

  return (
    <nav className="start-0  top-0 z-20 w-full border-b border-gray-600 bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link
          to={`/homepage`}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-2xl font-semibold text-white">
            NetFLIX
          </span>
        </Link>

        <div
          className=" w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="navbar-sticky"
        >
          <ul className="mt-4 flex flex-col items-center rounded-lg border border-gray-700 bg-gray-800 p-4  font-medium rtl:space-x-reverse md:mt-0 md:flex-row md:space-x-8 md:border-0  md:bg-gray-900  md:p-0">
            <li>
              <Link
                to={`/homepage`}
                className={
                  location.pathname === "/homepage"
                    ? "block rounded bg-blue-700 px-3 py-2 text-lg text-white md:bg-transparent md:p-0 md:text-blue-500"
                    : "block rounded border-gray-700 px-3  py-2 text-white hover:bg-gray-700 hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-500"
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
                    ? "block rounded bg-blue-700 px-3 py-2 text-lg text-white md:bg-transparent md:p-0 md:text-blue-500"
                    : "block rounded border-gray-700 px-3  py-2 text-white hover:bg-gray-700 hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-500"
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
                    ? "block rounded bg-blue-700 px-3 py-2 text-lg text-white md:bg-transparent md:p-0 md:text-blue-500"
                    : "block rounded border-gray-700 px-3  py-2 text-white hover:bg-gray-700 hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-500"
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
                    ? "block rounded bg-blue-700 px-3 py-2 text-lg text-white md:bg-transparent md:p-0 md:text-blue-500"
                    : "block rounded border-gray-700 px-3  py-2 text-white hover:bg-gray-700 hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-500"
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
                    ? "block rounded bg-blue-700 px-3 py-2 text-lg text-white md:bg-transparent md:p-0 md:text-blue-500"
                    : "block rounded border-gray-700 px-3  py-2 text-white hover:bg-gray-700 hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-500"
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
                    ? "block rounded bg-blue-700 px-3 py-2 text-lg text-white md:bg-transparent md:p-0 md:text-blue-500"
                    : "block rounded border-gray-700 px-3  py-2 text-white hover:bg-gray-700 hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-500"
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
