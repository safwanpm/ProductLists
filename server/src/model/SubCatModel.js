const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://safwanpm0:safwanpm0@cluster0.dk6pqys.mongodb.net/ProductList?retryWrites=true&w=majority')

const Schema = mongoose.Schema
const SubCatSchema = new Schema({
    categoryId:{type: mongoose.Types.ObjectId, ref: "category_tb"},
    sub_category:{type:String},
    category:{type:String},
})
const SubCatModel = mongoose.model('sub-category-tb',SubCatSchema)
module.exports = SubCatModel