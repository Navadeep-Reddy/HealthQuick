import React from 'react'
const placeholder = "Placeholder"
const Greeting = () => {
  return (
    <div className='flex justify-center w-full h-full mx-5 flex-col'>
      <h1 className='text-2xl font-semibold text-TBlack'>Hi {placeholder}</h1>
      <p className='mt-3'>
      Welcome to HealthQuick! Track your meals, analyze your nutrition,<br></br> and compete with friends on the leaderboard to become the healthiest version of yourself!
      </p>
    </div>
  )
}

export default Greeting
