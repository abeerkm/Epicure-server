import {Request, Response} from "express";
import {RegisterService} from "../services/register.service";

/**

Controller class for user registration
*/
export class RegisterController {
/**

Retrieve all users
@param {Request} req - Express request object
@param {Response} res - Express response object
@return {Promise<Response>} - Returns all registered users
*/
  public static async getUsers(req: Request, res: Response): Promise<Response> {
    const service = new RegisterService();
    const Users = await service.getUsers();
    return res.send(Users);
  }
  /**

Create a new user
@param {Request} req - Express request object
@param {Response} res - Express response object
@return {Promise<Response>} - Returns the created user
*/
  public static async createUser(req: Request, res: Response) {
    const params = req.body;
    const User = await RegisterService.createUser(params);
    return res.send(User);
  }
  /**

Login a user
@param {Request} req - Express request object
@param {Response} res - Express response object
@return {Promise<Response>} - Returns the logged-in user
*/
  public static async login(req: Request, res: Response) {
    const params = req.body;
    const User = await RegisterService.login(params);
    return res.send(User);
  }
}


