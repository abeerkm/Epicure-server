/**
 * Service for managing restaurants.
 */
import {RestaurantsDal} from "../dal/restaurants.dal";
/** */
export class RestaurantsService {
  /**
   * Returns all restaurants.
   *
   * @async
   * @function
   * @return {Promise<Array>} - An array of all restaurants.
   */
  public async getRestaurants() {
    const dal = new RestaurantsDal();
    const res = await dal.findAll();
    return res;
  }

  /**
   * Returns the newest restaurants.
   *
   * @async
   * @function
   * @return {Promise<Array>} - An array of the newest restaurants.
   */
  public async newestRestaurants() {
    const dal = new RestaurantsDal();
    const res = await dal.newestRestaurants();
    return res;
  }

  /**
   * Creates a new restaurant.
   *
   * @async
   * @function
   * @param {Object} restaurant - The restaurant object to be created.
   * @return {Promise<Object>} - The created restaurant object.
   */
  public async createRestaurant(restaurant: any) {
    const dal = new RestaurantsDal();
    const res = dal.createRestaurant(restaurant);
    return res;
  }

  /**
   * Returns dishes based on the given parameters.
   *
   * @async
   * @function
   * @param {Object} param - The query parameters for the dishes.
   * @return {Promise<Array>} - An array of dishes matching the given parameters
   */
  public async getDish(param: { [key: string]: string }) {
    const dal = new RestaurantsDal();
    const res = await dal.getDishes(param);
    return res;
  }
}
