const mongoose = require("mongoose");

const NODE_ENV = process.env.NODE_ENV;
const dbConnect = () => {
  const DB_URI =
    NODE_ENV === "test" ? process.env.DB_URI_TEST : process.env.DB_URI;
  mongoose.connect(
    DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err, res) => {
      if (!err) {
        console.log("****Conexion Correcta****");
      } else {
        console.log("****Error de Conexion****");
      }
    }
  );
};

module.exports = dbConnect;
