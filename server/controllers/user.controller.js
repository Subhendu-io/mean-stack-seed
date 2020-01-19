const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports.createUser = (req, res, next) => {
    const user = new User();

    user.username = req.body.username;
    user.email = req.body.email;
    user.password = req.body.password;

    user.save((err, doc) => {
        if(!err) {
            res.send({
                success: true,
                message: 'User Created Successfully!',
                user: doc
            });
        } else {
            if(err.code == 11000) {
                res.status(422).send({
                    error: true,
                    message: 'This Email Is Already Registered!'
                });
            } else {
                return next(err);
            }
        }
    });
}
module.exports.getUsers = (req, res, next) => {
    User.find({}, (err, doc) => {
        if(!err) {
            res.send({
                success: true,
                message: 'All Users Data Sent Successfully!',
                users: doc
            });
        } else {
            return next(err);
        }
    });
}
module.exports.getUserById = (req, res, next) => {
    const _id = req.params.id;

    User.findById(_id, (err, doc) => {
        if(!err) {
            res.send({
                success: true,
                message: 'User Data Sent Successfully!',
                user: doc
            });  
        } else {
            return next(err);
        }
    });
}
module.exports.updateUserById = (req, res, next) => {
    const _id = req.params.id;

    const user = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }

    User.findByIdAndUpdate(_id, user, {new: true}, (err, doc) => {
        if(!err) {
            res.send({
                success: true,
                message: 'User Updated Successfully!',
                user: doc,
            });
        } else {
            return next(err);
        }
    });
}
module.exports.deleteUserById = (req, res, next) => {
    const _id = req.params.id;

    User.findByIdAndRemove(_id, (err, doc) => {
        if(!err) {
            res.send({
                success: true,
                message: 'User Deleted Successfully!',
                user: doc
            });
        } else {
            return next(err);
        }
    });
}