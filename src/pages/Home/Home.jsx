import Hero from "../../components/Hero/Hero"
import Navbar from "../../components/Navbar/Navbar"
import ProductGrid from "../../components/Product/Product"
import "./Home.css"

function Home() {
  return (
    <>
      <header>
        <Navbar/>
        <Hero/>
        <ProductGrid/>
      </header>
    </>
  )
}

export default Home