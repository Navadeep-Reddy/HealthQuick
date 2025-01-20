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
- **Meal Logging**: Users can log their meals to get nutritional information about their meals graphically.
- **MacroNutrient Analysis**: Get a verdict of their current diet and also display the recommended amounts of macros using Gemini API.
  
## Tech Stack
- **Frontend**: ReactJS
- **Backend**: ExpressJS
- **Database**: MongoDB
- **Authentication**: Google OAuth using Firebase
- **API**: Gemini API (for nutritional analysis)


```markdown
# Steps to Run

Follow these steps to run the project locally:

## 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/your-username/HealthQuick.git
```

## 2. Set Up the Server

* Navigate to the `server` directory:

```bash
cd HealthQuick/server
```

* Install dependencies:

```bash
npm install
```

* Open `controller.js` and provide the following:
  * **MongoDB connection string**: Make sure you replace the placeholder with your actual MongoDB connection string.
  * **Google Gemini API Key**: Add your API key for the Gemini API in the relevant field.

* Start the server:

```bash
node server.js
```

## 3. Set Up the Client

* Open a new terminal window and navigate to the `client` directory:

```bash
cd HealthQuick/client
```

* Install the dependencies:

```bash
npm install
```

* Start the client:

```bash
npm run dev
```

## 4. Access the Application

Once both the server and client are running, open your browser and visit:

```
http://localhost:3000
```

This will load the HealthQuick web application.


