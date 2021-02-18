express=require("express")
router=express.Router();
var user_auth_controller=require("../../controllers/user_controllers/userAuth")
router.post("/userLogin",user_auth_controller.userAuthService)
router.get("/uploadMet",user_auth_controller.upload)
router.post("/userRegistration",user_auth_controller.insertUser);
router.post("/updateUserActive",user_auth_controller.updateUserActiveEmail)

    
module.exports=router;
