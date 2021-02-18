var settings=require("../../settings")
exports.insertSubCategory=function(req,res){
    console.log(req.body.category_name)
    var obj={
        cat_id:oid(req.body.cat_id),
        sub_category_name:req.body.sub_category_name
       };
    settings.conn.tbl_subcategory.insert(obj,function(err,data){
        if (err)
        console.log(err);
        else
        console.log(data)
        res.send("data inserted")
        })
    }

// exports.SubCategoryList=function(req,res){
//     settings.conn.tbl_subcategory.find("sub_category_name",function(err,data){
//         if (err)
//         console.log(err);
//         else
//         res.send(data) 
//         })
// }


exports.SubCategoryList=function(req,res){
    settings.conn.tbl_subcategory.aggregate([{
        $lookup:{
            from:"tbl_category",
            localField:"cat_id",
            foreignField:"_id",
            as:"data_cat"
        }
},
{$unwind:"$data_cat"}

],function(err,data){
        if (err)
        console.log(err);
        else    
        res.send(data) 
        })
}

exports.subCategoryListByCatId=function(req,res){
    console.log(req.body)
    console.log()
    settings.conn.tbl_subcategory.find({cat_id:oid(req.body.cat_id)},function(err,data){
        if (err)
        console.log(err);
        else
        res.send(data) 
        })
}
exports.updatesubategory=function(req,res){
    console.log(req.body )
  var query={}
//   query={"columnName":req.body.columnName,"columnData":req.body.columnData}
query[req.body.columnName]=req.body.columnData
  // console.log(query)    
settings.conn.tbl_subcategory.update({_id:oid(req.body.id)},{$set:query})
res.send({result:"hi"})
    }