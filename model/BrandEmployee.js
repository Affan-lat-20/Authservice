const { string } = require('@hapi/joi');
const mongoose = require('mongoose');
const User = require('../model/User');
const Role = require('../model/Role');

var Schema = mongoose.Schema;

const brandemployeeSchema = new Schema(
    {
        Companyid:{  type: mongoose.Schema.Types.ObjectId,
            ref: 'User' 
                },

        employee:{


            employeePicture:{
                type: String,
                required: true,
                
               },

            employeeFirstName:{
            type: String,
            required:true,
            min:4,
            max:255

                },
            employeeLastName:{
                type: String,
                required:true,
                min:4,
                max:255   
    
                },
                
            employeeEmail:{
                type: String,
                required: true,
                min:6,
                max:255
                 },
            employeePhoneNumber:{
                type : String,
                required:true,
                max:30
            },

            employeeCompanyName:{
                type: String,
                required:true,
                min:5,
                max:255
                
             },

        roleid:{  type: mongoose.Schema.Types.ObjectId,
            ref: 'Role' }, 

            }
 });
 module.exports= mongoose.model('BrandEmployee',brandemployeeSchema);