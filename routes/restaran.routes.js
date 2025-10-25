const express = require("express");
const router = express.Router();
const restaranController = require("../controller/restaran.controller");

/**
 * @swagger
 * tags:
 *   name: Restarans
 *   description: Restaranlar boshqaruvi
 */

/**
 * @swagger
 * /api/restarans:
 *   post:
 *     tags: [Restarans]
 *     summary: Yangi restaran qo‘shish
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Orzu Restorani"
 *               address:
 *                 type: string
 *                 example: "Namangan sh., Mustaqillik ko‘chasi, 5-uy"
 *               number:
 *                 type: string
 *                 example: "+998901234567"
 *               googlemap:
 *                 type: string
 *                 example: "https://maps.google.com/?q=41.0011,71.6725"
 *     responses:
 *       201:
 *         description: Restaran muvaffaqiyatli yaratildi
 *       400:
 *         description: Ma'lumotlar to‘liq emas
 *       500:
 *         description: Server xatosi
 */
router.post("/restarans", restaranController.createRestaran);

/**
 * @swagger
 * /api/restarans:
 *   get:
 *     tags: [Restarans]
 *     summary: Barcha restaranlarni olish
 *     responses:
 *       200:
 *         description: Restaranlar ro‘yxati
 *       500:
 *         description: Server xatosi
 */
router.get("/restarans", restaranController.getRestarans);

/**
 * @swagger
 * /api/restarans/{id}:
 *   get:
 *     tags: [Restarans]
 *     summary: ID bo‘yicha bitta restaranni olish
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Restaran ID raqami
 *     responses:
 *       200:
 *         description: Restaran topildi
 *       404:
 *         description: Restaran topilmadi
 *       500:
 *         description: Server xatosi
 */
router.get("/restarans/:id", restaranController.getRestaranById);

/**
 * @swagger
 * /api/restarans/{id}:
 *   put:
 *     tags: [Restarans]
 *     summary: ID bo‘yicha restaranni yangilash
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Restaran ID raqami
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Yangi Orzu Restorani"
 *               address:
 *                 type: string
 *                 example: "Namangan sh., Yangi ko‘cha, 12-uy"
 *               number:
 *                 type: string
 *                 example: "+998907654321"
 *               googlemap:
 *                 type: string
 *                 example: "https://maps.google.com/?q=41.0000,71.6700"
 *     responses:
 *       200:
 *         description: Restaran muvaffaqiyatli yangilandi
 *       404:
 *         description: Restaran topilmadi
 *       500:
 *         description: Server xatosi
 */
router.put("/restarans/:id", restaranController.updateRestaran);

/**
 * @swagger
 * /api/restarans/{id}:
 *   delete:
 *     tags: [Restarans]
 *     summary: ID bo‘yicha restaranni o‘chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Restaran ID raqami
 *     responses:
 *       200:
 *         description: Restaran muvaffaqiyatli o‘chirildi
 *       404:
 *         description: Restaran topilmadi
 *       500:
 *         description: Server xatosi
 */
router.delete("/restarans/:id", restaranController.deleteRestaran);

module.exports = router;
