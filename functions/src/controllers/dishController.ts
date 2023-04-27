import {Request, Response} from "express";
import {DishesService} from "../services/dish.service";

/**

Controller class for dishes
*/
export class DishesController {
/**

Retrieve all dishes
@param {Request} req - Express request object
@param {Response} res - Express response object
@return {Promise<Response>} - Returns all dishes
*/
  public static async getDishes(req: Request, res: Response) {
    const service = new DishesService();
    const Dishes = await service.getDishes();
    return res.send(Dishes);
  }
  /**
Create a new dish
@param {Request} req - Express request object
@param {Response} res - Express response object
@return {Promise<Response>} - Returns the created dish
*/
  public static async createDish(req: Request, res: Response) {
    try {
      const params = req.body;
      const service = new DishesService();
      const Dish = await service.createDish(params);
      return res.send(Dish);
    } catch (error) {
      return res.send(error);
    }
  }
}


