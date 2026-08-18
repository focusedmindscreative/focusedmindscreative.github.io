import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Industry from './components/Industry.jsx'
import HowWeWork from './components/HowWeWork.jsx'
import Project from './components/Project.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Industry />
        <HowWeWork />
        <Project />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}