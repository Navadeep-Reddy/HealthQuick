const { Router } = require("express");
const router = Router();
const controller = require('./controller');

router.post('/sampleAPI', controller.getRecommendFood)




module.exports = router;