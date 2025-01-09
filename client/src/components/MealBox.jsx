import React, {useState} from 'react'
import MealInput from './MealInput'
import NutrientChart from './NutrientChart'

const MealBox = () => {
  const [mealsList, setMealsList] = useState([""]);
  const [result, setResult] = useState([
    { name: 'Proteins', value: 0 },
    { name: 'Carbs', value: 0 },
    { name: 'Fats', value: 0 },
    { name: 'Calories', value: 0 },
  ]);

  return (
    <div className='flex'>
      <MealInput mealsList={mealsList} setMealsList={setMealsList} setResult={setResult} />
      <NutrientChart data = {result}/>
    </div>
  )
}

export default MealBox
