const Product = require("../../db/Product")
const axios = require("axios");
const flatted = require("flatted");


const getAll = async (req, res) => {
    let productQuery = await Product.find({});
    
    res.json({
        success: true,
        data: productQuery
    })
}

const findById = async (req, res) => {
    let productQuery = await Product.findById(req.params.id);
    let reviewQuery = (await axios.get(`http://localhost:3046/api/v1/post/${req.params.id}`));
    
    console.log(reviewQuery);
    
    res.json({
        success: true,
        data: {...productQuery._doc, reviews: reviewQuery.data}
    })
}


module.exports = {
    getAll,
    findById
}