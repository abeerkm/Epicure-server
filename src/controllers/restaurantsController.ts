import { Request, Response } from "express";
import { RestaurantsService } from "../services/restaurants.service";
export class RestaurantsController {
  public static async getRestaurants(req: Request, res: Response) {
    const service = new RestaurantsService();
    const restaurants = await service.getRestaurants();
    return res.send(restaurants);
  }

  public static async createRestaurant(req: Request, res: Response) {
    try{
    const params = req.body;
    const service = new RestaurantsService();
    const restaurant = await service.createRestaurant(params);
    return res.send(restaurant);
  } catch (error) {
    return res.send(error);
  }
}

public static async newestRestaurants(req: Request, res: Response) {
  const service = new RestaurantsService();
  const restaurants = await service.newestRestaurants();
  return res.send(restaurants);
}

public static async Dishes(req: Request, res: Response) {
  try {
    const service = new RestaurantsService();
    const param = req.body;
    const dish = await service.getDish(param);
    return res.send(dish);
  } catch (error) {
    return res.send(error);
  }
}
}
