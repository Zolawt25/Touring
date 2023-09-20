const Product = require("../models/Products")

const allTours = async (req, res)=>{
    const {title} = req.query
    try {
        const tourQuery = {}

        if (title) {
            tourQuery.title = {$regex: title, $options: "i"}
        }

        const product = await Product.find(tourQuery)

        res.status(200).json({product})
    } catch (error) {
         res.json({error: error.message});
    }
}
const deleteAll = async (req, res)=>{
    try {
        const product = await Product.deleteMany(req.body)

        res.status(200).json({product})
    } catch (error) {
         res.json({error: error.message});
    }
}
const createTour = async (req, res)=>{
    try {
        const product = await Product.create(req.body)

        res.status(201).json({product})
    } catch (error) {
        res.json({error: error.message});
    }
}
const getTour = async (req, res)=>{
    const {id} = req.params
    try {
        const product = await Product.findById(id)
        res.status(200).json({product})    
    }catch (error) {
        res.status(500).json({error: error.message})
    }
}
const updateTour = async (req, res)=>{
    const {id} = req.params
    try {
        const product = await Product.findByIdAndUpdate({_id: id}, req.body, {new: true})
        res.status(200).json({product})    
    }catch (error) {
        res.status(500).json({error: error.message})
    }
}
const deleteTour = async (req, res)=>{
    const {id} = req.params
    try {
       const product = await Product.findByIdAndDelete(id)
       res.status(200).json({msg: "deleted"}) 
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = {
    allTours,
    createTour,
    getTour,
    updateTour,
    deleteTour,
    deleteAll
}