import Chefs from "../db/models/chefs";
import Restaurants from "../db/models/restaurants";

/**
 * Data access layer for Restaurants model.
 */
export class RestaurantsDal {
  /**
   * Create a new restaurant in the database.
   * @param {Object} restaurant - Restaurant data.
   * @param {string} restaurant.name - Restaurant name.
   * @param {string} restaurant.chef - Chef name.
   * @param {number} restaurant.establishYear
   * @param {string} restaurant.opening_hours - Opening hours of the restaurant.
   * @param {Array<string>} restaurant.dishes
   * @param {string} restaurant.img - URL of restaurant image.
   * @return {Promise<Object>} - Resolves with the created restaurant data.
   */
  public async createRestaurant(restaurant: any) {
    restaurant = new Restaurants({
      name: restaurant.name,
      chef: restaurant.chef,
      establishYear: restaurant.establishYear,
      opening_hours: restaurant.opening_hours,
      dishes: restaurant.dishes,
      img: restaurant.img,
    });

    const response = await Restaurants.create(restaurant);
    await Chefs.findOne({name: response.chef}).updateOne({
      $push: {chefsRestaurants: response._id},
    });
    return response;
  }

  /**
   * Find all restaurants in the database.
   * @return {Promise<Array<Object>>}
   */
  public findAll() {
    return Restaurants.find();
  }

  /**
   * Find the three newest restaurants in the database.
   * @return {Promise<Array<Object>>}
   */
  public newestRestaurants() {
    return Restaurants.find().sort({_id: -1}).limit(3);
  }

  /**
   * Get the dishes offered by the restaurant with the given name.
   * @param {Object} param - Parameters object.
   * @param {string} param.name - Restaurant name.
   * @return {Promise<Array<Object>>} - Resolves with an array of dish data.
   */
  public async getDishes(param: { [key: string]: string }) {
    const data = await Restaurants.aggregate([
      {$match: {name: `${param.name}`}},
      {
        $lookup: {
          localField: "dishes",
          foreignField: "_id",
          from: "dishes",
          as: "dishes",
        },
      },
    ]);
    return data;
  }
}
