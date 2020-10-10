const mongoose = require('mongoose');
// const Branduser = require('../model/Branduser');
var Schema = mongoose.Schema;

var userDetails= new Schema({
    id :mongoose.Schema.Types.ObjectId,

    firstName:{
        type: String,
        // required:true,
        min:4,
        max:20


        },
    lastName:{
            type: String,
            // required:true,
            min:4,
            max:20  

            },
    country:{
                type: String,
                // required:true,
                min:4,
                max:20
    
    
                },
    city:{
              type: String,
            //   required:true,
              min:5,
              max:20
        
        
                }

    ,
     email:{
             type: String,
            //  required: true,
             min:6,
             max:100,
            
    },

     password:{
            type: String,
            // required: true,
            min:6,
            max:255
            }

})


const userSchema = new Schema(
    {
        userType: {
            type: String,
            enum : ['brand','influencer'],
            // default: 'brand'
                  },
        eConcent: {
                 isAccpeted:{type: Boolean},
                 date:{
                        type: Date,
                        default: Date.now
                       },
                 signature:{type: String}
                 },

       

        brand:{
             brandDetails: userDetails,
            // brandDetails:{  type: mongoose.Schema.Types.ObjectId,
            //     ref: 'userDetails' },
            brandCompany:{
                companyName:{type: String},
		        corporateHierarchy:{type: String},
		        websiteUrl:{type: String},
                addressUrl:{type: String}
            }
        },

        influencer:{
            influencerDetails:userDetails
        }

        
       

    });


    





// Custom validation for email
// userDetails.path('email').validate((val) => {
//     emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return emailRegex.test(val);
// }, 'Invalid e-mail.');




 // Virtual for user's full name
// userDetails
// .virtual("fullName")
// .get(function () {
//     return this.firstName + " " + this.lastName;
// });


    
    module.exports= mongoose.model('User',userSchema);
   

   