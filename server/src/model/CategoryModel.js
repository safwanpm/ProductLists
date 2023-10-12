const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://safwanpm0:safwanpm0@cluster0.dk6pqys.mongodb.net/ProductList?retryWrites=true&w=majority")

const Schema = mongoose.Schema
const CategorySchema = new Schema({
    category: { type: String }
})

const CategoryModel = mongoose.model('category-tb', CategorySchema)
module.exports = CategoryModel
