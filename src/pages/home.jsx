import Header from "../components/home/header"
import Hero from "../components/home/hero"
import Features from "../components/home/features"
import Content from "../components/home/content"
import Gallery from "../components/home/gallery"
import Partners from "../components/home/partners"
import Testomonials from "../components/home/testomonials"
import Footer from "../components/home/footer"

export default function Home() {
    return(
        <div class="bg-[#181818] ">
            <Header />
            <Hero />
            <Features />
            <Content />
            <Gallery />
            <Partners />
            <Testomonials />
            <Footer />
        </div>
    )
}