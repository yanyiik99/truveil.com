const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");

module.exports = function (app) {
  /**
 * @swagger
 * tags:
 *   name: Users
 *   description: Endpoint pengelolaan pengguna
 */

  /**
   * @swagger
   * /api/test/all:
   *   get:
   *     summary: Mengakses konten publik
   *     tags: [Users]
   *     responses:
   *       200:
   *         description: Konten publik berhasil diakses
   */
  app.get("/api/test/all", controller.allAccess);

  /**
   * @swagger
   * /api/test/user:
   *   get:
   *     summary: Mengakses konten pengguna
   *     tags: [Users]
   *     security:
   *       - apiKeyAuth: []
   *     responses:
   *       200:
   *         description: Konten pengguna berhasil diakses
   */
  app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);

  /**
   * @swagger
   * /api/test/mod:
   *   get:
   *     summary: Mengakses konten moderator
   *     tags: [Users]
   *     security:
   *       - apiKeyAuth: []
   *     responses:
   *       200:
   *         description: Konten moderator berhasil diakses
   */
  app.get(
    "/api/test/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );

  /**
   * @swagger
   * /api/test/admin:
   *   get:
   *     summary: Mengakses konten admin
   *     tags: [Users]
   *     security:
   *       - apiKeyAuth: []
   *     responses:
   *       200:
   *         description: Konten admin berhasil diakses
   */
  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
};
