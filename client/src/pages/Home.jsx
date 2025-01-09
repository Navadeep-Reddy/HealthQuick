import React from 'react'
import Greeting from '../components/Greeting'
import Navigation from '../components/Navigation'
import MealInput from '../components/MealInput'
import MealBox from '../components/MealBox'

const Home = () => {
  return (
    <div className='w-[80%] mx-auto my-[110px]  h-20'>
      <Navigation />
      <Greeting />
      <MealBox />
    </div>
  )
}

export default Home
