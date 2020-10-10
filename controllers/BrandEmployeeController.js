const BrandEmployee = require('../model/BrandEmployee');


exports.registerEmployee = async(req,res)=>{
    const brandemployee = new BrandEmployee({
        Companyid: {_id:req.params.id},
            employee:{
                employeePicture:req.body.employee.employeePicture,
                employeeFirstName:req.body.employee.employeeFirstName,
                employeeLastName: req.body.employee.employeeLastName,
                employeeEmail: req.body.employee.employeeEmail,
                employeePhoneNumber: req.body.employee.employeePhoneNumber,
                employeeCompanyName: req.body.employee.employeeCompanyName
            }
    });
        try {
            const savedbrandemp = await brandemployee.save();
            // console.log(savedUser);
    
            res.send(savedbrandemp);
            
        } catch (error) {
            res.status(400).send(error);
        }

    }
    exports.employeeDelete =  async(req,res)=>{

        BrandEmployee.findOne({_id: req.params.id}, function (error, brandemployee){
            console.log("This object will get deleted " + brandemployee);
            
            brandemployee.remove();
            res.send("This user is removed "+ brandemployee);
        
        });
        
    }