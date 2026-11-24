import Header from "./components/layout/header"
import Profile from "./pages/profile-page"

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* <Home /> */}
      <Profile isOwner={true}/>
    </div>
  )
}

export default App
