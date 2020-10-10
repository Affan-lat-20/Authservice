const router = require('express').Router();
const User = require('../model/User');
const Branduser = require('../model/Branduser');
const BrandEmployee = require('../model/BrandEmployee');


const { Router } = require('express');
const AuthController = require("../controllers/AuthController");
const BrandEmployeeController=require("../controllers/BrandEmployeeController");
// const { populate } = require('../model/Branduser');
// const { populate } = require('../model/BrandEmployee');

//const registerValidation = require('../validation');
// const bcrypt = require('bcryptjs');
// const jwt = require("jsonwebtoken");
// const Joi = require('@hapi/joi');

    
//register new user
router.post('/register',AuthController.register);

//login
router.post('/login',AuthController.login);

//delete user from db
router.delete('/delete/:id',AuthController.delete);


//update user info//

router.put('/edit/:id',AuthController.edit);

// create brandemployee
router.post('/:id/brandemployee',BrandEmployeeController.registerEmployee);
router.delete('/:id/employeeDelete',BrandEmployeeController.employeeDelete);


// ----Testing-BrandEmployee
// router.post('/:id/brandemployee',async(req,res)=>{
// const brandemployee = new BrandEmployee({
//     Companyid: {_id:req.params.id},
//         employee:{
//             employeePicture:req.body.employee.employeePicture,
//             employeeFirstName:req.body.employee.employeeFirstName,
//             employeeLastName: req.body.employee.employeeLastName,
//             employeeEmail: req.body.employee.employeeEmail,
//             employeePhoneNumber: req.body.employee.employeePhoneNumber,
//             employeeCompanyName: req.body.employee.employeeCompanyName
//         }
// });
//     try {
//         const savedbrandemp = await brandemployee.save();
//         // console.log(savedUser);

//         res.send(savedbrandemp);
        
//     } catch (error) {
//         res.status(400).send(error);
//     }

   




//brandusers
// router.post('/:id/brandusers',async(req,res,) =>{

// const Branduser = new Branduser({
// 	Companyid: {_id: req.params.id},
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     phonenumber: req.body.phonenumber,
//     companyName: req.body.companyName,
//     role: req.body.role,
//     email: req.body.email
// });
//     try {
//         // populate('Companyid')
//         const savedbrandUser = await branduser.save();
        
//         // console.log(savedUser);

//         res.send(branduser);
        
//     } catch (error) {
//         res.status(400).send(error);
//     }

   
// });


// router.post('/:id/brandusers',async(req,res,) =>{
//     var conditions ={_id: req.params.id};
//     User.findOneAndUpdate(conditions,req.body.brandusers)


    
   
//    console.log(conditions._id)


//    .then((user)=>{
//        if(user != null){
//            user.brandusers.push(req.body);
//            user.save()
//            .then((user)=>{
//                User.findById(user._id)
//                .then((user)=>{
//                    res.statusCode=200;
//                    res.setHeader('Content-Type','application/json');
//                    res.send(user);
//                })
//            })
//        }
//    }) 
// });
// router.post('/:id/brandusers',async(req,res,) =>
// {
// 	User.findById(req.params._id)
// 	.then((user) => {
// 		if (user != null) {
			
// 			user.branduser.push(req.body);
//             user.save()
//             branduser.save()
// 			.then((user) => {
// 				User.findById(user._id)
// 					// .populate('comments.author')
// 					.then((user) => {
// 						res.statusCode = 200;
// 						res.setHeader('Content-Type', 'application/json');
// 						res.json(user);
// 					})
// 			}, (err) => next(err));
// 		}
// 		else {
// 			err = new Error('user with ' + req.params.user_Id + ' not found');
// 			err.status = 404;
// 			return next(err);
// 		}
//     }
//     , (err) => (err))
// 	.catch((err) => (err));
// });


// router.post("/:id/branduser", (req, res, next) => {
// 	User.findById({_id: req.params.id})
// 	  .then(user => {
// 		if (!user) {
// 		  return res.status(404).json({
// 			message: "user not found"
// 		  });
// 		}
// 		const branduser = new User({
// 		//   _id: mongoose.Types.ObjectId(),
// 		  firstName: req.body.firstName,
// 		  lastName: req.body.lastName
// 		});
// 		return branduser.save();
// 	  })
// 	  .then(result => {
// 		console.log(result);
// 		res.status(201).json({
// 		  message: "userbrand stored",
// 		  createdOrder: {
// 			_id: result._id,
// 			product: result.product,
// 			quantity: result.quantity
// 		  }
// 		});
// 	  })
// 	  .catch(err => {
// 		console.log(err);
// 		res.status(500).json({
// 		  error: err
// 		});
	//   });
  






module.exports = router;