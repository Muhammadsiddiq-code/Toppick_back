const { Restaran } = require("../model");
const {
  createRestaranValidation,
  updateRestaranValidation,
} = require("../validation/restaran.validation");

exports.createRestaran = async (req, res) => {
  try {
    const { error } = createRestaranValidation.validate(req.body);
    if (error)
      return res.status(400).json({ message: error.details[0].message });

    const newRestaran = await Restaran.create(req.body);
    res.status(201).json({ message: "Restaran yaratildi", data: newRestaran });
  } catch (err) {
    res.status(500).json({ message: "Server xatosi", error: err.message });
  }
};

exports.getRestarans = async (req, res) => {
  try {
    const restorans = await Restaran.findAll();
    res.json(restorans);
  } catch (err) {
    res.status(500).json({ message: "Server xatosi", error: err.message });
  }
};

exports.getRestaranById = async (req, res) => {
  try {
    const restaran = await Restaran.findByPk(req.params.id);
    if (!restaran)
      return res.status(404).json({ message: "Restaran topilmadi" });
    res.json(restaran);
  } catch (err) {
    res.status(500).json({ message: "Server xatosi", error: err.message });
  }
};

exports.updateRestaran = async (req, res) => {
  try {
    const { error } = updateRestaranValidation.validate(req.body);
    if (error)
      return res.status(400).json({ message: error.details[0].message });

    const restaran = await Restaran.findByPk(req.params.id);
    if (!restaran)
      return res.status(404).json({ message: "Restaran topilmadi" });

    await restaran.update(req.body);
    res.json({ message: "Restaran yangilandi", data: restaran });
  } catch (err) {
    res.status(500).json({ message: "Server xatosi", error: err.message });
  }
};

exports.deleteRestaran = async (req, res) => {
  try {
    const restaran = await Restaran.findByPk(req.params.id);
    if (!restaran)
      return res.status(404).json({ message: "Restaran topilmadi" });

    await restaran.destroy();
    res.json({ message: "Restaran o‘chirildi" });
  } catch (err) {
    res.status(500).json({ message: "Server xatosi", error: err.message });
  }
};
