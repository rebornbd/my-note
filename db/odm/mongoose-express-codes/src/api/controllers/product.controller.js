const _ = require('lodash');
const Product = require("../models/product.model");


exports.load = async (req, res, next, productId) => {
  try {
    const product = await Product.findById(productId);

    if (!product)
      return next(new Error(`${productId} id can't have any product!`))

    req.locals = { product };
    return next();
  } catch (err) {
    return next(err);
  }
}

exports.list = async (req, res) => {
  try {
    const products = await Product.find(req.query);
    const transformedProducts = products.map((product) => product.transform());
    res.json(transformedProducts);
  } catch (err) {
    res.send(err.message);
  }
}

exports.create = async (req, res) => {
  try {
    const productData = req.body;
    const product = new Product(productData);
    const savedProduct = await product.save();
    const transformedProduct = savedProduct.transform();
    res.json(transformedProduct);
  } catch (err) {
    res.send(err.message);
  }
}

exports.view = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findById(productId);
    const transformedProduct = product.transform();
    res.json(transformedProduct);
  } catch (err) {
    res.send(err.message);
  }
}

exports.update = async (req, res) => {
  try {
    const { productId } = req.params;
    const productData = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(productId, productData, {new: true});
    const transformedProduct = updatedProduct.transform();
    res.json(transformedProduct);
  } catch (err) {
    res.send(err.message);
  }
}

exports.delete = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findByIdAndDelete(productId);

    if (!product)
      throw new Error(`product can't find with id ${productId}`);

    const transformedProduct = product.transform();
    res.json(transformedProduct);
  } catch (err) {
    res.send(err.message);
  }
};
