import { createBrowserRouter } from "react-router"
import App from "./App"
import ErrorPage from "./pages/error-page"
import HomePage from "./pages/home-page"
import NotFoundPage from "./pages/not-found-page"
import ProfilePage from "./pages/profile-page"

export const router = createBrowserRouter([
   {
      path: "/",
      Component: App,
      children: [
         {
            ErrorBoundary: ErrorPage,
            children: [
               { index: true, Component: HomePage },
               { path: "profile/:userId?", Component: ProfilePage },
               { path: "*", Component: NotFoundPage },
            ],
         },
      ],
   },
])
