import Register from "../db/models/register";

/**
 * Data access layer for Register model.
 */
export class RegisterDal {
  /**
   * Create a new user in the database.
   * @param {Object} register - User registration data.
   * @param {string} register.firstName - User's first name.
   * @param {string} register.lastName - User's last name.
   * @param {string} register.email - User's email address.
   * @param {string} register.phone - User's phone number.
   * @param {string} register.password - User's password.
   * @return {Promise<Object>} - Resolves with the created user data.
   * @throws {Error}
   */
  public static async createNewUser(register: any) {
    register = new Register({
      firstName: register.firstName,
      lastName: register.lastName,
      email: register.email,
      phone: register.phone,
      password: register.password,
    });

    return register.save();
  }

  /**
   * Find all users in the database that match the given query.
   * @param {Object|null} query - Mongoose query object.
   * @return {Promise<Array<Object>>} - Resolves with an array of user data.
   */
  public findAll(query: any = null) {
    return Register.find(query);
  }

  /**
   * @param {Object} user - User data.
   * @param {string} user.email - User's email address.
   * @return {Promise<boolean>} - Resolves with true
   */
  public static async existingEmail(user: any) {
    const data = await Register.findOne({email: user.email});
    return data?.email === user.email;
  }

  /**
   * Get the password for the user with the given email address.
   * @param {Object} user - User data.
   * @param {string} user.email - User's email address.
   * @return {Promise<string|null>} - Resolves with the user's password
   */
  public static async getPassword(user: any) {
    const data = await Register.findOne({
      email: user.email,
    });
    return data?.password;
  }
}
