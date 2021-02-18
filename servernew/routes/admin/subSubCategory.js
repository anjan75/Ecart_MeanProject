express=require("express");
router=express.Router();
var category_controller=require('../../controllers/admin_controllers/subSubCategoryController');
router.post('/insSubSubCategory',category_controller.insertSubSubCategory);
router.get('/getSubSubCategory',category_controller.subSubCategoryList);
router.post('/subSubCategoryListBySubCatId',category_controller.subSubCategoryListBySubCatId);
router.post('/updatesubsubCategory',category_controller.updatesubsubategory);
module.exports=router;