const express = require ('express');
const CategoryModel = require('../model/CategoryModel');
const ProductModel = require('../model/ProductModel');
const SubCatModel = require('../model/SubCatModel');
const RegisterRouter = express.Router()



RegisterRouter.post('/add-category', async (req, res) => {
    try {
        const { category } = req.body;
        const details = {
            category: category
        }
        const user = await CategoryModel(details).save()
        if (user) {
            return res.status(200).json({
                success: true,
                error: false,
                message: "added"
            })
        }
        else {

        }

    }
    catch (error) {
        return res.status(400).json({
            success: true,
            error: false,
            message: "can't add"
        })
    }



})
RegisterRouter.post('/add-sub_category', async (req, res) => {
    try {
        const { category,sub_category,categoryId } = req.body;
        const details = {
            category: category,
            categoryId:categoryId,
            sub_category:sub_category
        }
        const user = await SubCatModel(details).save()
        if (user) {
            return res.status(200).json({
                success: true,
                error: false,
                message: "added"
            })
        }
        else {

        }

    }
    catch (error) {
        return res.status(400).json({
            success: true,
            error: false,
            message: "can't add"
        })
    }



})
RegisterRouter.post('/add-product', async (req, res) => {
    try {
        const { category,sub_category,categoryId,sub_categoryId,product,type } = req.body;
        const details = {
            category: category,
            categoryId:categoryId,
            sub_category:sub_category,
            sub_categoryId:sub_categoryId,
            product:product,
            type:type,
        }
        const user = await ProductModel(details).save()
        if (user) {
            return res.status(200).json({
                success: true,
                error: false,
                message: "added"
            })
        }
        else {

        }

    }
    catch (error) {
        return res.status(400).json({
            success: true,
            error: false,
            message: "can't add"
        })
    }



})

RegisterRouter.get('/view-category', async (req, res) => {
    // const  {name,category ,description,image,price}=req.body
    // console.log(req.body);
    
    const productData = await CategoryModel.find()
    try {
        if (productData) {
            return res.status(200).json({
                success: true,
                error: false,
                data: productData
            })
        }
    }
    catch (error) {
    }
}
)
RegisterRouter.get('/view-sub_category/:category', async (req, res) => {
    // const  {name,category ,description,image,price}=req.body
    // console.log(req.body);
    const category = req.params.category
    const productData = await SubCatModel.find({category})
    try {
        if (productData) {
            return res.status(200).json({
                success: true,
                error: false,
                data: productData
            })
        }
    }
    catch (error) {
    }
}
)

RegisterRouter.get('/view-product/:id', async (req, res) => {
    // const  {name,category ,description,image,price}=req.body
    // console.log(req.body);
    const productId = req.params.id
    const productData = await CategoryModel.find({id:productId})
    try {
        if (productData) {
            return res.status(200).json({
                success: true,
                error: false,
                data: productData
            })
        }
    }
    catch (error) {
    }
}
)




module.exports = RegisterRouter