import Hero from "../../components/Hero/Hero"
import Navbar from "../../components/Navbar/Navbar"
import "./Home.css"

function Home() {
  return (
    <>
      <header>
        <Navbar/>
        <Hero/>
      </header>
    </>
  )
}

export default Home