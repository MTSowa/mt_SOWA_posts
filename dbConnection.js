const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/blogPostTest"

const  connection = async function(){
    try {
        const connectionParams = {
            useNewUrlParser:true,
            useUnifiedTopology:true
        }
        await mongoose.connect(url,connectionParams)
        console.log('connected to database...')
    } catch (error) {
        console.log(error+' could not connect to database...')       
    }
}
//schema
const bptSchema = new mongoose.Schema({
    title:String,
    name:String,
    content:String
})
// imagePublic_id:String,
// //model
// const blogPostTest = mongoose.model('blogPost',bptSchema)





module.exports ={
    url:url,
    connection:connection,
    mongoose:mongoose,
    bptSchema:bptSchema,
} 