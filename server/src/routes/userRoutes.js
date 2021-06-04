const express = require('express')
const router = express.Router()
const User = require('./../models/user')

router.get('/users', (req, res) => {
    User.find({}, 'name email', (err, users) => {
        if (err) {
            res.sendStatus(500)
        } else {
            res.send({ users: users })
        }
    }).sort({ _id: -1 })
})

router.post('/users', (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        gender: req.body.gender,
        dateOfBirth: req.body.dateOfBirth,
    })
    user.save((err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.send({
                success: true,
                _id: data._id,
                message: `User with ID_${data._id} saved successfully!`
            })
        }
    })
})

router.get('/users/:id', (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if (err) {
            res.sendStatus(500)
        } else {
            res.send({ user: user })
        }
    })
})

router.get('/users/:id/contacts', (req, res) => {
    User.findById(req.params.id, 'contacts', (err, contacts) => {
        if (err) {
            res.sendStatus(500)
        } else {
            res.send(contacts)
        }
    })
})

router.post('/users/:id/contacts', (req, res) => {
    console.log("NAME", req.body.name)
    User.findByIdAndUpdate(req.params.id, { $push: { contacts: { name: req.body.name } } }, (err, user) => {
        if (err) {
            console.log(err)
            res.sendStatus(500)
        } else {
            res.send({ user: user })
        }
    })
})

router.put('/users/:id/contacts/:cid', (req, res) => {
    User.updateOne({_id: req.params.id, "contacts._id": req.params.cid}, { $push: { 'contacts.$.numbers': req.body.number } }, (err, user) => {
        if (err) {
            console.log(err)
            res.sendStatus(500)
        } else {
            res.send({ user: user })
        }
    })
})

router.delete('/users/:id/contacts/:cid', (req, res) => {
    User.findByIdAndUpdate(req.params.id, { $pull: { contacts: { _id : req.params.cid } } }, (err, user) => {
        if (err) {
            console.log(err)
            res.sendStatus(500)
        } else {
            res.send({ user: user })
        }
    })
})

module.exports = router