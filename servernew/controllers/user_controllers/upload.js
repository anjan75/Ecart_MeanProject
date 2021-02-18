rt=express.Router()
rt.get("/uploadMet",(req,res)=>{
console.log("welcome")
res.send({hi:"submited"})
})

module.exports=rt