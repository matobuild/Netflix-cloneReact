import { RouterProvider, createBrowserRouter } from "react-router-dom"
import HomePage from "./pages/home"
import ProfilePage from "./pages/profileLogin"
import DetailPage from "./pages/detail"

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <ProfilePage /> },
    { path: "/homepage", element: <HomePage /> },
    { path: "/detail", element: <DetailPage /> },
  ])
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
