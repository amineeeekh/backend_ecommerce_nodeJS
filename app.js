const express=require("express")
const dotenv=require("dotenv")
const mongoose=require("mongoose")
const categorie = require("./models/categorie")
const categorieRouter=require("./routes/categorie.route")
const app=express()
dotenv.config()
app.get("/", (req, res) => {
  res.send("My website is working");
});
app.get("/accueil", (req, res) => {
    res.send("page accueil");
  });
  

// Connexion à la base données
mongoose.connect(process.env.DATABASECLOUD)
.then(() => {console.log("DataBase Successfully Connected");})
.catch(err => { console.log("Unable to connect to database", err);
process.exit(); });

app.use("/api/categorie",categorieRouter)
app.listen(process.env.PORT,()=>
console.log(`app executer sur le port ${process.env.PORT}`))