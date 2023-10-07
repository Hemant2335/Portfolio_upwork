import Navbar from './Components/Navbar'
import Profile from './Components/Profile'
import Intro from './Components/Intro'
import About from './Components/About'
import Loading from './Components/Loading'
import Education from './Components/Education'
import './App.css'
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

function App() {

  // Gsap Animations
  useEffect(() => {

    gsap.fromTo(".title", {y:100 , opacity : 0},{
      opacity: 100,
      y: 0,
      duration: 2,
      ease: "power3.out",
      stagger : 0.25
    })
    gsap.fromTo(".abt-title", {y:200 , opacity : 0},{
      scrollTrigger: {
        trigger: ".abt-title",
        start: "top 90%",
        end: "bottom 20%",
        toggleActions: "restart none none none",
        shadowRoot: true,
      },
      opacity: 100,
      y: 0,
      duration: 2,
      ease: "ease-in-out",
      stagger : 0.25
    })
    gsap.fromTo(".edu-title", {y:200 , opacity : 0},{
      scrollTrigger: {
        trigger: ".edu-title",
        start: "top 90%",
        end: "bottom 20%",
        toggleActions: "restart none none none",
        shadowRoot: true,
      },
      opacity: 100,
      y: 0,
      duration: 2,
      ease: "ease-in-out",
      stagger : 0.25
    })
  
  }, [])

  


  return (
    <>
    <Loading/>
    <Navbar/>
    <Profile/>
    <Intro/>
    <About/>
    <Education/>
    </>
    
  )
}

export default App
