const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mysql2 = require("mysql2");
const authenticateToken = require("./middleware/auth");
const authRoutes = require("./routes/auth");

const app = express();

dotenv.config();
const port = process.env.port || 3000;
app.use(express.json());
app.use(cors());
app.use("/auth",authRoutes);

app.get("/", (req, res) => res.send("Hello World!"));


//inserire qui la creazione del database e nel file users della cartella
//models il collegamento con la tabella users del db
const connessione = mysql2.createConnection(process.env.connessione);
connessione.connect((error) => {
    if(error){
        console.error(error);
        return -1;
    }
    app.listen(port, () => console.log(`Server in ascolto sulla porta ${port}!`));
});