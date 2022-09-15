const express = require('express');
const { addproduct } = require('../controllers/product.controller');
// const { addproductRules,  } = require('../middlewares/Validator');
const router = express.Router();

router.post("/addproduct",  addproduct);


module.exports = router;

