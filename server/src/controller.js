const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("AIzaSyAEgDO5u4HX2vHsOFrepxChz6WhUKmTd5w");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const getRecommendFood = async (req, res) => {
  try {
    const { prompt } = req.body;
    
    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const structuredPrompt = `Return ONLY a raw JSON object (no markdown, no backticks) with nutritional information for ${prompt} with this exact structure an ddnt mention the units:
    {
      "Proteins": "<value> g",
      "Carbs": "<value> g",
      "Fats": "<value> g",
      "Calories": "<value> cal"
    }`;

    const response = await model.generateContent(structuredPrompt);
    let jsonString = response.response.text().trim();
    
    // Remove any markdown formatting if present
    if (jsonString.includes("```")) {
      jsonString = jsonString.replace(/```json\n|\n```|```/g, "");
    }
    
    const nutritionData = JSON.parse(jsonString);
    return res.json(nutritionData);
  } catch (error) {
    console.error("Error details:", error);
    return res.json({"Proteins":"0","Carbs":"0","Fats":"0","Calories":"0"});
  }
};

module.exports = {
  getRecommendFood
}