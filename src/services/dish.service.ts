import { dishesDal } from "../dal/dish.dal"; 

export class DishesService {
  public async getDishes() {
    const dal = new dishesDal();
    const res = await dal.findAll();
    return res;
  }

  public async createDish(dish: any) {
    const dal = new dishesDal();
    const res = dal.createDish(dish);
    return res;
  }
}
