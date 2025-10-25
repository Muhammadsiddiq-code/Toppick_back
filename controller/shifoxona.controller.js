const { Med } = require("../model");
const {
  createMedValidation,
  updateMedValidation,
} = require("../validation/shifoxona.validation");

exports.createMed = async (req, res) => {
  try {
    const { error } = createMedValidation.validate(req.body);
    if (error)
      return res.status(400).json({ message: error.details[0].message });

    const newMed = await Med.create(req.body);
    res.status(201).json({ message: "Shifoxona yaratildi", data: newMed });
  } catch (err) {
    res.status(500).json({ message: "Server xatosi", error: err.message });
  }
};

exports.getMeds = async (req, res) => {
  try {
    const medlar = await Med.findAll();
    res.json(medlar);
  } catch (err) {
    res.status(500).json({ message: "Server xatosi", error: err.message });
  }
};

exports.getMedById = async (req, res) => {
  try {
    const med = await Med.findByPk(req.params.id);
    if (!med) return res.status(404).json({ message: "Shifoxona topilmadi" });
    res.json(med);
  } catch (err) {
    res.status(500).json({ message: "Server xatosi", error: err.message });
  }
};

exports.updateMed = async (req, res) => {
  try {
    const { error } = updateMedValidation.validate(req.body);
    if (error)
      return res.status(400).json({ message: error.details[0].message });

    const med = await Med.findByPk(req.params.id);
    if (!med) return res.status(404).json({ message: "Shifoxona topilmadi" });

    await med.update(req.body);
    res.json({ message: "Shifoxona yangilandi", data: med });
  } catch (err) {
    res.status(500).json({ message: "Server xatosi", error: err.message });
  }
};

exports.deleteMed = async (req, res) => {
  try {
    const med = await Med.findByPk(req.params.id);
    if (!med) return res.status(404).json({ message: "Shifoxona topilmadi" });

    await med.destroy();
    res.json({ message: "Shifoxona o‘chirildi" });
  } catch (err) {
    res.status(500).json({ message: "Server xatosi", error: err.message });
  }
};
