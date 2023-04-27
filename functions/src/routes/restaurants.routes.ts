import {Router} from "express";
import {RestaurantsController} from "../controllers/restaurantsController";

// eslint-disable-next-line new-cap
const router = Router();

router.get("/getRestaurants", RestaurantsController.getRestaurants);
router.get("/getNewestRestaurants", RestaurantsController.newestRestaurants);

router.post("/getDishes", RestaurantsController.getDishes);
router.post("/createRestaurant", RestaurantsController.createRestaurant);

export default router;
