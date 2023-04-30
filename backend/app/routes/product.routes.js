const { authJwt } = require("../middlewares");
const controller = require("../controllers/product.controller");

module.exports = app => {
  app.post("/api/products", authJwt.verifyToken ,controller.create);

  app.get("/api/products", authJwt.verifyToken, controller.findAll);

  app.get("/api/products/:id", authJwt.verifyToken, controller.findOne);

  app.put("/api/products/:id", authJwt.verifyToken, controller.update);

  app.delete("/api/products/:id", authJwt.verifyToken, controller.delete);
}