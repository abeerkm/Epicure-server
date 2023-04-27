import {Request, Response} from "express";
import {ChefsService} from "../services/chefs.service";

/**
 * The Chefs Controller class
 */
export class ChefsController {
  /**
   * Get all chefs
   * @param {Request} req - The request object
   * @param {Response} res - The response object
   * @return {Promise<Response>} The response with the chefs
   */
  public static async getChefs(req: Request, res: Response): Promise<Response> {
    try {
      const service = new ChefsService();
      const chefs = await service.getChefs();
      return res.send(chefs);
    } catch (error) {
      return res.send(error);
    }
  }

  /**
   * Get a chef by id
   * @param {Request} req - The request object
   * @param {Response} res - The response object
   * @return {Promise<Response>} The response with the chef
   */
  public static async getChef(req: Request, res: Response): Promise<Response> {
    try {
      const service = new ChefsService();
      const param = req.body;
      const chef = await service.getChef(param);
      return res.send(chef);
    } catch (error) {
      return res.send(error);
    }
  }

  /**
   * Create a new chef
   * @param {Request} req - The request object
   * @param {Response} res - The response object
   * @return {Promise<Response>} The success message
   */
  public static async createChef(req: Request, res: Response) {
    try {
      return res.status(200).send("Chef successfully created");
    } catch (error) {
      return res.send(error);
    }
  }

  /**
   * Update a chef by id
   * @param {Request} req - The request object
   * @param {Response} res - The response object
   * @return {Promise<Response>} The response with the updated chef
   */
  public static async updateChef(req: Request, res: Response) {
    try {
      const params = req.body;
      const service = new ChefsService();
      const chef = await service.updateChef(params);
      return res.send(chef);
    } catch (error) {
      return res.send(error);
    }
  }
}
