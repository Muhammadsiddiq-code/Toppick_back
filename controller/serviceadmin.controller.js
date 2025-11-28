// const { Admin } = require("../model");
// // const bcrypt = require("bcrypt");


// const { createAdminValidation } = require("../validation/serviceadmin.validation");

// // exports.createAdmin = async (req, res) => {
// //   const { error } = createAdminValidation.validate(req.body);
// //   if (error) return res.status(400).json({ message: error.details[0].message });

// //     try {
// //       const { login, password } = req.body;

// //       if (!login || !password) {
// //         return res
// //           .status(400)
// //           .json({ message: "Login va parol talab qilinadi!" });
// //       }

// //       // const hashedPassword = await bcrypt.hash(password, 10);

// //       const newAdmin = await Admin.create({
// //         login,
// //         password,
// //       });

// //       res.status(201).json({
// //         message: "Admin muvaffaqiyatli yaratildi!",
// //         admin: newAdmin,
// //       });
// //     } catch (error) {
// //       res
// //         .status(500)
// //         .json({ message: "Xatolik yuz berdi", error: error.message });
// //     }

// // };




// const jwt = require("jsonwebtoken");
// const JWT_SECRET = "sizning_majhurlik_kalitingiz"; // uni .env faylga qo'yish tavsiya qilinadi

// exports.createAdmin = async (req, res) => {
//   const { error } = createAdminValidation.validate(req.body);
//   if (error) return res.status(400).json({ message: error.details[0].message });

//   try {
//     const { login, password } = req.body;

//     if (!login || !password) {
//       return res
//         .status(400)
//         .json({ message: "Login va parol talab qilinadi!" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newAdmin = await Admin.create({
//       login,
//       password: hashedPassword,
//     });

//     res.status(201).json({
//       message: "Admin muvaffaqiyatli yaratildi!",
//       admin: { id: newAdmin.id, login: newAdmin.login },
//     });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Xatolik yuz berdi", error: error.message });
//   }
// };

// // ===== LOGIN ENDPOINT =====
// exports.loginAdmin = async (req, res) => {
//   try {
//     const { login, password } = req.body;
//     if (!login || !password)
//       return res
//         .status(400)
//         .json({ message: "Login va parol talab qilinadi!" });

//     const admin = await Admin.findOne({ where: { login } });
//     if (!admin) return res.status(404).json({ message: "Admin topilmadi!" });

//     const isMatch = await bcrypt.compare(password, admin.password);
//     if (!isMatch) return res.status(400).json({ message: "Parol noto‘g‘ri!" });

//     const token = jwt.sign({ id: admin.id, login: admin.login }, JWT_SECRET, {
//       expiresIn: "1h",
//     });

//     res.status(200).json({
//       message: "Login muvaffaqiyatli!",
//       token,
//       admin: { id: admin.id, login: admin.login },
//     });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Xatolik yuz berdi", error: error.message });
//   }
// };


// // exports.createAdmin = async (req, res) => {
// //   try {
// //     const { login, password } = req.body;

// //     if (!login || !password) {
// //       return res
// //         .status(400)
// //         .json({ message: "Login va parol talab qilinadi!" });
// //     }

// //     // Parolni shifrlash
// //     const hashedPassword = await bcrypt.hash(password, 10);

// //     const newAdmin = await Admin.create({
// //       login,
// //       password: hashedPassword,
// //     });

// //     res.status(201).json({
// //       message: "Admin muvaffaqiyatli yaratildi!",
// //       admin: newAdmin,
// //     });
// //   } catch (error) {
// //     res
// //       .status(500)
// //       .json({ message: "Xatolik yuz berdi", error: error.message });
// //   }
// // };

// exports.getAllAdmins = async (req, res) => {
//   try {
//     const admins = await Admin.findAll();
//     res.status(200).json(admins);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Xatolik yuz berdi", error: error.message });
//   }
// };

// exports.getAdminById = async (req, res) => {
//   try {
//     const admin = await Admin.findByPk(req.params.id);
//     if (!admin) return res.status(404).json({ message: "Admin topilmadi!" });
//     res.status(200).json(admin);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Xatolik yuz berdi", error: error.message });
//   }
// };

