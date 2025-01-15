import React, { useState } from 'react';
import MealInput from './MealInput';
import NutrientChart from './NutrientChart';

const MealBox = () => {
  const [mealsList, setMealsList] = useState([""]);
  const [result, setResult] = useState([
    { name: 'Proteins', value: 0 },
    { name: 'Carbs', value: 0 },
    { name: 'Fats', value: 0 },
  ]);
  const [calories, setCalories] = useState(0);

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
          <button className="my-2 w-32 bg-DGreen text-BWhite px-4 py-2 rounded-md hover:bg-LGreen hover:text-TBlack">
           Save
          </button>
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
