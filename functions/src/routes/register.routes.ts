import {Router} from "express";
import {RegisterController} from "../controllers/registerConroller";

// eslint-disable-next-line new-cap
const router = Router();

router.get("/getUsers", RegisterController.getUsers);
router.post("/createUser", RegisterController.createUser);
router.post("/login", RegisterController.login);

export default router;
