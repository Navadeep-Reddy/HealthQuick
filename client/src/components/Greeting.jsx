import React from 'react'
import { useUser } from '../context/UserContext'

const Greeting = () => {  

  //Always check if userDetails is not null(use default if it is) and only then use it
  const { userDetails } = useUser();
  

  return (
    <div className='flex justify-center w-full mx-5 flex-col'>
      <div className='flex items-center gap-x-2'>
        <h1 className='text-2xl font-semibold text-TBlack'>Hi {userDetails? userDetails.name : "Guest"}</h1>
        <img src={userDetails? userDetails.photo : "./src/assets/user.png"}  className='w-6 h-6 rounded-xl' ></img>
      </div>

      <p className='mt-3'>
        Welcome to HealthQuick! Track your meals, analyze your nutrition,<br />
        and compete with friends on the leaderboard to become the healthiest version of yourself!
      </p>
    </div>
  )
}

export default Greeting
