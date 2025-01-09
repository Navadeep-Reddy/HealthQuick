import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import axios from 'axios'

const MealInput = ({mealsList, setMealsList, setResult}) => {
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
      const response = await axios.post('http://localhost:3000/health/api/v1/recom', { prompt: filteredMeals[0] });
      results.push(response.data);

      // Convert string values to numbers and set the result
      setResult([
        { name: 'Proteins', value: parseFloat(results[0].Proteins) || 0 },
        { name: 'Carbs', value: parseFloat(results[0].Carbs) || 0 },
        { name: 'Fats', value: parseFloat(results[0].Fats) || 0 },
        { name: 'Calories', value: parseFloat(results[0].Calories) || 0 },
      ]);

      console.log('Updated Result:', results[0]);
    } catch (error) {
      console.error(error.response || error.message);
    }
  };

  return (
    <div className="w-[50%] mt-[60px] flex flex-col items-center">
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
        className="mt-6 bg-DGreen text-white px-4 py-2 rounded-md hover:bg-LGreen hover:text-TBlack"
      >
        Calculate
      </button>
    </div>
  );
};

export default MealInput;