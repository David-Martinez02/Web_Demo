const express = require('express');
const router = express.Router();
const Contact = require('./models/contact');

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/contact', (req, res) => {
    res.render('contact')
})

router.get('/education', (req, res) => {
    res.render('education')
})

router.get('/hobbies', (req, res) => {
    res.render('hobbies')
})

router.get('/aboutme', (req, res) => {
    res.render('aboutme')
})

router.post('/submitContact', (req, res) => {
    const contact = new Contact({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        reason: req.body.reason,
        notes: req.body.notes
    })

    Contact.collection.insertOne(contact)
    .then(result => {
        res.render('contact')
    })
    .catch(err => console.log(err));
})

module.exports = router;