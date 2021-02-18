express=require("express")
router=express.Router();
var category_controller=require('../../controllers/admin_controllers/categoryController');
router.post('/insCategory',category_controller.insertCategoryPost);
router.get('/getCategory',category_controller.categoryList);
router.post('/updateCategory',category_controller.updateCategory);
module.exports=router;