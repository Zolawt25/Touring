const express = require('express');
const { allTours, createTour, getTour, updateTour, deleteTour, deleteAll } = require('../controllers/products');
const { addComments, getComments, deleteComment } = require('../controllers/comments');


const router = express.Router()

router.route("/").get(allTours).post(createTour).delete(deleteAll)
router.route("/:id").get(getTour).patch(updateTour).delete(deleteTour)
router.route("/:id/comments").get(getComments).post(addComments)
router.route("/:id/comments/:id").delete(deleteComment)

module.exports = router