import {RegisterDal} from "../dal/register.dal";
import bcrypt from "bcrypt";

/**
 * Service class for handling user registration and login.
 */
export default class RegisterService {
  /**
   * Get all registered users.
   * @return {Promise<any[]>}
   */
  public async getUsers(): Promise<any[]> {
    const dal = new RegisterDal();
    const res = await dal.findAll();
    return res;
  }
  // eslint-disable-next-line valid-jsdoc
  /**
   * Create a new user account.
   * @param {Object} user
   * @return {Promise<{status: string, message?: string}>}
   * @async
   */
  public static async createUser(user: any) {
    const saltRounds = 10;
    const isUserExist = await RegisterDal.existingEmail(user);
    if (isUserExist) {
      return {
        status: "failure",
        message: "An account with this email already exists",
      };
    }
    const hashedPassword = await bcrypt.hash(user.password, saltRounds);
    user.password = hashedPassword;
    const response = await RegisterDal.createNewUser(user);
    return response;
  }
  // eslint-disable-next-line valid-jsdoc
  /**
   * @async
   * @function
   * @param {Object} user - The user object to login with.
   * @param {string} user.username - The username of the user.
   * @param {string} user.password - The password of the user.
   * @returns {Promise<{status: string, message?: string}>}
   */
  public static async login(
    user: any
  ): Promise<{ status: string; message?: string }> {
    const password = await RegisterDal.getPassword(user);
    if (!password) {
      return {status: "failure", message: "Incorrect username or password"};
    }
    const isMatch = await bcrypt.compare(user.password, password);
    if (!isMatch) {
      return {status: "failure", message: "Incorrect username or password"};
    }
    return {status: "success"};
  }
}
