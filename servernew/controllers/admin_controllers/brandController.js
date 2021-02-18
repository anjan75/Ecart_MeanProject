
var settings=require("../../settings")
exports.insertBrandPost=function(req,res){
    console.log(req.body.brand)
    settings.conn.tbl_brand.insert({brand:req.body.brand},function(err,data){
        if (err)
        console.log(err);
        else
        console.log(data)
        res.send({result:"data inserted"})

        })
    }

exports.updateBrand=function(req,res){
    console.log(req.body )
  var query={}
//   query={"columnName":req.body.columnName,"columnData":req.body.columnData}
query[req.body.columnName]=req.body.columnData
  //  console.log(query)    
settings.conn.tbl_brand.update({_id:oid(req.body.id)},{$set:query})
res.send({result:"hi"})
    }

    
exports.brandList=function(req,res){
  settings.conn.tbl_brand.find("brand",function(err,data){
      if (err)
      console.log(err);
      else
      res.send(data) 
      })
}