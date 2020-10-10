const User = require('../model/User');
// const Branduser = require('../model/Branduser');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const Joi = require('@hapi/joi');
const BrandEmployee=require('../model/BrandEmployee');

exports.register = async(req,res)=>
{
    

    //Validate USER DATA Before SUBMIT
   
    // const schema = Joi.object({ 
    //     firstName: Joi.string().min(4).max(20).required(),
    //     lastName: Joi.string().min(4).max(20).required(),
    //     country: Joi.string().min(4).required(),
    //     city: Joi.string().min(3).required(),
    //     companyName: Joi.string().min(4).required(),
    //     websiteUrl: Joi.string().min(4).required(),
    //     email: Joi.string().min(8).required(),
    //     password: Joi.string().min(8).required()
    // });
    
    // const {error} = schema.validate(req.body);
    
    // if (error) return res.status(400).send(error.details[0].message);

    //Check if email already on Database

    // const emailExist = await User.findOne({email:req.body.email});
    // if(emailExist) return res.status(400).send('Email already exist');

    //User password hashing

    const salt = await bcrypt.genSalt(10);
    const hashedPassword= await bcrypt.hash(req.body.influencer.influencerDetails.password, salt);
    // create new user

    const user = new User({
        userType: req.body.userType,
        eConcent : {
            isAccepted: req.body.eConcent.isAccepted,
            signature: req.body.eConcent.signature
        },
        brand : null,
        influencer: {
         influencerDetails : {
             firstName: req.body.influencer.influencerDetails.firstName,
             lastName: req.body.influencer.influencerDetails.lastName,
             country: req.body.influencer.influencerDetails.country,
             city: req.body.influencer.influencerDetails.city,
             email: req.body.influencer.influencerDetails.email,
             password: hashedPassword
             }
         }
    })
     try {
         const savedUser = await user.save();
         // console.log(savedUser);
 
         res.send(savedUser);
         
     } catch (error) {
         res.status(400).send(error);
     }
 


    
   //Create new user

//    const user = new User({
//        userType: "influencer",
//        eConcent : {
//            isAccepted: true,
//            signature: "abc123b"
//        },
//        brand : null,
//        influencer: {
//         influencerDetails : {
//             firstName: "xAAAAAAAAAAb",
//             lastName: "BAAAAAAAAAAb",
//             country: "CAAAAAAAAAAb",
//             city: "DAAAAAAAAAAb",
//             email: "schecssssask@gbmail.com",
//             password: "FAAAAAAAAAAb"
//             }
//         }
//    })
//     try {
//         const savedUser = await user.save();
//         // console.log(savedUser);

//         res.send(savedUser);
        
//     } catch (error) {
//         res.status(400).send(error);
//     }
}

exports.login = async(req,res) =>
{
    //User Validation before login
    
    const schema = Joi.object({ 
        email: Joi.string().min(6).required(),
        password: Joi.string().min(6).required()
    });
    
    const {error} = schema.validate(req.body);
    
    if (error) return res.status(400).send(error.details[0].message);
    
     //Check if email is on Database
    
     const user = await User.findOne({email:req.body.email});
     if(!user) return res.status(400).send('There is no Account with this Email');
     
     //Password Validation
     const validPass = await bcrypt.compare(req.body.password, user.password);
     if(!validPass) return res.status(400).send('Invalid password');
    
     //Create and assign jwt tokken
     const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
     res.header('auth-token',token).send(token);
    
     res.send('User logged in');
    
}    

exports.delete =  async(req,res)=>{

    User.findOne({_id: req.params.id}, function (error, user){
        console.log("This object will get deleted " + user);
        
        user.remove();
        res.send("This user is removed "+ user.firstName);
    
    });
    
}

exports.edit =  function (req,res){
    var conditions ={_id: req.params.id};
    if(req.body != {email:req.body.email} || req.body != req.body.password){
        User.updateOne(conditions, req.body)   
        .then(doc =>{
            if(!doc){
                return res.status(404).end();}
                return res.status(200).json(doc);
            })
            .catch(err => next(err));
        
    }
    else{
        res.send("cant update email or password");

    }
   
    }