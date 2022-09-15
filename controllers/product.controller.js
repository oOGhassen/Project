const Product = require("../models/Product");

exports.addproduct = async(req,res) => {

    const {productName,description,price,countInStock,imageUrl} = req.body;
   try {
    const existantProduct = await product.findOne({productName})
    if(existantProduct) res.status(400).json({msg:'Product already exists'})
    const newProduct = new Product({
        productName,
        description,
        price,
        countInStock,
        imageUrl
    });
    await newProduct.save();
    res.status(200).send(newProduct);
   } catch (error) {
    res.status(500).json({msg: error.message});
   }
};