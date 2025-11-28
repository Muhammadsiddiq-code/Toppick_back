// const express = require("express");
// const router = express.Router();
// const adminController = require("../controller/serviceadmin.controller");

// /**
//  * @swagger
//  * tags:
//  *   name: Admins
//  *   description: Adminlar boshqaruvi
//  */

// /**
//  * @swagger
//  * /api/admins:
//  *   post:
//  *     tags: [Admins]
//  *     summary: Yangi admin qo‘shish
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               login:
//  *                 type: string
//  *                 example: "admin1"
//  *               password:
//  *                 type: string
//  *                 example: "admin123"
//  *     responses:
//  *       201:
//  *         description: Admin muvaffaqiyatli yaratildi
//  *       400:
//  *         description: Ma'lumotlar to‘liq emas
//  *       500:
//  *         description: Server xatosi
//  */
// router.post("/admins", adminController.createAdmin);

// /**
//  * @swagger
//  * /api/admins:
//  *   get:
//  *     tags: [Admins]
//  *     summary: Barcha adminlarni olish
//  *     responses:
//  *       200:
//  *         description: Adminlar ro‘yxati
//  *       500:
//  *         description: Server xatosi
//  */
// router.get("/admins", adminController.getAllAdmins);

// /**
//  * @swagger
//  * /api/admins/{id}:
//  *   get:
//  *     tags: [Admins]
//  *     summary: ID bo‘yicha bitta adminni olish
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         schema:
//  *           type: integer
//  *         description: Admin ID raqami
//  *     responses:
//  *       200:
//  *         description: Admin topildi
//  *       404:
//  *         description: Admin topilmadi
//  *       500:
//  *         description: Server xatosi
//  */
// router.get("/admins/:id", adminController.getAdminById);

// /**
//  * @swagger
//  * /api/admins/{id}:
//  *   put:
//  *     tags: [Admins]
//  *     summary: ID bo‘yicha adminni yangilash
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         schema:
//  *           type: integer
//  *         description: Admin ID raqami
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               login:
//  *                 type: string
//  *                 example: "newadmin"
//  *               password:
//  *                 type: string
//  *                 example: "newpassword123"
//  *     responses:
//  *       200:
//  *         description: Admin muvaffaqiyatli yangilandi
//  *       404:
//  *         description: Admin topilmadi
//  *       500:
//  *         description: Server xatosi
//  */
// router.put("/admins/:id", adminController.updateAdmin);

// /**
//  * @swagger
//  * /api/admins/{id}:
//  *   delete:
//  *     tags: [Admins]
//  *     summary: ID bo‘yicha adminni o‘chirish
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         schema:
//  *           type: integer
//  *         description: Admin ID raqami
//  *     responses:
//  *       200:
//  *         description: Admin muvaffaqiyatli o‘chirildi
//  *       404:
//  *         description: Admin topilmadi
//  *       500:
//  *         description: Server xatosi
//  */
// router.delete("/admins/:id", adminController.deleteAdmin);

// module.exports = router;


































// const express = require("express");
// const router = express.Router();
// const adminController = require("../controller/serviceadmin.controller");

// // Admin yaratish
// router.post("/admins", adminController.createAdmin);

// // Admin login
// router.post("/admins/login", adminController.loginAdmin);

// // Boshqa admin routelar
// router.get("/admins", adminController.getAllAdmins);
// router.get("/admins/:id", adminController.getAdminById);
// router.put("/admins/:id", adminController.updateAdmin);
// router.delete("/admins/:id", adminController.deleteAdmin);

// module.exports = router;





const express = require("express");
const router = express.Router();
const adminController = require("../controller/serviceadmin.controller");
const authenticate = require("../middleware/auth");

/**
 * @swagger
 * tags:
 *   name: Admins
 *   description: Adminlar boshqaruvi
 */

/**
 * @swagger
 * /api/admins:
 *   post:
 *     tags: [Admins]
 *     summary: Yangi admin yaratish
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               login:
 *                 type: string
 *                 example: "admin1"
 *               password:
 *                 type: string
 *                 example: "admin123"
 *     responses:
 *       201:
 *         description: Admin muvaffaqiyatli yaratildi
 *       400:
 *         description: Ma'lumotlar to‘liq emas
 *       500:
 *         description: Server xatosi
 */
router.post("/", adminController.createAdmin);

/**
 * @swagger
 * /api/admins/login:
 *   post:
 *     tags: [Admins]
 *     summary: Admin login va JWT olish
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               login:
 *                 type: string
 *                 example: "admin1"
 *               password:
 *                 type: string
 *                 example: "admin123"
 *     responses:
 *       200:
 *         description: Login muvaffaqiyatli, token qaytarildi
 *       400:
 *         description: Login yoki parol noto‘g‘ri
 *       404:
 *         description: Admin topilmadi
 *       500:
 *         description: Server xatosi
 */
router.post("/login", adminController.loginAdmin);

/**
 * @swagger
 * /api/admins:
 *   get:
 *     tags: [Admins]
 *     summary: Barcha adminlarni olish
 *     responses:
 *       200:
 *         description: Adminlar ro‘yxati
 *       500:
 *         description: Server xatosi
 */
router.get("/", adminController.getAllAdmins);

/**
 * @swagger
 * /api/admins/{id}:
 *   get:
 *     tags: [Admins]
 *     summary: ID bo‘yicha adminni olish
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Admin ID raqami
 *     responses:
 *       200:
 *         description: Admin topildi
 *       404:
 *         description: Admin topilmadi
 *       500:
 *         description: Server xatosi
 */
router.get("/:id", adminController.getAdminById);

/**
 * @swagger
 * /api/admins/{id}:
 *   put:
 *     tags: [Admins]
 *     summary: ID bo‘yicha adminni yangilash
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Admin ID raqami
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               login:
 *                 type: string
 *                 example: "newadmin"
 *               password:
 *                 type: string
 *                 example: "newpassword123"
 *     responses:
 *       200:
 *         description: Admin muvaffaqiyatli yangilandi
 *       404:
 *         description: Admin topilmadi
 *       500:
 *         description: Server xatosi
 */
router.put("/:id", adminController.updateAdmin);

/**
 * @swagger
 * /api/admins/{id}:
 *   delete:
 *     tags: [Admins]
 *     summary: ID bo‘yicha adminni o‘chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Admin ID raqami
 *     responses:
 *       200:
 *         description: Admin muvaffaqiyatli o‘chirildi
 *       404:
 *         description: Admin topilmadi
 *       500:
 *         description: Server xatosi
 */
router.delete("/:id", adminController.deleteAdmin);

/**
 * @swagger
 * /api/admins/protected:
 *   get:
 *     tags: [Admins]
 *     summary: JWT bilan himoyalangan route
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Protected routega muvaffaqiyatli kirildi
 *       401:
 *         description: Token noto‘g‘ri yoki mavjud emas
 */
router.get("/protected", authenticate, (req, res) => {
  res
    .status(200)
    .json({ message: "Siz protected routega kirdingiz!", admin: req.admin });
});

module.exports = router;
