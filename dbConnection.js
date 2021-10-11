const mongoose = require('mongoose');
const mongoDBurl = 'mongodb://localhost:27017/mtsPosts';
mongoose.connect(mongoDBurl,{useNewURLParser:true});






module.exports = {};