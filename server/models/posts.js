import mongoose from "mongoose";



const postschema=mongoose.Schema({
    firstname:String,
    lastname:String,
    mail:String,
    password:String,
    nameofpro:String,
    price:Number,
     quantity:Number
   
    
});

var postmessage=mongoose.model("postmessage",postschema);

export default postmessage;