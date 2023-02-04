const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes = require("./routes/auth");

//dotenv.config();
dotenv.config({path:"/etc/secrets/.env"});

const app = express();
const port = process.env.port || 3000;

app.use(express.json());
app.use(cors());
app.use("/auth", authRoutes);

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Server in ascolto sulla porta ${port}!`));