const Product = require("../models/product.model");

exports.create = (req, res) => {
    const requiredFields = ["name", "anonymous", "location", "link_gmaps", "contact", "rent_type", "price", "bedroom", "swimming", "living_room", "include_facilities", "description"];
    const missingFields = requiredFields.filter(field => !req.body[field]);
    if (missingFields.length > 0) {
      const errorMessage = `${missingFields.join(", ")} cannot be empty!`;
      res.status(400).send({ message: errorMessage });
      return;
    }
  
    const product = new Product({
      Name : req.body.name,
      VillaAnonymous : req.body.anonymous,
      Location : req.body.location,
      LinkGmaps : req.body.link_gmaps,
      Contact : req.body.contact,
      RentType : req.body.rent_type,
      Price : req.body.price,
      Bedroom : req.body.bedroom,
      Swimming : req.body.swimming,
      LivingRoom : req.body.living_room,
      IncludeFacilities : req.body.include_facilities,
      Description : req.body.description,
    });
  
    product.save((err, product) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      res.send({
        message: "Product was created successfully",
        product
      });
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
    const id = req.params.id;
  
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update cannot be empty"
      });
    }
  
    const updatedFields = {
      Name: req.body.name,
      VillaAnonymous: req.body.anonymous,
      Location: req.body.location,
      LinkGmaps: req.body.link_gmaps,
      Contact: req.body.contact,
      RentType: req.body.rent_type,
      Price: req.body.price,
      Bedroom: req.body.bedroom,
      Swimming: req.body.swimming,
      LivingRoom: req.body.living_room,
      IncludeFacilities: req.body.include_facilities,
      Description: req.body.description,
    };
  
    Product.findByIdAndUpdate(id, updatedFields, { useFindAndModify: false })
      .then(product => {
        if (!product) {
          res.status(404).send({
            message: `Cannot update Product with id=${id}. Product not found!`
          });
          return;
        }
        res.send({ 
            message: "Product was updated successfully",
            product
        });
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
      res.send({ 
        message: "Product was deleted successfully",
        product
      });
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Product with id=" + id
      });
    });
};
