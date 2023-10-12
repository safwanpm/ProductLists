
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://safwanpm0:safwanpm0@cluster0.dk6pqys.mongodb.net/ProductList?retryWrites=true&w=majority')

const Schema= mongoose.Schema
const ProductSchema = new Schema({
    categoryId:{ type: mongoose.Types.ObjectId, ref: "category_tb" },
    sub_categoryId:{ type: mongoose.Types.ObjectId, ref: "sub_category_tb" },
    category:{type:String},
    sub_category:{type:String},
    product:{type:String},
    type:{type:String},
})

const ProductModel = mongoose.model('product-tb',ProductSchema)
module.exports=ProductModel