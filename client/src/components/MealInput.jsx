import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import axios from 'axios'

const MealInput = ({mealsList, setMealsList, setResult, setCalories}) => {
  const handleAddInput = () => {
    setMealsList([...mealsList, ""]);
  };

  const handleInputChange = (value, index) => {
    const updatedMeals = [...mealsList];
    updatedMeals[index] = value;
    setMealsList(updatedMeals);
  };


  const handleSubmit = async () => {
    const filteredMeals = mealsList.filter((meal) => meal.trim() !== "");
    const results = [];

    try {
      for(const value of filteredMeals){
        const response = await axios.post('http://localhost:3000/health/api/v1/recom', { prompt: value });
        results.push(response.data);
      }

      let calories = 0;
      let proteins = 0;
      let carbs = 0
      let fats = 0;

      for (let i = 0; i < results.length; i++){
        calories += parseInt(results[i].Calories)
        proteins += parseInt(results[i].Proteins)
        carbs += parseInt(results[i].Carbs)
        fats += parseInt(results[i].Fats)
      }

      // Convert string values to numbers and set the result
      setResult([
        { name: 'Proteins (g)', value: parseFloat(proteins) || 0 },
        { name: 'Carbs (g)', value: parseFloat(carbs) || 0 },
        { name: 'Fats (g)', value: parseFloat(fats) || 0 },
        //{ name: 'Calories', value: parseFloat(results[0].Calories) || 0 },
      ]);
      setCalories(calories);

      console.log('Updated Result:', results);
    } catch (error) {
      console.error(error.response || error.message);
    }
  };

  return (
    <div className="w-[100%] mt-[60px] flex flex-col items-center">
      <p className="text-2xl text-TBlack font-medium mb-4">Add Meals</p>
      {mealsList.map((meal, index) => (
        <div key={index} className="flex items-center mb-2 w-full">
          <input
            type="text"
            value={meal}
            onChange={(e) => handleInputChange(e.target.value, index)}
            placeholder={`Meal ${index + 1}`}
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-DGreen"
          />
        </div>
      ))}
      <div className="flex items-center mt-4">
        <CiCirclePlus
          className="text-5xl mx-2 text-TBlack hover:text-DGreen stroke-1 cursor-pointer"
          onClick={handleAddInput}
        />
        <p className="text-lg text-TBlack font-medium">Add another meal</p>
      </div>
      <button
        onClick={handleSubmit}
        className="mt-6 w-32 bg-DGreen text-BWhite px-4 py-2 rounded-md hover:bg-LGreen hover:text-TBlack"
      >
        Calculate
      </button>
    </div>
  );
};

export default MealInput;