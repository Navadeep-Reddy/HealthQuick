import React, {useState} from 'react'
import { CiCirclePlus } from "react-icons/ci";



const MealInput = () => {
  const [mealsList, setMeal] = useState([]);

  return (
    <div className='bg-red-400 w-full mt-5'>
        <CiCirclePlus className='text-3xl' />
    </div>
  )
}

export default MealInput
