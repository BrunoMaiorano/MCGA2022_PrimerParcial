const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    stock: {
        type: Number,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    isdeleted: {
        type: Boolean,
        default: false
    }
});

//crear modelo

const Product = mongoose.model('Product', productSchema);

module.exports = Product;