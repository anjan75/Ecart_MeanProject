express=require("express")
router=express.Router();
var admin_auth_controller=require("../../controllers/admin_controllers/adminAuthController")
router.post("/adminAuth",admin_auth_controller.checkAdminAuthPost)
module.exports=router;