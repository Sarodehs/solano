const mongoose = require('mongoose');
// const Schema = mongoose.Schema();


const TicketsSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
 
    createddate:{
        type:Date,
        required:true, 
    },
    reason:{
        type:String,
        required:true,
    },
    issue:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        required:true,
    },
  
});

module.exports = mongoose.model("Tickets",TicketsSchema);


