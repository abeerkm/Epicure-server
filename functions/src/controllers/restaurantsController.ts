import {Request, Response} from "express";
import {RestaurantsService} from "../services/restaurants.service";

/**

Controller class for restaurants
*/
export class RestaurantsController {
  /**

Retrieve all restaurants
@param {Request} req - Express request object
@param {Response} res - Express response object
@return {Promise<Response>} - Returns all restaurants
*/
  public static async getRestaurants(req: Request, res: Response) {
    const service = new RestaurantsService();
    const restaurants = await service.getRestaurants();
    return res.send(restaurants);
  }
  /**

Create a new restaurant
@param {Request} req - Express request object
@param {Response} res - Express response object
@return {Promise<Response>} - Returns the created restaurant
*/
  public static async createRestaurant(
    req: Request,
    res: Response
  ): Promise<Response> {
    try {
      const params = req.body;
      const service = new RestaurantsService();
      const restaurant = await service.createRestaurant(params);
      return res.send(restaurant);
    } catch (error) {
      return res.send(error);
    }
  }
  /**

Retrieve newest restaurants
@param {Request} req - Express request object
@param {Response} res - Express response object
@return {Promise<Response>} - Returns the newest restaurants
*/
  public static async newestRestaurants(
    req: Request,
    res: Response
  ): Promise<Response> {
    const service = new RestaurantsService();
    const restaurants = await service.newestRestaurants();
    return res.send(restaurants);
  }
  /**

Retrieve dishes for a restaurant
@param {Request} req - Express request object
@param {Response} res - Express response object
@return {Promise<Response>} - Returns the dishes for a restaurant
*/
  public static async getDishes(
    req: Request,
    res: Response
  ): Promise<Response> {
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
