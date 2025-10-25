const { Admin } = require("../model");
const bcrypt = require("bcrypt");


const { createAdminValidation } = require("../validation/serviceadmin.validation");

exports.createAdmin = async (req, res) => {
  const { error } = createAdminValidation.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

    try {
      const { login, password } = req.body;

      if (!login || !password) {
        return res
          .status(400)
          .json({ message: "Login va parol talab qilinadi!" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newAdmin = await Admin.create({
        login,
        password: hashedPassword,
      });

      res.status(201).json({
        message: "Admin muvaffaqiyatli yaratildi!",
        admin: newAdmin,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Xatolik yuz berdi", error: error.message });
    }

};


// // ✅ Admin yaratish
// exports.createAdmin = async (req, res) => {
//   try {
//     const { login, password } = req.body;

//     if (!login || !password) {
//       return res
//         .status(400)
//         .json({ message: "Login va parol talab qilinadi!" });
//     }

//     // Parolni shifrlash
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newAdmin = await Admin.create({
//       login,
//       password: hashedPassword,
//     });

//     res.status(201).json({
//       message: "Admin muvaffaqiyatli yaratildi!",
//       admin: newAdmin,
//     });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Xatolik yuz berdi", error: error.message });
//   }
// };

// ✅ Barcha adminlarni olish
exports.getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.findAll();
    res.status(200).json(admins);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Xatolik yuz berdi", error: error.message });
  }
};

// ✅ Bitta adminni olish (ID orqali)
exports.getAdminById = async (req, res) => {
  try {
    const admin = await Admin.findByPk(req.params.id);
    if (!admin) return res.status(404).json({ message: "Admin topilmadi!" });
    res.status(200).json(admin);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Xatolik yuz berdi", error: error.message });
  }
};

// ✅ Adminni yangilash
exports.updateAdmin = async (req, res) => {
  try {
    const { login, password } = req.body;
    const admin = await Admin.findByPk(req.params.id);

    if (!admin) return res.status(404).json({ message: "Admin topilmadi!" });

    if (login) admin.login = login;
    if (password) admin.password = await bcrypt.hash(password, 10);

    await admin.save();
    res.status(200).json({ message: "Admin yangilandi!", admin });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Xatolik yuz berdi", error: error.message });
  }
};

// ✅ Adminni o‘chirish
exports.deleteAdmin = async (req, res) => {
  try {
    const admin = await Admin.findByPk(req.params.id);
    if (!admin) return res.status(404).json({ message: "Admin topilmadi!" });

    await admin.destroy();
    res.status(200).json({ message: "Admin o‘chirildi!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Xatolik yuz berdi", error: error.message });
  }
};
