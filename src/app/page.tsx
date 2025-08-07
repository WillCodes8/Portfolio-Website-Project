import Nav from "./components/Nav"
import Hero from "./components/Hero"
import About from "./components/About"
import Exp from "./components/Exp"
import Resume from "./components/Resume"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App () {
  return(
    <main className="relative flex flex-col items-center justify-center bg-background min-h-screen overflow-hidden">
      <Nav/>

      <section id="Hero" className="min-h-screen w-full flex items-center justify-center">
        <Hero/>
      </section>

      <section id="About" className="bg-red-600 min-h-screen w-full flex items-center justify-center">
        <About/>
      </section>

      <section id="Exp" className="bg-blue-600 min-h-screen w-full flex items-center justify-center">
        <Exp/>
      </section>

      <section id="Resume" className="bg-green-600 min-h-screen w-full flex items-center justify-center">
        <Resume/>
      </section>

      <section id="Contact" className="bg-purple-600 min-h-screen w-full flex items-center justify-center">
        <Contact/>
      </section>


      <footer id="Footer" className="bg-yellow-200 w-full h-[60px] flex items-center justify-center">
        <Footer/>
      </footer>
    </main>
  )
}

export default App