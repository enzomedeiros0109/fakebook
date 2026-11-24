import { createBrowserRouter } from "react-router"
import App from "./App"
import HomePage from "./pages/home-page"
import ProfilePage from "./pages/profile-page"

export const router = createBrowserRouter([
   {
      path: "/",
      Component: App,
      children: [
         { index: true, Component: HomePage },
         { path: "profile/:userId?", Component: ProfilePage },
      ],
   },
])
