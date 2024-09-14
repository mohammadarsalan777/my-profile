import React, { useContext, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ThemeContext from './context/ThemeContext'



const App = () => {

  const [themeToggle, setThemeToggle] = useState(null)

  const handleThemeToggler = (data) => {
    setThemeToggle(data)
  }
  return (
    <div className=' overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className={`${themeToggle ? 'background__color' : 'absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'}`}>
        </div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar handleThemeToggler={handleThemeToggler} />
        <Hero themeToggle={themeToggle} />
        <section id='about'>
          <About themeToggle={themeToggle} />
        </section>

        <section id='skills'>
          <Technologies themeToggle={themeToggle} />
        </section>

        <section id='experience'>
          <Experience themeToggle={themeToggle} />
        </section>

        <section id='project'>
          <Projects themeToggle={themeToggle} />
        </section>

        <section id='contact'>
          <Contact themeToggle={themeToggle} />
        </section>
        <Footer themeToggle={themeToggle} />
      </div>

    </div>
  )
}

export default App
