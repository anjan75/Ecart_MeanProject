// var settings=require("../../settings")
// exports.checkAdminAuthPost=function(req,res){
//     settings.conn.tbl_admin.find(
//         {username:req.body.username,password:req.body.password},
//         function(err,data){
//         if (err)
//         res.send({erro})
//         else{
//         console.log(data)
//         if(data.length==0){
//             console.log("user not authenticated")
//         res.send("0");
//         }
//         else{
//             // var active=data[0].active
//             // console.log(active)
//             console.log("test")
//             res.send("1")
//         }
//         }
//         })
//     }



var settings=require("../../settings")
var secret=require("../../secret")
exports.checkAdminAuthPost=function(req,res){
    
    settings.conn.tbl_admin.find({username:req.body.username,password:req.body.password},function(err,data){
        if (err)
res.send({err})
        else{
            console.log(req.body)
        console.log(data)
        if(data.length==0){
            console.log("user not authenticated")
        res.send("0");
        }
        else{
            var payload={
                user:data[0].username,
                role:data[0].role
            }
            var token=jwt.encode(payload,secret.sec_key)
            console.log(token)
            res.send({result:1,token:token})
        }
        
    }
        })
    }