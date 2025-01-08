import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import axios from 'axios'

const MealInput = () => {
  const [mealsList, setMealsList] = useState([""]); // Initial state with one input box

  // Handle adding a new input box
  const handleAddInput = () => {
    setMealsList([...mealsList, ""]); // Add a new empty input box
  };

  // Handle changing the value of a specific input
  const handleInputChange = (value, index) => {
    const updatedMeals = [...mealsList];
    updatedMeals[index] = value;
    setMealsList(updatedMeals);
  };

const handleSubmit = async () => {
  const filteredMeals = mealsList.filter((meal) => meal.trim() !== ""); // Remove empty inputs
  const results = [];

  // Use for...of to handle async operations properly
  for (const meal of filteredMeals) {
    try {
      const response = await axios.post('http://localhost:3000/health/api/v1/recom', { prompt: meal });
      results.push(response.data); // Store the results if needed
    } catch (error) {
      console.error(error.response || error.message);
    }
  }

  console.log('All results:', results);
};


  return (
    <div className="w-[50%] mt-[60px] flex flex-col items-center">
      <p className="text-2xl text-TBlack font-medium mb-4">Add Meals</p>

      {/* Render input fields */}
      {mealsList.map((meal, index) => (
        <div key={index} className="flex items-center mb-2 w-full">
          <input
            type="text"
            value={meal} //this is so that the next time onChange is called, it uses the last updated value as e.target.value is being sent to the function
            onChange={(e) => handleInputChange(e.target.value, index)}
            placeholder={`Meal ${index + 1}`}
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-DGreen"
          />
        </div>
      ))}

      {/* Add Meal Button */}
      <div className="flex items-center mt-4">
        <CiCirclePlus
          className="text-5xl mx-2 text-TBlack hover:text-DGreen stroke-1 cursor-pointer"
          onClick={handleAddInput}
        />
        <p className="text-lg text-TBlack font-medium">Add another meal</p>
      </div>

      {/* Submit Button */}
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
