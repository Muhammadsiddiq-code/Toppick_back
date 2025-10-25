const express = require("express");
const router = express.Router();
const kutubxonaController = require("../controller/kutubxona.controller");

/**
 * @swagger
 * tags:
 *   name: Kutubxonalar
 *   description: Kutubxonalarni boshqarish
 */

/**
 * @swagger
 * /api/kutubxonalar:
 *   post:
 *     tags: [Kutubxonalar]
 *     summary: Yangi kutubxona qo‘shish
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Namangan shahar markaziy kutubxonasi"
 *               number:
 *                 type: string
 *                 example: "+998901234567"
 *               address:
 *                 type: string
 *                 example: "Namangan sh., Bobur ko‘chasi, 12-uy"
 *               googlemap:
 *                 type: string
 *                 example: "https://maps.google.com/?q=41.0011,71.6725"
 *     responses:
 *       201:
 *         description: Kutubxona muvaffaqiyatli yaratildi
 *       400:
 *         description: Ma'lumotlar to‘liq emas yoki mavjud
 *       500:
 *         description: Server xatosi
 */
router.post("/kutubxonalar", kutubxonaController.createKutubxona);

/**
 * @swagger
 * /api/kutubxonalar:
 *   get:
 *     tags: [Kutubxonalar]
 *     summary: Barcha kutubxonalarni olish
 *     responses:
 *       200:
 *         description: Kutubxonalar ro‘yxati
 *       500:
 *         description: Server xatosi
 */
router.get("/kutubxonalar", kutubxonaController.getKutubxonalar);

/**
 * @swagger
 * /api/kutubxonalar/{id}:
 *   get:
 *     tags: [Kutubxonalar]
 *     summary: ID bo‘yicha bitta kutubxonani olish
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Kutubxona ID raqami
 *     responses:
 *       200:
 *         description: Kutubxona topildi
 *       404:
 *         description: Kutubxona topilmadi
 *       500:
 *         description: Server xatosi
 */
router.get("/kutubxonalar/:id", kutubxonaController.getKutubxonaById);

/**
 * @swagger
 * /api/kutubxonalar/{id}:
 *   put:
 *     tags: [Kutubxonalar]
 *     summary: ID bo‘yicha kutubxonani yangilash
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Kutubxona ID raqami
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Yoshlar Kutubxonasi"
 *               number:
 *                 type: string
 *                 example: "+998909876543"
 *               address:
 *                 type: string
 *                 example: "Namangan sh., Do‘stlik ko‘chasi, 44-uy"
 *               googlemap:
 *                 type: string
 *                 example: "https://maps.google.com/?q=41.0044,71.6702"
 *     responses:
 *       200:
 *         description: Kutubxona muvaffaqiyatli yangilandi
 *       404:
 *         description: Kutubxona topilmadi
 *       500:
 *         description: Server xatosi
 */
router.put("/kutubxonalar/:id", kutubxonaController.updateKutubxona);

/**
 * @swagger
 * /api/kutubxonalar/{id}:
 *   delete:
 *     tags: [Kutubxonalar]
 *     summary: ID bo‘yicha kutubxonani o‘chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Kutubxona ID raqami
 *     responses:
 *       200:
 *         description: Kutubxona muvaffaqiyatli o‘chirildi
 *       404:
 *         description: Kutubxona topilmadi
 *       500:
 *         description: Server xatosi
 */
router.delete("/kutubxonalar/:id", kutubxonaController.deleteKutubxona);

module.exports = router;
