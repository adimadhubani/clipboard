import mongoose from "mongoose"

const ClipboardSchema=new mongoose.Schema({
   code:{
    type:String,
    required:true,
    unique:true,
   },
   content:{
    type:String,
    required:true,
    
   },
   createdAt:{
    type:Date,
    default:Date.now,
    expires: 86400,
   },

});

export default mongoose.model('Clipboard', ClipboardSchema);