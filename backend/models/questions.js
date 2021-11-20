const mongoose = require('mongoose');


const questionSchema = mongoose.Schema({
   
    QuestionLink:{
        type:String,
        required:true
    },

    Companies:{
        type:Array,
        required:true
    },

    Question:{
        type:String,
        required:true
    },

    addedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    
    isContributed:{
        type:Boolean,
        default:false
    }


},{timestamps:true});



const Questions = mongoose.model("questions",questionSchema);
module.exports = Questions;

