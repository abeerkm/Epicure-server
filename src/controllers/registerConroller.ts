import { Request, Response } from "express";
import { RegisterService } from "../services/register.service";

export class RegisterController {
  public static async getUsers(req: Request, res: Response) {
    const service = new RegisterService();
    const Users = await service.getUsers();
    return res.send(Users);
  }

  public static async createUser(req: Request, res: Response) {
    const params = req.body;
    const User = await RegisterService.createUser(params);
    return res.send(User);
}
public static async login(req: Request, res: Response) {
  const params = req.body;
  const User = await RegisterService.login(params);
  return res.send(User);
}
}
