express=require("express");
router=express.Router();
var upload_controller=require('../../controllers/admin_controllers/uploadController');
router.post('/uploadMet',upload_controller.uploadController);
module.exports=router;