const mongoose = require('mongoose');
// const Branduser = require('../model/Branduser');
var Schema = mongoose.Schema;

const companyproductSchema = new Schema(
    {
        productName:{
            type: String,
            required:true,
            min:4,
            max:255


            },
        productURL:{
                type: String,
                required:true,
                min:4,
                max:255   
    
                },
        productDescription:{
                    type: String,
                    required:true,
                    min:4,
                    max:255
        
        
                    },
        productDetails:{
                  type: String,
                  required:true,
                  min:5,
                  max:255
            
            
                    },
        region:{
                type: String,
                required:true,
                min:5,
                max:255
                
                
                        },
        brand:{
                type: String,
                required:true,
                min:5,
                max:255
                    
                    
                         },
        category:{
                type: String,
                required: true,
                min:6,
                max:255
            },

        socialmediaProfiles:{
            type: String,
            required: true,
            min:6,
            max:255
        },
        productImages: {
             type: String,
             required: true,
             
            },
       
        date:{
            type: Date,
            default: Date.now
             
        }

    });


    












    
    module.exports= mongoose.model('Companyproducts',companyproductSchema);
   

   