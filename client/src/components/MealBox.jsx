import React from 'react'
import MealInput from './MealInput'
import NutrientChart from './NutrientChart'

const MealBox = () => {
  return (
    <div className='flex'>
      <MealInput />
      <NutrientChart />
    </div>
  )
}

export default MealBox
