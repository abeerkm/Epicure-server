import { Router } from "express";
import { ChefsController } from "../controllers/chefsController";

const router = Router();

router.get("/getChefs", ChefsController.getChefs);
router.get("/getChef", ChefsController.getChef);
router.post("/createChef", ChefsController.createChef);
router.post("/updateChef", ChefsController.updateChef);

export default router;
