require("dotenv").config();
const express = require("express");
const dbConnect = require("./config/mongo");
const cors = require("cors");
const app = express();
const port = process.env.PORT;
app.use(express.static("storage"));
app.use(cors());
app.use(express.json());
/*
    Aqui invocamos a las rutas
*/

app.use("/api", require("./routes"));

app.listen(port, () => console.log(`http://localhost:${port}`));

dbConnect();
