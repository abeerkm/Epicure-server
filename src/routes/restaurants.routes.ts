import { Router } from "express";
import { RestaurantsController } from "../controllers/restaurantsController";

const router = Router();

router.get("/getRestaurants", RestaurantsController.getRestaurants);
router.get("/getNewestRestaurants", RestaurantsController.newestRestaurants);

router.post("/getDishes", RestaurantsController.Dishes);
router.post("/createRestaurant", RestaurantsController.createRestaurant);

export default router;
