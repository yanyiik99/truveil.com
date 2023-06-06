const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/auth.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: User authentication endpoints
 */

  /**
 * @swagger
 * /api/auth/signup:
 *   post:
 *     summary: User signup
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - username
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: User registered successfully
 *       400:
 *         description: Failed to register user. Invalid request or user already exists.
 *
 */

  /**
 * @swagger
 * /api/auth/signin:
 *   post:
 *     summary: User signin
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: admintruveil
 *               password:
 *                 type: string
 *                 example: admintruveil1234
 *             required:
 *               - username
 *               - password
 *     responses:
 *       200:
 *         description: User authenticated successfully
 *       401:
 *         description: Unauthorized. Invalid credentials.
 *
 */
  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controller.signup
  );

  app.post("/api/auth/signin", controller.signin);
};
