const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: false},
    description: {type: String, required: true, unique: false},
    seller: {type: String, required: true, unique: false}
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;