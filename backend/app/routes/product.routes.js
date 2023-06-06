const { authJwt } = require("../middlewares");
const controller = require("../controllers/product.controller");

module.exports = app => {
  /**
   * @swagger
   * tags:
   *   name: Products
   *   description: Endpoint pengelolaan produk
   */

  /**
   * @swagger
   * /api/products:
   *   post:
   *     summary: Create a new product
   *     tags: [Products]
   *     security:
   *       - apiKeyAuth: []
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Product'
   *     responses:
   *       200:
   *         description: Product created successfully
   */
  app.post("/api/products", authJwt.verifyToken, controller.create);

  /**
   * @swagger
   * /api/products:
   *   get:
   *     summary: Get all products
   *     tags: [Products]
   *     security:
   *       - apiKeyAuth: []
   *     responses:
   *       200:
   *         description: List of products
   */
  app.get("/api/products", authJwt.verifyToken, controller.findAll);

  /**
   * @swagger
   * /api/products/{id}:
   *   get:
   *     summary: Get a product by ID
   *     tags: [Products]
   *     security:
   *       - apiKeyAuth: []
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: string
   *         description: ID of the product
   *     responses:
   *       200:
   *         description: Product found
   */
  app.get("/api/products/:id", authJwt.verifyToken, controller.findOne);

  /**
   * @swagger
   * /api/products/{id}:
   *   put:
   *     summary: Update a product
   *     tags: [Products]
   *     security:
   *       - apiKeyAuth: []
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: string
   *         description: ID of the product
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Product'
   *     responses:
   *       200:
   *         description: Product updated successfully
   */
  app.put("/api/products/:id", authJwt.verifyToken, controller.update);

  /**
   * @swagger
   * /api/products/{id}:
   *   delete:
   *     summary: Delete a product
   *     tags: [Products]
   *     security:
   *       - apiKeyAuth: []
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: string
   *         description: ID of the product
   *     responses:
   *       200:
   *         description: Product deleted successfully
   */
  app.delete("/api/products/:id", authJwt.verifyToken, controller.delete);
};
