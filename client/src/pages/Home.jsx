import {React, useRef, useEffect, useState} from 'react'
import MacroAnal from '../components/MarcoAnal'
import Hero from '../components/Hero'

const Home = () => {
  const AnalRef = useRef();

  const [macroVisible, setMacroVisible] = useState(null);

  useEffect(() => {
    
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      console.log(entry.isIntersecting)
      //use isIntersecting rather than isVisible as it only works if element is actually visible rather than just intersecting the page
      setMacroVisible(entry.isIntersecting)

    })
    observer.observe(AnalRef.current)
  }, [])

  return (
    <div >
      <Hero />
      <div ref = {AnalRef} >
        {macroVisible && (
          <MacroAnal />
        )

        }
      </div>
    </div>
  )
}

export default Home
