const express = require('express')
const router = express.Router()
const Anounce = require('../models/anounce-model')

router.get('/anounces', (req, res) => {
    Anounce.find({}, 'Id Name Date Text', (err, anounces) => {
        if (err) {
            console.log(err)
            res.sendStatus(500)
        } else {
            res.send({
                anounces: anounces
            })
        }
    }).sort({
        Id: 1
    })
})


router.post("/anounces", (req, res) => {
 const myData = new Anounce(req.body);
 console.log(req);

 myData.save()
 .then(item => {
 res.send("item saved to database");
 })
 .catch(err => {
 res.status(400).send("unable to save to database");
 });

});


module.exports =  router
