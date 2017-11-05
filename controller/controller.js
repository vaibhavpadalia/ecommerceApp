var mongoose = require('mongoose');
var Signup = mongoose.model('signupData');
var Products = mongoose.model('productData');
const bcrypt = require('bcrypt');

exports.createUser = (req, res) => {
    let hash = bcrypt.hashSync(req.body.password, 10);
    var signup = new Signup({
        email: req.body.email,
        name: req.body.name,
        password: hash,
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
    Signup.find({},(error, response) => {
        if (error) {
            return res.json(req, res, error);
        }
        res.json(response);
    });
}


exports.getUser = (req, res) => {
    var email = req.params.email;
    Signup.findOne({ email: email },(error, response) => {
        if (bcrypt.compareSync(req.params.password, response.password)) {
            return res.json(response);
        }
        else {
            return res.json(error)
        }
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
    console.log("In update");   // For testing purpose only
    var id = req.params.email;
    Signup.findOne({ email: id }, (error, data) => {
        if (error) {
            console.log("In error");
            res.json(error);
        }
        var price = req.body.price;
        data.totalCost = price;
        data.updated_at = new Date();
        data.save((err, response) => {
            if (err) {
                res.json(err);
            }
            res.json(response);
        });

    });
}

