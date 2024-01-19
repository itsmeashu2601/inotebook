const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notesSchema = new Schema({
    title :{
        type: String,
        required : true
    },
    description :{
        type: String,
        default : "General"
    },
    tag :{
        type: String,
        required : true
    },
    date :{
        type: Date,
        default : Date.now
    }
    
  });

  module.exports = mongoose.model('notes',notesSchema);