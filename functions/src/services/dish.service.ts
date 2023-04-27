import {DishesDal} from "../dal/dish.dal";

/**
 * A class representing the service for dishes.
 */
export class DishesService {
  /**
   * Retrieves all dishes.
   * @return {Promise<any[]>} A promise that resolves to an array of dishes.
   */
  public async getDishes(): Promise<any[]> {
    const dal = new DishesDal();
    const res = await dal.findAll();
    return res;
  }

  /**
   * Creates a new dish.
   * @param {Object} dish - The dish to be created.
   * @return {Promise<any>} A promise that resolves to the created dish.
   */
  public async createDish(dish: any): Promise<any> {
    const dal = new DishesDal();
    const res = dal.createDish(dish);
    return res;
  }
}
