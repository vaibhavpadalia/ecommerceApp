var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var signupSchema = new Schema({
    email: { type: String, unique: true, required: true },
    name: { type: String },
    password: { type: String },
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date },
    totalCost: { type: Number }
});

var productsData = new Schema({
    productId: { type: Number, unique: true },
    productName: { type: String },
    price: { type: Number },
    p_img: { type: String }, 
    description: { type: String},
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date }
});

var Signup = mongoose.model('signupData', signupSchema);
var Products = mongoose.model('productData', productsData);

module.exports = {
    Signup:Signup,
    Products: Products }
