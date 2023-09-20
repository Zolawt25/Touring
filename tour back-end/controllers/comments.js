const Comments = require("../models/Comments");

const getComments = async(req, res)=>{
    const comments = await Comments.find(req.body)
    res.status(200).json(comments)
} 
const addComments = async(req, res)=>{
    const comments = await Comments.create(req.body)
    res.status(201).json(comments)
}
const deleteComment = async(req,res)=>{
    const {id} = req.params
    const comment = await Comments.findByIdAndDelete(id)
    res.status(200).json({msg: "deleted", comment}) 
}

module.exports = {
    getComments,
    addComments,
    deleteComment
}