const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signup = (req, res, next) => {
    console.log(req.body);
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                name: req.body.name,
                firstname: req.body.firstname,
                phone: req.body.phone,
                address: req.body.address,
                city: req.body.city,
                country: req.body.country,
                zipcode: req.body.zipcode,
                email: req.body.email,
                password: hash
            });
            user.save()
                .then(() => res.status(201).json({message: 'User created !'}))
                .catch(error => res.status(400).json({error}));
        })
        .catch(error => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: 'User not found !' });
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Wrong login or password !' });
                    }
                    if (user.role === 'admin') {
                        res.status(200).json({
                            userId: user._id,
                            token: jwt.sign(
                                { userId: user._id },
                                'DOUCHBAG_TOKEN_SECRET',
                                { expiresIn: '24h' }
                            )
                        });
                    } else {
                        res.status(200).json({
                            userId: user._id,
                            token: jwt.sign(
                                { userId: user._id },
                                'ROACHES_TOKEN_SECRET',
                                { expiresIn: '24h' }
                            )
                        });
                    }
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

exports.modifyUser = (req, res, next) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Update data can not be empty!"
        });
    }

    if (!req.body.role) {
        const body = {
            ...req.body,
            role: 'user'
        }
    } else {
        const body = {
            ...req.body
        }
    }

    User.updateOne({ _id: req.params.id }, { body, _id: req.params.id })
        .then(() => res.status(200).json({ message: "User infos updated !" }))
        .catch(error => res.status(400).json({ error }));
};

exports.deleteUser = (req, res, next) => {
    User.findOne({ _id: req.params.id })
        .then(user => {
            User.deleteOne({ _id: req.params.id })
                .then(() => res.status(200).json({ message: "User deleted !" }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

exports.getUser = (req, res, next) => {
    User.findOne({ _id: req.params.id })
        .then(user => res.status(200).json(user))
        .catch(error => res.status(404).json({ error }));
};

exports.getUsers = (req, res, next) => {
    User.find()
        .then(users => res.status(200).json(users))
        .catch(error => res.status(400).json({ error }));
};