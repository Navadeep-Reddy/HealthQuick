  import React, { useState } from 'react';
  import MealInput from './MealInput';
  import NutrientChart from './NutrientChart';
  import axios from 'axios';
  import { useUser } from "../context/UserContext";

  const MealBox = () => {
    const [message, setMessage] = useState(false)
    const [mealsList, setMealsList] = useState([""]);
    const [result, setResult] = useState([
      { name: 'Proteins', value: 0 },
      { name: 'Carbs', value: 0 },
      { name: 'Fats', value: 0 },
    ]);

    const {userDetails} = useUser();

    const [calories, setCalories] = useState(0);

    const postToDatabase = async () => {
      let Proteins = 0;
      let Carbs = 0;
      let Fats = 0;

      console.log(userDetails.id)


      for(const item of result){
        if (item.name === 'Proteins (g)') {Proteins = item.value;}
        else if (item.name === 'Carbs (g)') {Carbs = item.value}
        else if (item.name === 'Fats (g)') {Fats = item.value}
      }

      try{
        await axios.post('http://localhost:3000/health/api/v1/mealLog', {
          Proteins,
          Carbs,
          Fats,
          Calories: calories,
          UserName: userDetails.name,
          UserEmail: userDetails.email,
          UserId: userDetails.id  
        });
        setMessage(true)

      }
      catch(error){
        console.error('Error posting meal', error)
      }

    }

    return (
      <div className="flex">
        <div className="w-[50%] text-center">
          <MealInput
            mealsList={mealsList}
            setMealsList={setMealsList}
            setResult={setResult}
            setCalories={setCalories}
          />
          {calories > 0 && (
            <button className="my-2 w-32 bg-DGreen text-BWhite px-4 py-2 rounded-md hover:bg-LGreen hover:text-TBlack" onClick={postToDatabase}>
            Save
            </button>
          )
          }
          {message && (
            <p className='my-2'>Your meal has been logged</p>
          )

          }
        </div>

        <div className="w-[50%] flex-col items-center">
          <NutrientChart data={result} />
          {calories > 0 && (
            <h1 className="text-center font-medium text-xl text-TBlack">Calories: {calories}</h1>
          )}
        </div>

      </div>
    );
  };

  export default MealBox;
