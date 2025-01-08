import React, {useState} from 'react'
import { CiCirclePlus } from "react-icons/ci";



const MealInput = () => {
  const [mealsList, setMeal] = useState([]);

  return (
    <div className=' w-[50%] mt-[60px] flex items-center justify-center'>
        <p className='mx-2 text-2xl text-TBlack'>Add meal</p>
        <CiCirclePlus className='text-5xl mx-2 text-DGreen' />
    </div>
  )
}

export default MealInput
