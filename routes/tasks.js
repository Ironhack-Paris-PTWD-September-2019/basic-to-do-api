const express = require('express');
const router  = express.Router();
const Task    = require('../models/task');


router.get('/tasks', (req, res, next) => {
    Task.find().sort({createdAt: -1})
    .then((allTheTasks)=>{
        res.json(allTheTasks);
    })
    .catch((err)=>{
        res.status(500).json(err);
    })
});

router.post('/tasks/create', (req, res, next)=>{
    if(!req.user){
       return res.status(401).json({message: 'sorry, you must be logged in to create a task'}) 
    }
    Task.create({
        title: req.body.title,
        description: req.body.description,
        owner: req.user._id,
    })
    .then((response)=>{
        res.json(response);
    })
    .catch((err)=>{
        res.status(500).json(err);
    })
})

router.post('/tasks/edit/:id', (req, res, next)=>{
    Task.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((response)=>{
        res.json(response)
    })
    .catch((err)=>{
        res.status(500).json(err)
    })
})

router.post('/tasks/delete/:id', (req, res, next)=>{
    Task.findByIdAndRemove(req.params.id)
    .then((response)=>{
        res.json(response)
    })
    .catch((err)=>{
        res.status(500).json(err)
    })

})








module.exports = router;
