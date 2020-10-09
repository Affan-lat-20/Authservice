const { string } = require('@hapi/joi');
const mongoose = require('mongoose');
const User = require('../model/User');
var Schema = mongoose.Schema;

const roleSchema = new Schema({
    roleid :mongoose.Schema.Types.ObjectId,
    roleNames:{
        type: String,
        required:true,
        min:5,
        max:255
                                
        }
});
module.exports= mongoose.model('Role',roleSchema);
