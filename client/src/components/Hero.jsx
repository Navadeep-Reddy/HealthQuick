import React from 'react'
import Greeting from './Greeting'
import Navigation from './Navigation'
import MealBox from './MealBox'


const Hero = () => {
  return (
    <div className='w-[80%] mx-auto my-[110px]  h-[100vh]'>
      <Navigation />
      <Greeting />
      <MealBox />
    </div>
  )
}

export default Hero
