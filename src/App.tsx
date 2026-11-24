import Header from "./components/layout/header"
import ProfilePage from "./pages/profile-page"

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* <Home /> */}
      <ProfilePage isOwner={true}/>
    </div>
  )
}

export default App
