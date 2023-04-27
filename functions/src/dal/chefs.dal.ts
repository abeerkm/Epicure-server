import Chefs from "../db/models/chefs";
/** */
export class ChefsDal {
  /**
   * Create a new chef
   * @param {Object} chef - The chef object to be created
   */
  public createChef(chef: any) {
    chef = new Chefs({
      name: chef.name,
      chefsRestaurants: chef.chefsRestaurants,
      description: chef.description,
      image: chef.image,
    });

    chef.save(function(err: Error, results: Promise<typeof chef>) {
      if (err) {
        throw err;
      }
      return results;
    });
  }

  /**
   * Update a chef
   * @param {Object} chef - The chef object to be updated
   */
  public async updateChef(chef: any) {
    const data = await Chefs.findOne({
      name: chef.name,
    }).updateOne({$set: {age: chef.age}});
    return data;
  }

  /**
   * Get all chefs or a specific chef based on the query
   * @param {Object|null} query - The query to filter the chefs (optional)
   * @return {Promise} - A promise that resolves with an array
   */
  public findAll(query: Record<string, unknown> = {}) {
    return Chefs.find(query);
  }

  /**
   * Get a chef with their associated restaurants
   * @param {Object} param - The parameter to search the chef by
   * @param {string} param.name - The name of the chef to search for
   * @return {Promise} - A promise that resolves with the chef object
   */
  public async getChef(param: { [key: string]: string }) {
    const data = await Chefs.aggregate([
      {$match: {name: `${param.name}`}},
      {
        $lookup: {
          localField: "chefsRestaurants",
          foreignField: "_id",
          from: "restaurants",
          as: "restaurants",
        },
      },
    ]);
    return data;
  }
}
