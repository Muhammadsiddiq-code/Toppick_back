const { Oquvmarkaz } = require("../model");
const oquvmarkazValidation = require("../validation/oquvmarkaz.validation");

// 🟢 Yaratish
exports.createOquvmarkaz = async (req, res) => {
  try {
    const { error } = oquvmarkazValidation.validate(req.body);
    if (error)
      return res.status(400).json({ message: error.details[0].message });

    const { number, googlemap } = req.body;

    const existing = await Oquvmarkaz.findOne({ where: { number } });
    if (existing)
      return res.status(400).json({
        message: "Bu telefon raqami bilan markaz allaqachon mavjud!",
      });

    const existingMap = await Oquvmarkaz.findOne({ where: { googlemap } });
    if (existingMap)
      return res.status(400).json({
        message: "Bu Google Map manzili bilan markaz allaqachon mavjud!",
      });

    const newMarkaz = await Oquvmarkaz.create(req.body);
    res.status(201).json({
      message: "O‘quv markaz muvaffaqiyatli qo‘shildi!",
      data: newMarkaz,
    });
  } catch (error) {
    res.status(500).json({ message: "Server xatosi!", error: error.message });
  }
};

// 🟢 Barcha markazlar
exports.getOquvmarkazlar = async (req, res) => {
  try {
    const markazlar = await Oquvmarkaz.findAll();
    res.json(markazlar);
  } catch (error) {
    res.status(500).json({ message: "Server xatosi!", error: error.message });
  }
};

// 🟢 ID bo‘yicha olish
exports.getOquvmarkazById = async (req, res) => {
  try {
    const markaz = await Oquvmarkaz.findByPk(req.params.id);
    if (!markaz)
      return res.status(404).json({ message: "O‘quv markaz topilmadi!" });
    res.json(markaz);
  } catch (error) {
    res.status(500).json({ message: "Server xatosi!", error: error.message });
  }
};

// 🟢 Yangilash
exports.updateOquvmarkazById = async (req, res) => {
  try {
    const { error } = oquvmarkazValidation.validate(req.body);
    if (error)
      return res.status(400).json({ message: error.details[0].message });

    const markaz = await Oquvmarkaz.findByPk(req.params.id);
    if (!markaz)
      return res.status(404).json({ message: "O‘quv markaz topilmadi!" });

    await markaz.update(req.body);
    res.json({ message: "O‘quv markaz yangilandi!", data: markaz });
  } catch (error) {
    res.status(500).json({ message: "Server xatosi!", error: error.message });
  }
};

// 🟢 O‘chirish
exports.deleteOquvmarkazById = async (req, res) => {
  try {
    const markaz = await Oquvmarkaz.findByPk(req.params.id);
    if (!markaz)
      return res.status(404).json({ message: "O‘quv markaz topilmadi!" });

    await markaz.destroy();
    res.json({ message: "O‘quv markaz o‘chirildi!" });
  } catch (error) {
    res.status(500).json({ message: "Server xatosi!", error: error.message });
  }
};