// exports.updateAdmin = async (req, res) => {
//   try {
//     const { login, password } = req.body;
//     const admin = await Admin.findByPk(req.params.id);

//     if (!admin) return res.status(404).json({ message: "Admin topilmadi!" });

//     if (login) admin.login = login;
//     if (password) admin.password = await bcrypt.hash(password, 10);

//     await admin.save();
//     res.status(200).json({ message: "Admin yangilandi!", admin });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Xatolik yuz berdi", error: error.message });
//   }
// };

// exports.deleteAdmin = async (req, res) => {
//   try {
//     const admin = await Admin.findByPk(req.params.id);
//     if (!admin) return res.status(404).json({ message: "Admin topilmadi!" });

//     await admin.destroy();
//     res.status(200).json({ message: "Admin o‘chirildi!" });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Xatolik yuz berdi", error: error.message });
//   }
// };

























const { Admin } = require("../model");
// bcrypt olib tashlanadi yoki ishlatilmaydi
const jwt = require("jsonwebtoken");
const {
  createAdminValidation,
} = require("../validation/serviceadmin.validation");

const JWT_SECRET = process.env.JWT_SECRET || "sizning_majhurlik_kalitingiz";

// ===== CREATE ADMIN (parol plain text saqlanadi) =====
exports.createAdmin = async (req, res) => {
  const { error } = createAdminValidation.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    const { login, password } = req.body;

    if (!login || !password)
      return res
        .status(400)
        .json({ message: "Login va parol talab qilinadi!" });

    // PAROL HERE: plain text tarzida saqlanadi (hashlanmaydi)
    const newAdmin = await Admin.create({
      login,
      password,
    });

    res.status(201).json({
      message: "Admin muvaffaqiyatli yaratildi!",
      admin: {
        id: newAdmin.id,
        login: newAdmin.login,
        password: newAdmin.password,
      },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Xatolik yuz berdi", error: error.message });
  }
};

// ===== LOGIN ADMIN (plain text taqqoslash) =====
exports.loginAdmin = async (req, res) => {
  try {
    const { login, password } = req.body;
    if (!login || !password)
      return res
        .status(400)
        .json({ message: "Login va parol talab qilinadi!" });

    const admin = await Admin.findOne({ where: { login } });
    if (!admin) return res.status(404).json({ message: "Admin topilmadi!" });

    // PLAIN TEXT TAQQOSLASH (bcrypt.compare ishlatilmaydi)
    if (String(password) !== String(admin.password)) {
      return res.status(400).json({ message: "Parol noto‘g‘ri!" });
    }

    // JWT yaratish
    const token = jwt.sign({ id: admin.id, login: admin.login }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({
      message: "Login muvaffaqiyatli!",
      token,
      admin: { id: admin.id, login: admin.login, password: admin.password },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Xatolik yuz berdi", error: error.message });
  }
};

// ===== GET ALL ADMINS (parol bilan qaytaradi) =====
exports.getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.findAll({
      attributes: ["id", "login", "password"],
    });
    res.status(200).json(admins);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Xatolik yuz berdi", error: error.message });
  }
};

// ===== GET ADMIN BY ID =====
exports.getAdminById = async (req, res) => {
  try {
    const admin = await Admin.findByPk(req.params.id, {
      attributes: ["id", "login", "password"],
    });
    if (!admin) return res.status(404).json({ message: "Admin topilmadi!" });
    res.status(200).json(admin);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Xatolik yuz berdi", error: error.message });
  }
};

// ===== UPDATE ADMIN (agar password kelgan bo'lsa plain text sifatida saqlanadi) =====
exports.updateAdmin = async (req, res) => {
  try {
    const { login, password } = req.body;
    const admin = await Admin.findByPk(req.params.id);
    if (!admin) return res.status(404).json({ message: "Admin topilmadi!" });

    if (login) admin.login = login;
    if (password) admin.password = password; // plain text saqlanadi

    await admin.save();

    res.status(200).json({
      message: "Admin yangilandi!",
      admin: { id: admin.id, login: admin.login, password: admin.password },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Xatolik yuz berdi", error: error.message });
  }
};

// ===== DELETE ADMIN =====
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
