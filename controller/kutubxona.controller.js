const { Kutubxona } = require("../model");
const kutubxonaValidation = require("../validation/kutubxona.validation");

// ✅ Yaratish
exports.createKutubxona = async (req, res) => {
  try {
    const { error } = kutubxonaValidation.validate(req.body);
    if (error)
      return res.status(400).json({ message: error.details[0].message });

    const { number, googlemap } = req.body;

    const existing = await Kutubxona.findOne({ where: { number } });
    if (existing)
      return res.status(400).json({ message: "Bu raqam allaqachon mavjud!" });

    const existingMap = await Kutubxona.findOne({ where: { googlemap } });
    if (existingMap)
      return res.status(400).json({ message: "Bu Google Map manzili mavjud!" });

    const kutubxona = await Kutubxona.create(req.body);
    res.status(201).json({
      message: "Kutubxona muvaffaqiyatli yaratildi!",
      data: kutubxona,
    });
  } catch (error) {
    res.status(500).json({ message: "Server xatosi!", error: error.message });
  }
};

// ✅ Barcha kutubxonalar
exports.getKutubxonalar = async (req, res) => {
  try {
    const kutubxonalar = await Kutubxona.findAll();
    res.json(kutubxonalar);
  } catch (error) {
    res.status(500).json({ message: "Server xatosi!", error: error.message });
  }
};

// ✅ ID bo‘yicha olish
exports.getKutubxonaById = async (req, res) => {
  try {
    const kutubxona = await Kutubxona.findByPk(req.params.id);
    if (!kutubxona)
      return res.status(404).json({ message: "Kutubxona topilmadi!" });
    res.json(kutubxona);
  } catch (error) {
    res.status(500).json({ message: "Server xatosi!", error: error.message });
  }
};

// ✅ Yangilash
exports.updateKutubxona = async (req, res) => {
  try {
    const { error } = kutubxonaValidation.validate(req.body);
    if (error)
      return res.status(400).json({ message: error.details[0].message });

    const kutubxona = await Kutubxona.findByPk(req.params.id);
    if (!kutubxona)
      return res.status(404).json({ message: "Kutubxona topilmadi!" });

    await kutubxona.update(req.body);
    res.json({ message: "Kutubxona yangilandi!", data: kutubxona });
  } catch (error) {
    res.status(500).json({ message: "Server xatosi!", error: error.message });
  }
};

// ✅ O‘chirish
exports.deleteKutubxona = async (req, res) => {
  try {
    const kutubxona = await Kutubxona.findByPk(req.params.id);
    if (!kutubxona)
      return res.status(404).json({ message: "Kutubxona topilmadi!" });

    await kutubxona.destroy();
    res.json({ message: "Kutubxona o‘chirildi!" });
  } catch (error) {
    res.status(500).json({ message: "Server xatosi!", error: error.message });
  }
};
