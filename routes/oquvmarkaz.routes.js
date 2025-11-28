// const express = require("express");
// const router = express.Router();
// const oquvmarkazController = require("../controller/oquvmarkaz.controller");

// /**
//  * @swagger
//  * tags:
//  *   name: Oquvmarkazlar
//  *   description: O‘quv markazlarini boshqarish
//  */

// /**
//  * @swagger
//  * /api/oquvmarkazlar:
//  *   post:
//  *     tags: [Oquvmarkazlar]
//  *     summary: Yangi o‘quv markaz qo‘shish
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               name:
//  *                 type: string
//  *                 example: "Algoritm IT Academy"
//  *               number:
//  *                 type: string
//  *                 example: "+998901234567"
//  *               address:
//  *                 type: string
//  *                 example: "Namangan sh., Yangi Namangan tumani, Mustaqillik ko‘chasi, 45-uy"
//  *               googlemap:
//  *                 type: string
//  *                 example: "https://maps.google.com/?q=41.0011,71.6725"
//  *     responses:
//  *       201:
//  *         description: O‘quv markaz muvaffaqiyatli yaratildi
//  *       400:
//  *         description: Ma'lumotlar to‘liq emas
//  *       500:
//  *         description: Server xatosi
//  */
// router.post("/oquvmarkazlar", oquvmarkazController.createOquvmarkaz);

// /**
//  * @swagger
//  * /api/oquvmarkazlar:
//  *   get:
//  *     tags: [Oquvmarkazlar]
//  *     summary: Barcha o‘quv markazlarni olish
//  *     responses:
//  *       200:
//  *         description: O‘quv markazlar ro‘yxati
//  *       500:
//  *         description: Server xatosi
//  */
// router.get("/oquvmarkazlar", oquvmarkazController.getOquvmarkazlar);

// /**
//  * @swagger
//  * /api/oquvmarkazlar/{id}:
//  *   get:
//  *     tags: [Oquvmarkazlar]
//  *     summary: ID bo‘yicha bitta o‘quv markazni olish
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         schema:
//  *           type: integer
//  *         description: O‘quv markaz ID raqami
//  *     responses:
//  *       200:
//  *         description: O‘quv markaz topildi
//  *       404:
//  *         description: O‘quv markaz topilmadi
//  *       500:
//  *         description: Server xatosi
//  */
// router.get("/oquvmarkazlar/:id", oquvmarkazController.getOquvmarkazById);

// /**
//  * @swagger
//  * /api/oquvmarkazlar/{id}:
//  *   put:
//  *     tags: [Oquvmarkazlar]
//  *     summary: ID bo‘yicha o‘quv markazni yangilash
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         schema:
//  *           type: integer
//  *         description: O‘quv markaz ID raqami
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               name:
//  *                 type: string
//  *                 example: "Yangi Algoritm IT Center"
//  *               number:
//  *                 type: string
//  *                 example: "+998909999999"
//  *               address:
//  *                 type: string
//  *                 example: "Namangan sh., Do‘stlik ko‘chasi, 99-uy"
//  *               googlemap:
//  *                 type: string
//  *                 example: "https://maps.google.com/?q=41.0055,71.6760"
//  *     responses:
//  *       200:
//  *         description: O‘quv markaz muvaffaqiyatli yangilandi
//  *       404:
//  *         description: O‘quv markaz topilmadi
//  *       500:
//  *         description: Server xatosi
//  */
// router.put("/oquvmarkazlar/:id", oquvmarkazController.updateOquvmarkazById);

// /**
//  * @swagger
//  * /api/oquvmarkazlar/{id}:
//  *   delete:
//  *     tags: [Oquvmarkazlar]
//  *     summary: ID bo‘yicha o‘quv markazni o‘chirish
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         schema:
//  *           type: integer
//  *         description: O‘quv markaz ID raqami
//  *     responses:
//  *       200:
//  *         description: O‘quv markaz muvaffaqiyatli o‘chirildi
//  *       404:
//  *         description: O‘quv markaz topilmadi
//  *       500:
//  *         description: Server xatosi
//  */
// router.delete("/oquvmarkazlar/:id", oquvmarkazController.deleteOquvmarkazById);

