# HealthQuick

HealthQuick is a health tracking web application that allows users to log and analyze their macro-nutrient intake smartly with flexible food descriptions and the app provides a verdict on the user diet along with expected values for a balanced diet using Gemini API and also calculates the total values of Proteins, Carbs, Fats, and Calories based on meals logged. This project uses ReactJS for the frontend, ExpressJS for the backend, and MongoDB for storing user and meal data.

![image alt](https://github.com/Navadeep-Reddy/ProjectScreenshots-/blob/cb8938497c85130e38033e5395ef21c0fd33411d/HealthQuick%20Screenshots/Screenshot%20from%202025-01-20%2022-27-29.png)  
<p align="center">
  Authentication Page
</p>

![image alt](https://github.com/Navadeep-Reddy/ProjectScreenshots-/blob/cb8938497c85130e38033e5395ef21c0fd33411d/HealthQuick%20Screenshots/Screenshot%20from%202025-01-20%2022-28-18.png)  
<p align="center">
  Graphical Representation of macro nutrient distribution with flexible food description inputs
</p>

![image alt](https://github.com/Navadeep-Reddy/ProjectScreenshots-/blob/cb8938497c85130e38033e5395ef21c0fd33411d/HealthQuick%20Screenshots/Screenshot%20from%202025-01-20%2022-28-53.png)  
<p align="center">
  Recommended macros along with verdict based on current user macros
</p>

## Features
- **Login with Google**: Authenticate users via Google login.
- **Meal Logging**: Users can log their meals with nutritional information like Proteins, Carbs, Fats, and Calories.
- **MacroNutrient Analysis**: Get a total sum of Proteins, Carbs, Fats, and Calories based on logged meals.
  
## Tech Stack
- **Frontend**: ReactJS
- **Backend**: ExpressJS
- **Database**: MongoDB
- **Authentication**: Google OAuth using Firebase
- **API**: Gemini API (for nutritional analysis)
