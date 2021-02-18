var settings=require("../../settings")
var token=require("jsonwebtoken")
var nm=require("nodemailer")
const { getNumberOfCurrencyDigits } = require("@angular/common")
exports.upload=(req,res)=>{
        console.log("welcome")
        res.send({hi:"submited"})
        }

        exports.insertUser=function(req,res){
            var object={
                email:req.body.email,
                password:req.body.password,
                
                firstname:req.body.firstname,
                lastname:req.body.lastname,
                address:req.body.address,
                active:0
               
               };
             settings.conn.tbl_user_registration.insert(object,function(err,data)
             {
                if (err)
                console.log(err);
                else
                {
                    linktxt="http://localhost:4200/us/activate;em="+req.body.email
                    transporter=nm.createTransport({
                        service:"Gmail",
                        auth:{
                            user:"gomang609@gmail.com",
                            pass:"a6092324$"
                        }
                    })
                    transporter.sendMail({
                        to:req.body.email,
                        from:"gomang609@gmail.com",
                        subject:"Activation Link",
                        html:"To Activate Account click on "+linktxt
                    },function(err)
                    {
                     if(err)
                     console.log(err)
                     else
                     console.log("Mail Sent")
                    
                  })

                   
             
                 res.send({result:"Registration Completed"})
                }
              
            })
        }

       
        
        exports.updateUserActiveEmail=function(req,res){
     
           console.log("email:::::"+req.body.email)
        //console.log("active:::  "+req.body.active)
        //console.log("id:"+oid(req.body.id))
            var dataobj=req.body
            console.log(dataobj.email[0])
              
           //settings.conn.tbl_user_registration.update({email:'"'+req.body.email+'"'},{$set:{active:1}},function(err,data){
           settings.conn.tbl_user_registration.update({email:dataobj.email[0]},{$set:{active:1}},function(err,data){
            
                if (err)
                res.send({result:error}) 
                else
                console.log("executing")
                 res.send(data)
            
              })
    
    }

  


exports.userAuthService=function(req,res){
    console.log(req.body)
    console.log(req.body.emailid)
    console.log("Hi")
    
    settings.conn.tbl_user_registration.find({email:req.body.emailid,password:req.body.pwd},
    function(err,result){
    if(err)
    {
    console.log(err)
    res.send(err)
    }
    else
    {
        //console.log(email)
        //console.log(password)
        console.log("hihihi")
        console.log(result.length)
        if(result.length==0)
        {
            res.send({invalid:true})
        }
        else
        {
        var active=result[0].active
        if(active==0)
        {
            res.send({noactive:true})
        }
        else
        {
            var payload={
                username:result[0].firstname,
                email:result[0].email,
                auth:true
            }
            var tk=token.sign(payload,"#$%^^",{expiresIn:"2h"})
            res.send({auth:tk})
        }
    }
    }
})
}