const Product = require("../models/product.model");

exports.create = (req, res) => {
  if (!req.body.name || !req.body.description || !req.body.price) {
    res.status(400).send({ message: "Name, description, and price cannot be empty!" });
    return;
  }

  const product = new Product({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price
  });

  product.save((err, product) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send(product);
  });
};

exports.findAll = (req, res) => {
  Product.find()
    .then(products => {
      res.send(products);
    })
    .catch(err => {
      res.status(500).send({ message: err });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Product.findById(id)
    .then(product => {
      if (!product) {
        res.status(404).send({ message: "Product not found" });
        return;
      }
      res.send(product);
    })
    .catch(err => {
      res.status(500).send({ message: err });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update cannot be empty"
    });
  }

  const id = req.params.id;

  Product.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(product => {
      if (!product) {
        res.status(404).send({
          message: `Cannot update Product with id=${id}. Product not found!`
        });
        return;
      }
      res.send({ message: "Product was updated successfully" });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Product with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Product.findByIdAndRemove(id, { useFindAndModify: false })
    .then(product => {
      if (!product) {
        res.status(404).send({
          message: `Cannot delete Product with id=${id}. Product not found!`
        });
        return;
      }
      res.send({ message: "Product was deleted successfully" });
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Product with id=" + id
      });
    });
};
