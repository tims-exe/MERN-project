const express = require('express');

const router = express.Router();

//GET all workouts
router.get(('/'), (req, res) => {  
    res.json({mssg: 'GET all workouts'});
})

//GET a single workout
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single workour'});
})

//POST new workout
router.post('/', (req, res) => {
    res.json({mssg: 'POST new workout'})
})

//DELETE a workout
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a workout'})
})

//UPDATE new workout
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a workout'})
})

module.exports = router;