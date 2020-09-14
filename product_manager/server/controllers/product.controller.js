const { Product} = require('../models/product.model');
const { request, response } = require('express');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello MERN"
    });
}


module.exports.createProduct = (request, response) => {
    const { title, price, description } = request.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product => response.json(product))
        .catch(err => response.json(err));

}
