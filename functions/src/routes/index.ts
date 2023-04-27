import express from "express";
import chefsRoutes from "./chefs.routes";
import restaurantsRoutes from "./restaurants.routes";
import dishesRoute from "./dish.routes";
import registerRoute from "./register.routes";
// eslint-disable-next-line new-cap
const router = express.Router();

router.use("/api/chefs/", chefsRoutes);
router.use("/api/restaurants/", restaurantsRoutes);
router.use("/api/dishes/", dishesRoute);
router.use("/api/register/", registerRoute);


export default router;
