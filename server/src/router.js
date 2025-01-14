const { Router } = require("express");
const router = Router();
const controller = require('./controller');

router.post('/recom', controller.postRecommendFood)

router.get('/userid:googleid', controller.getUserId)

router.post('/mealLog', controller.postMeal)


module.exports = router;