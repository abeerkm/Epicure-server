import {ChefsDal} from "../dal/chefs.dal";

/**
 * A service class for managing chefs.
 */
export class ChefsService {
  /**
   * Get a list of all chefs.
   * @return {Promise<Array<any>>}
   */
  public async getChefs() {
    const dal = new ChefsDal();
    const res = await dal.findAll();
    return res;
  }

  /**
   * Get a single chef by name.
   * @param {Object} param
   * @param {string} param.name - The name of the chef to retrieve.
   * @return {Promise<any>} A promise that resolves to a single chef object.
   */
  public async getChef(param: { [key: string]: string }) {
    const dal = new ChefsDal();
    const res = await dal.getChef(param);
    return res;
  }

  /**
   * Create a new chef.
   * @param {Object} chef - An object representing the new chef to create.
   * @param {string} chef.name - The name of the new chef.
   * @param {string} chef.restaurant - The restaurant that the new chef works at
   * @return {Promise<any>} A promise that resolves to the newly created chef
   */
  public async createChef(chef: any) {
    const dal = new ChefsDal();
    const res = dal.createChef(chef);
    return res;
  }

  /**
   * Update an existing chef.
   * @param {Object} chef - An object representing the updated chef data.
   * @param {string} chef.name - The name of the chef to update.
   * @param {string} chef.restaurant - The restaurant that the chef works at.
   * @return {Promise<any>} A promise that resolves to the updated chef object.
   */
  public async updateChef(chef: any) {
    const dal = new ChefsDal();
    const res = await dal.updateChef(chef);
    return res;
  }
}
