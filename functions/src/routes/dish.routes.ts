import {Router} from "express";
import {DishesController} from "../controllers/dishController";

// eslint-disable-next-line new-cap
const router = Router();

router.get("/getDishes", DishesController.getDishes);
router.post("/createDish", DishesController.createDish);

export default router;
