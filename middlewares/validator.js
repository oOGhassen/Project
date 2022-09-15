const express = require("express");
const { check, validationResult } = require("express-Validator");

exports.addproductRules = () => [
    check("ProductName", "This field is required").notEmpty(),
    check("description", "This field is required").notEmpty(),
    check("price", "This field is required").notEmpty(),
    check("imageUrl", "This field is required").notEmpty(),
    check("countInStock", "This field is required").notEmpty(),

];
exports.validator = (req, res, next) => {
    const errors = validationResult(req);
    return errors.isEmpty()
        ? next()
        : res.status(400).json({ errors: errors.array() })
};