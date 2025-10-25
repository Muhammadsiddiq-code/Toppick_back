const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { sequelize } = require("./model");
const setupSwagger = require("./swagger/swagger");
// const userRoutes = require("./routes/user.routes");
// const customerRoutes = require("./routes/customer.routes");
// const eduRoutes = require("./routes/edu.routes");
const med = require("./routes/shifoxona.routes");
const adminRoutes = require("./routes/serviceadmin.routes");
const Restaran = require("./routes/restaran.routes");
const Oquvmarkaz = require("./routes/oquvmarkaz.routes");
const kutubxona = require("./routes/kutubxona.routes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5577;

app.use(express.json());
app.use(cors({ origin: "*" }));

// app.use("/api", userRoutes);
// app.use("/api", customerRoutes);
// app.use("/api", eduRoutes);
app.use("/api", med);
app.use("/api", adminRoutes);
app.use("/api", Restaran);
app.use("/api", Oquvmarkaz);
app.use("/api", kutubxona);

setupSwagger(app);

sequelize
  .sync()
  .then(() => {
    console.log(" Database ulandi");
    app.listen(PORT, () => {
      console.log(` Server running at http://localhost:${PORT}/swagger`);
    });
  })
  .catch((err) => console.error(" DB xatosi:", err));
