import Restaurants from "../db/models/restaurants";
import Dish from "../db/models/dish";

/**
 * Data access layer for dishes
 */
export class DishesDal {
  /**
   * Creates a new dish
   * @param {Object} dish - The dish object
   * @param {string} dish.dishName - The name of the dish
   * @param {string} dish.restaurant - The name of the restaurant
   * @param {string} dish.description - A description of the dish
   * @param {string} dish.image - The URL of the dish image
   * @param {number} dish.price - The price of the dish
   * @param {string} dish.type - The type of dish
   * @param {string} dish.category - The category of the dish
   * @return {Promise<Object>} - The created dish object
   */
  public async createDish(dish: {
    dishName: string;
    restaurant: string;
    description: string;
    image: string;
    price: number;
    type: string;
    category: string;
  }): Promise<object> {
    dish = new Dish({
      dishName: dish.dishName,
      restaurant: dish.restaurant,
      description: dish.description,
      image: dish.image,
      price: dish.price,
      type: dish.type,
      category: dish.category,
    });

    const response = await Dish.create(dish);
    await Restaurants.findOne({name: response.restaurant}).updateOne({
      $push: {dishes: response._id},
    });
    return response;
  }
  /**
   * Retrieves all dishes
   * @return {Promise<Array<Object>>} - An array of dish objects
   */
  public async findAll(): Promise<object[]> {
    return Dish.find();
  }
}
