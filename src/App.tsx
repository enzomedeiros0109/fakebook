import { Outlet } from "react-router"
import Header from "./components/layout/header"

const App = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <Outlet />
  </div>
)

export default App
