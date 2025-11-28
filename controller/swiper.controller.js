// const { swiper } = require("../model")

// exports.createSwiper = async (req, res) => {
//     // if (error) return res.status(400).json({ message: error.details[0].message })
//     try {
//         const { img } = req.body
//         if (!img) {
//             return res.status(400).json({message: "swiper talab qilinadi"})
//         }

//         const newSwiper = await swiper.create({
//             img
//         })

//         res.status(201).json({
//             message: "swiper yaratildi hursand bolaver",
//             swiper: newSwiper
//         })
//     } catch (err) {
//         res.status(500).json({message: "xatolik bor server error", err: err.message})
//     }
// }


// exports.getSwiper = async (req, res) => {
//     try {
//         const swiper = await swiper.findAll()
//         res.status(200).json(swiper)
//     } catch (err) {
//         res.status(500).json({message: "server error hatoyini tuzat", err: err.message})
//     }
// }

// exports.getSwiperId = async(req,res) => {
//     try {
//         const swiper = await swiper.findByPk(req.params.id)
//         if (!swiper) return res.status(404).json({ message: "swiper topilmadi" })
//         res.status(200).json(swiper)
//     } catch (err) {
//         res.status(500).json({message: "server error togirla errorrini", err: err.message})
//     }
// }

// exports.deleteSwiper = async (req, res) => {
//     try {
//         const swiper = await swiper.findByPk(req.params.id)
//         if (!swiper) return res.status(404).json({ message: "swiper topilmadi", })
//         await swiper.destroy(
//         res.status(200).json({message: "ochirildi hotirjam bol"}))
//     } catch (err) {
//         res.status(500).json({message :"server error hardoimgidek error bor senda", err: err.message})
//     }
// }
















const { Swiper } = require("../model");

exports.createSwiper = async (req, res) => {
  try {
    const { img } = req.body;
    if (!img) {
      return res.status(400).json({ message: "Swiper talab qilinadi" });
    }

    const newSwiper = await Swiper.create({ img });

    res.status(201).json({
      message: "Swiper yaratildi, hursand bolaver",
      swiper: newSwiper,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Xatolik bor server error", err: err.message });
  }
};

exports.getSwipers = async (req, res) => {
  try {
    const swipers = await Swiper.findAll();
    res.status(200).json(swipers);
  } catch (err) {
    res.status(500).json({ message: "Server error", err: err.message });
  }
};

exports.getSwiperById = async (req, res) => {
  try {
    const swiper = await Swiper.findByPk(req.params.id);
    if (!swiper) return res.status(404).json({ message: "Swiper topilmadi" });
    res.status(200).json(swiper);
  } catch (err) {
    res.status(500).json({ message: "Server error", err: err.message });
  }
};

exports.deleteSwiper = async (req, res) => {
  try {
    const swiper = await Swiper.findByPk(req.params.id);
    if (!swiper) return res.status(404).json({ message: "Swiper topilmadi" });

    await swiper.destroy();
    res.status(200).json({ message: "Ochirildi, hotirjam bol" });
  } catch (err) {
    res.status(500).json({ message: "Server error", err: err.message });
  }
};