// module.exports = router;























const express = require("express");
const router = express.Router();
const oquvmarkazController = require("../controller/oquvmarkaz.controller");

/**
 * @swagger
 * tags:
 *   name: Oquvmarkazlar
 *   description: O‘quv markazlarini boshqarish
 */

/**
 * @swagger
 * /api/oquvmarkazlar:
 *   post:
 *     tags: [Oquvmarkazlar]
 *     summary: Yangi o‘quv markaz qo‘shish
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Algoritm IT Academy"
 *               number:
 *                 type: string
 *                 example: "+998901234567"
 *               address:
 *                 type: string
 *                 example: "Namangan sh., Yangi Namangan tumani, Mustaqillik ko‘chasi, 45-uy"
 *               googlemap:
 *                 type: string
 *                 example: "https://maps.google.com/?q=41.0011,71.6725"
 *     responses:
 *       201:
 *         description: O‘quv markaz muvaffaqiyatli yaratildi
 *       400:
 *         description: Ma'lumotlar to‘liq emas yoki takroriy
 *       500:
 *         description: Server xatosi
 */
router.post("/oquvmarkazlar", oquvmarkazController.createOquvmarkaz);

/**
 * @swagger
 * /api/oquvmarkazlar:
 *   get:
 *     tags: [Oquvmarkazlar]
 *     summary: Barcha o‘quv markazlarni olish
 *     responses:
 *       200:
 *         description: O‘quv markazlar ro‘yxati
 *       500:
 *         description: Server xatosi
 */
router.get("/oquvmarkazlar", oquvmarkazController.getOquvmarkazlar);

/**
 * @swagger
 * /api/oquvmarkazlar/{id}:
 *   get:
 *     tags: [Oquvmarkazlar]
 *     summary: ID bo‘yicha bitta o‘quv markazni olish
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: O‘quv markaz ID raqami
 *     responses:
 *       200:
 *         description: O‘quv markaz topildi
 *       404:
 *         description: O‘quv markaz topilmadi
 *       500:
 *         description: Server xatosi
 */
router.get("/oquvmarkazlar/:id", oquvmarkazController.getOquvmarkazById);

/**
 * @swagger
 * /api/oquvmarkazlar/{id}:
 *   put:
 *     tags: [Oquvmarkazlar]
 *     summary: ID bo‘yicha o‘quv markazni yangilash
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: O‘quv markaz ID raqami
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Yangi Algoritm IT Center"
 *               number:
 *                 type: string
 *                 example: "+998909999999"
 *               address:
 *                 type: string
 *                 example: "Namangan sh., Do‘stlik ko‘chasi, 99-uy"
 *               googlemap:
 *                 type: string
 *                 example: "https://maps.google.com/?q=41.0055,71.6760"
 *     responses:
 *       200:
 *         description: O‘quv markaz muvaffaqiyatli yangilandi
 *       404:
 *         description: O‘quv markaz topilmadi
 *       500:
 *         description: Server xatosi
 */
router.put("/oquvmarkazlar/:id", oquvmarkazController.updateOquvmarkazById);

/**
 * @swagger
 * /api/oquvmarkazlar/{id}:
 *   delete:
 *     tags: [Oquvmarkazlar]
 *     summary: ID bo‘yicha o‘quv markazni o‘chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: O‘quv markaz ID raqami
 *     responses:
 *       200:
 *         description: O‘quv markaz muvaffaqiyatli o‘chirildi
 *       404:
 *         description: O‘quv markaz topilmadi
 *       500:
 *         description: Server xatosi
 */
router.delete("/oquvmarkazlar/:id", oquvmarkazController.deleteOquvmarkazById);

module.exports = router;
