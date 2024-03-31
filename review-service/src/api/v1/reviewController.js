const Review = require("../../db/Review")

const findByPost = async (req, res) => {
    let reviewQuery = await Review.find({postId: req.params.id});

    res.json({
        success: true,
        data: reviewQuery
    })
}
const findById = async (req, res) => {
    let reviewQuery = await Review.findById(req.params.id);
    res.json({
        success: true,
        data: reviewQuery 
    })
}


module.exports = {
    findByPost,
    findById
}