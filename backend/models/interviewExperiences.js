const mongoose =  require('mongoose');
const companySchema = mongoose.Schema({
    interviewTitle:{
        type:String,
        required:true
    },
    interviewShortDesc:{
        type:String,
        required:true
    },
    interviewArticleLink:{
        type:String,
        required:true
    },
    companyLogo:{
        type:String
    }
},{timestamps:true});

const Company = mongoose.model('InterviewExps',companySchema);
module.exports = Company;