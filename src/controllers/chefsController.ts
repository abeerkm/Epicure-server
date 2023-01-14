import { Request, Response } from "express";
import { ChefsService } from "../services/chefs.service";

export class ChefsController {
  public static async getChefs(req: Request, res: Response) {
    try {
      const service = new ChefsService();
      const chefs = await service.getChefs();
      return res.send(chefs);
    } catch (error) {
      return res.send(error);
    }
  }

  public static async getChef(req: Request, res: Response) {
    try {
      const service = new ChefsService();
      const param = req.body;
      const chef = await service.getChef(param);
      return res.send(chef);
    } catch (error) {
      return res.send(error);
    }
  }

  public static async createChef(req: Request, res: Response) {
    try {
      const params = req.body;
      const service = new ChefsService();
      const chef = await service.createChef(params);
      return res.status(200).send("Chef successfully created");
    } catch (error) {
      return res.send(error);
    }
  }

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
