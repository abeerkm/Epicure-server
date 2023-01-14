import Chefs from "../db/models/chefs";
import Restaurants from "../db/models/restaurants";

export class RestaurantsDal {
  public async createRestaurant(restaurant: any) {
    restaurant = new Restaurants({
      name: restaurant.name,
      chef: restaurant.chef,
      establishYear: restaurant.establishYear,
      opening_hours: restaurant.opening_hours,
      dishes: restaurant.dishes,
      img: restaurant.img
    });

    const response = await Restaurants.create(restaurant);
    await Chefs.findOne({ name: response.chef }).updateOne({
      $push: { chefsRestaurants: response._id },
    });
    return response;
  }
  
  public findAll() {
    return Restaurants.find();
  }

  public newestRestaurants(){
    return Restaurants.find().sort({_id:-1}).limit(3);
  }

  public async getDishes(param: { [key: string]: string }){
    const data = await Restaurants.aggregate([
      { $match: { name: `${param.name}` } },
    {
      $lookup:
        {
          localField: "dishes",
          foreignField: "_id",
          from: "dishes",
          as: "dishes",
        },
    },
  ])
  return data;
}
}
