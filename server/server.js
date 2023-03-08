const express = require("express")
const app = express()
const PORT = process.env.PORT || 5400
const cookieParser = require("cookie-parser")
const mongoose = require("mongoose")
const cors = require("cors")
const userRoute = require("./router/userRoute")
const bodyParser = require("body-parser")
require("dotenv").config()

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
    cors({
      origin: ["http://localhost:3000"],
      credentials: true,
    })
  );

app.use("/api", userRoute)

mongoose.connect('mongodb://127.0.0.1:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connexion à la base de données réussie'))
  .catch((err) => console.log('Erreur de connexion à la base de données', err));

app.listen(PORT, () => {
    console.log(`server demarer sur http://localhost: ${PORT}`)
})