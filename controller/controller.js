var mongoose = require('mongoose');
var Signup = mongoose.model('signupData');
var Products = mongoose.model('productData');

exports.createUser = (req, res) => {
    var signup = new Signup({
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
        totalCost: 0,
        created_at: new Date(),
        updated_at: ""
    });
    signup.save((error, response) => {
        if (error) {
             res.json(error);
        }
        else {
            res.json({
                success: true,
                body: response
            });
        }
    });
} 


exports.getAllUsers = (req, res) => {
    Signup.find({}, function (error, response) {
        if (error) {
            return res.json(req, res, error);
        }
        res.json(response);
    });
}


exports.getUser = (req, res) => {
    var email = req.params.email;
    Signup.findOne({ email: email }, function (error, response) {
        if (error) {
            return res.json(error)
        }
        res.json(response);
    });
}

exports.getAllProducts = (req, res) => {
    Products.find({},(error, response) => {
        if (error) {
            res.json(error);
        }
        res.json(response);
    })
}

exports.updateTotalCost = (req, res) => {
    console.log("In update");
    var id = req.params.email;
    Signup.findOne({ email: id },(error, data) => {
        if (error) {
            console.log("In error");
            res.json(error);
        }
        var price = req.body.price;
        data.totalCost = price;
        data.updated_at = new Date();
        data.save(function (err, response) {
            if (err) {
                res.json(err);
            }
            res.json(response);
        });

    });
}

