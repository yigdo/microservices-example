const { default: mongoose } = require("mongoose");

const reviewSchema = new mongoose.Schema({
    reviewOwner: {type: String, required: true, unique: false},
    reviewTitle: { type: String, required: true, unique: false },
    reviewBody: { type: String, required: true, unique: false },
    postId: {type: String, required: true, unique: false}
});

const Product = mongoose.model('Review', reviewSchema);

module.exports = Product;