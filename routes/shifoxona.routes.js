const express = require("express");
const router = express.Router();
const medController = require("../controller/shifoxona.controller");

/**
 * @swagger
 * tags:
 *   name: Meds
 *   description: Tibbiyot muassasalari (Med) boshqaruvi
 */

/**
 * @swagger
 * /api/meds:
 *   post:
 *     tags: [Meds]
 *     summary: Yangi tibbiyot muassasasi (Med) qo‘shish
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Namangan Shahar Poliklinikasi"
 *               number:
 *                 type: string
 *                 example: "+998901234567"
 *               address:
 *                 type: string
 *                 example: "Namangan, Yangi Namangan tumani, Mustaqillik ko'chasi 10-uy"
 *               googlemap:
 *                 type: string
 *                 example: "https://maps.google.com/?q=41.0011,71.6725"
 *     responses:
 *       201:
 *         description: Med muvaffaqiyatli qo‘shildi
 *       400:
 *         description: Ma'lumotlar to‘liq emas
 *       500:
 *         description: Server xatosi
 */
router.post("/meds", medController.createMed);

/**
 * @swagger
 * /api/meds:
 *   get:
 *     tags: [Meds]
 *     summary: Barcha Medlar ro‘yxatini olish
 *     responses:
 *       200:
 *         description: Medlar ro‘yxati
 *       500:
 *         description: Server xatosi
 */
router.get("/meds", medController.getMeds);

/**
 * @swagger
 * /api/meds/{id}:
 *   get:
 *     tags: [Meds]
 *     summary: ID bo‘yicha Medni olish
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Med ID raqami
 *     responses:
 *       200:
 *         description: Med topildi
 *       404:
 *         description: Med topilmadi
 *       500:
 *         description: Server xatosi
 */
router.get("/meds/:id", medController.getMedById);

/**
 * @swagger
 * /api/meds/{id}:
 *   put:
 *     tags: [Meds]
 *     summary: ID bo‘yicha Medni yangilash
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Med ID raqami
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               number:
 *                 type: string
 *               address:
 *                 type: string
 *               googlemap:
 *                 type: string
 *     responses:
 *       200:
 *         description: Med yangilandi
 *       404:
 *         description: Med topilmadi
 *       500:
 *         description: Server xatosi
 */
router.put("/meds/:id", medController.updateMed);

/**
 * @swagger
 * /api/meds/{id}:
 *   delete:
 *     tags: [Meds]
 *     summary: ID bo‘yicha Medni o‘chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Med ID raqami
 *     responses:
 *       200:
 *         description: Med muvaffaqiyatli o‘chirildi
 *       404:
 *         description: Med topilmadi
 *       500:
 *         description: Server xatosi
 */
router.delete("/meds/:id", medController.deleteMed);

module.exports = router;
