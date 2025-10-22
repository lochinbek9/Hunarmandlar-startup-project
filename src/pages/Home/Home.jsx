import Hero from "../../components/Hero/Hero"
import Navbar from "../../components/Navbar/Navbar"
import ProductGrid from "../../components/Product/Product"
import TopProduct from "../../components/TopProduct/TopProduct"
import "./Home.css"

function Home() {
  return (
    <>
      <header>
        <Navbar/>
        <Hero/>
        <ProductGrid/>
        <TopProduct/>
      </header>
    </>
  )
}

export default Home