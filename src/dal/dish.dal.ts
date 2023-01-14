import Restaurants from "../db/models/restaurants";
import Dish from "../db/models/dish";
export class dishesDal {
  public async createDish(dish: any) {
    dish = new Dish({
      dishName: dish.dishName,
      restaurant: dish.restaurant,
      description: dish.description,
      image: dish.image,
      price: dish.price,
      type: dish.type,
      category: dish.category
    });

    const response = await Dish.create(dish);
    await Restaurants.findOne({ name: response.restaurant }).updateOne({
      $push: { dishes: response._id },
    });
    return response;
  }

  public findAll() {
    return Dish.find();
  }
}
