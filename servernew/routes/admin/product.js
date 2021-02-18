express=require("express")
router=express.Router();
var product_controller=require('../../controllers/admin_controllers/productController');
router.post('/insProduct',product_controller.insertProduct);
router.get('/getProduct',product_controller.getProduct);
router.post('/updateProjectImageName',product_controller.updateProjectImageName);
router.post('/productListBySubSubCatId',product_controller.productListBySubSubCatId);
router.post('/productListInfo',product_controller.productListInfo);
module.exports=router; 