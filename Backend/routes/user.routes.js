import Router from "router";
import userController from "../controller/user.controller.js";

const router = Router();

router.post('/register',userController.register)
router.post('/login',userController.login)
export default router;