var settings=require("../../settings")
exports.insertProduct=function(req,res){
    console.log(req.body)
    var object={
        productName:req.body.productName,
        price:req.body.price,
        cat_id:oid(req.body.cat_id),
        subcat_id:oid(req.body.subcat_id),
        subsubcat_id:oid(req.body.subsubcat_id),
        description:req.body.description,
        size:req.body.size,
        brand:req.body.brand,
        type:req.body.type,
        discountPrice:req.body.discountPrice,
        rating:req.body.rating,
        offers:req.body.offers, 
        colors:req.body.colors  
       };
    settings.conn.tbl_products.insert(object,function(err,data){
        if (err)
        console.log(err);
        else
        console.log(data)
        console.log("Ins")
        res.send({_id:data._id})
        })
    }

exports.getProduct=function(req,res){
    settings.conn.tbl_products.find(function(err,data){
        if (err)
        console.log(err);
        else
        res.send(data) 
        })
}

exports.updateProjectImageName=function(req,res){
     
        console.log("in updateProjectImageName")
        console.log("id to update image:::::"+req.body.id)
        console.log("image name:::  "+req.body.image_name)
          
       settings.conn.tbl_products.update({_id:oid(req.body.id)},{$set:{image_name:req.body.image_name}},function(err,data){
            if (err)
            res.send({result:error}) 
            else
            console.log("executing")
             res.send(data)
        
            })

}

exports.productListBySubSubCatId=function(req,res){
    console.log("subsubcat_id_for_product_list::::"+req.body.subsubcat_id)
    settings.conn.tbl_products.find({subsubcat_id:oid(req.body.subsubcat_id)},function(err,data){
        if (err)
        console.log(err);
        else
        res.send(data) 
        })
}
exports.productListInfo=function(req,res){
    console.log("prodservice")
   console.log("prodi"+req.body.prodid)
    settings.conn.tbl_products.find({_id:oid(req.body.prodid)},function(err,data){
  if (err)
           console.log(err)
           else
          
            res.send(data)
       
           })

}