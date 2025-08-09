import Nav from "./components/Nav"
import Hero from "./components/Hero"
import About from "./components/About"
import Exp from "./components/Exp"
import Resume from "./components/Resume"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App () {
  return(
    <main className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <Nav/>

      <section id="Hero" 
              className="min-h-screen w-full flex items-center justify-center"
      >

        <Hero/>

        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </section>

      <section id="About" 
              className="min-h-screen w-full flex items-start pt-[60px]">

        <About/>

        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </section>

      <section id="Exp" 
              className="min-h-screen w-full flex items-start justify-center pt-[60px]">

        <Exp/>

        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </section>

      <section id="Resume" 
              className="min-h-screen w-full flex items-start justify-center pt-[60px]">

        <Resume/>

        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </section>

      <section id="Contact" 
              className="min-h-screen w-full flex items-center justify-center">

        <Contact/>

        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </section>


      <footer id="Footer" 
              className="w-full h-[60px] flex items-center justify-center">

        <Footer/>

        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </footer>
    </main>
  )
}

export default App