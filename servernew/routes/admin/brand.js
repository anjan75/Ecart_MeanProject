express=require("express")
router=express.Router();
var brand_controller=require('../../controllers/admin_controllers/brandController');
router.post('/insBrand',brand_controller.insertBrandPost);
router.get('/getBrand',brand_controller.brandList);
router.post('/updateBrand',brand_controller.updateBrand);
module.exports=router;