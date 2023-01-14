import { RestaurantsDal } from "../dal/restaurants.dal";

export class RestaurantsService {
  public async getRestaurants() {
    const dal = new RestaurantsDal();
    const res = await dal.findAll();
    return res;
  }

    public async newestRestaurants() {
      const dal = new RestaurantsDal();
      const res = await dal.newestRestaurants();
      return res;
    }
  

  public async createRestaurant(restaurant: any) {
    const dal = new RestaurantsDal();
    const res = dal.createRestaurant(restaurant);
    return res;
  }

  public async getDish(param: { [key: string]: string }) {
    const dal = new RestaurantsDal();
    const res = await dal.getDishes(param);
    return res;
  }
}
