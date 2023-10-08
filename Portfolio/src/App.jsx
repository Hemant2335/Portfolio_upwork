import Navbar from './Components/Navbar'
import Profile from './Components/Profile'
import Intro from './Components/Intro'
import About from './Components/About'
import Loading from './Components/Loading'
import Education from './Components/Education'
import Services from './Components/Services'
import Skills from './Components/Skills'
import Portfolio from './Components/Portfolio'
import './App.css'
import { useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);
import Context from './context/Context'
import { useContext } from 'react'


function App() {

  const {isLoading} = useContext(Context);
  const [currcomp, setcurrcomp] = useState("");

  // Gsap Animations
  useEffect(() => {
          
    gsap.fromTo(".title", {y:100 , opacity : 0},{
      scrollTrigger: {
        trigger: ".title",
        start: "top 90%",
        end: "bottom 20%",
        toggleActions: "restart none none none",
        shadowRoot: true,
        onToggle: ({ isActive }) => {
          if (isActive) {
            setcurrcomp("Home"); 
          }
        },
      },
      opacity: 100,
      y: 0,
      duration: 2,
      ease: "power3.out",
      stagger : 0.25,
      
    })
    gsap.fromTo(".profile", {x:200 , opacity : 0},{
      scrollTrigger: {
        trigger: ".profile",
        start: "top 90%",
        end: "bottom 20%",
        toggleActions: "restart none none none",
        shadowRoot: true,
      },
      opacity: 100,
      x: 0,
      duration: 2,
      ease: "power3.out",
      stagger : 0.25,
      
    })
    gsap.fromTo(".abt-title", {y:200 , opacity : 0},{
      scrollTrigger: {
        trigger: ".abt-title",
        start: "top 90%",
        end: "bottom 20%",
        toggleActions: "restart none none none",
        shadowRoot: true,
        onToggle: ({ isActive }) => {
          if (isActive) {
            setcurrcomp("About"); 
          }
        },
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
        onToggle: ({ isActive }) => {
          if (isActive) {
            setcurrcomp("Education"); 
          }
        },
        
      },
      opacity: 100,
      y: 0,
      duration: 2,
      ease: "ease-in-out",
      stagger : 0.25
    })
    gsap.fromTo(".srv-title", {y:200 , opacity : 0},{
      scrollTrigger: {
        trigger: ".srv-title",
        start: "top 90%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        shadowRoot: true,
        onToggle: ({ isActive }) => {
          if (isActive) {
            setcurrcomp("Services"); 
          }
        },
        
      },
      opacity: 100,
      y: 0,
      duration: 2,
      ease: "power3.out",
      stagger : 0.25
    })
    gsap.fromTo(".skill-title", {y:200 , opacity : 0},{
      scrollTrigger: {
        trigger: ".skill-title",
        start: "top 90%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        shadowRoot: true,
        onToggle: ({ isActive }) => {
          if (isActive) {
            setcurrcomp("Skills"); 
          }
        },
        
      },
      opacity: 100,
      y: 0,
      duration: 2,
      ease: "power3.out",
      stagger : 0.25
    })
    gsap.fromTo(".edu-edu", {x:200 , opacity : 0},{
      scrollTrigger: {
        trigger: ".edu-edu",
        start: "top 90%",
        end: "bottom 20%",
        toggleActions: "restart none none none",
        shadowRoot: true,
        onToggle: ({ isActive }) => {
          if (isActive) {
            setcurrcomp("Education"); 
          }
        },
        
      },
      opacity: 100,
      x: 0,
      duration: 2,
      ease: "ease-in-out",
      stagger : 0.25
    })
  
  }, [isLoading])

  // For the Navbar Animation

  useEffect(() => {
    console.log(currcomp);
    if(currcomp === "About"){
      document.querySelector('.nav-About').classList.add('text-[#097969]');
      document.querySelector('.nav-home').classList.remove('text-[#097969]');
      document.querySelector('.nav-Education').classList.remove('text-[#097969]');
      document.querySelector('.nav-services').classList.remove('text-[#097969]');
      document.querySelector('.nav-skill').classList.remove('text-[#097969]');
    }
    if(currcomp === "Education"){
      document.querySelector('.nav-Education').classList.add('text-[#097969]');
      document.querySelector('.nav-home').classList.remove('text-[#097969]');
      document.querySelector('.nav-About').classList.remove('text-[#097969]');
      document.querySelector('.nav-services').classList.remove('text-[#097969]');
      document.querySelector('.nav-skill').classList.remove('text-[#097969]');
    }
    if(currcomp === "Home"){
      document.querySelector('.nav-home').classList.add('text-[#097969]');
      document.querySelector('.nav-About').classList.remove('text-[#097969]');
      document.querySelector('.nav-Education').classList.remove('text-[#097969]');
      document.querySelector('.nav-services').classList.remove('text-[#097969]');
      document.querySelector('.nav-skill').classList.remove('text-[#097969]');
    }
    if(currcomp === "Services"){
      document.querySelector('.nav-services').classList.add('text-[#097969]');
      document.querySelector('.nav-home').classList.remove('text-[#097969]');
      document.querySelector('.nav-About').classList.remove('text-[#097969]');
      document.querySelector('.nav-Education').classList.remove('text-[#097969]');
      document.querySelector('.nav-skill').classList.remove('text-[#097969]');
    }
    if(currcomp === "Skills"){
      document.querySelector('.nav-skill').classList.add('text-[#097969]');
      document.querySelector('.nav-home').classList.remove('text-[#097969]');
      document.querySelector('.nav-About').classList.remove('text-[#097969]');
      document.querySelector('.nav-Education').classList.remove('text-[#097969]');
      document.querySelector('.nav-services').classList.remove('text-[#097969]');
    }

  }, [currcomp]) 



  return (
    <>
    <Loading/>
    <Navbar/>
    <Profile/>
    <Intro/>
    <About/>
    <Education/>
    <Services/>
    <Skills/>
    <Portfolio/>
    </>
    
  )
}

export default App
