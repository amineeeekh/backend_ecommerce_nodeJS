const express = require('express');
const router = express.Router();
const Categorie=require("../models/categorie")

// afficher la liste des categories.
router.get('/', async (req, res )=> {
try {
const cat = await Categorie.find({}, null, {sort: {'_id': -1}})
res.status(200).json(cat);
} catch (error) {
res.status(404).json({ message: error.message });
}
});
module.exports = router;