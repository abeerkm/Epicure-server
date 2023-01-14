import Register from "../db/models/register";

export class registerDal {
  public static async createNewUser(register: any) {
    register = new Register({
      firstName: register.firstName,
      lastName: register.lastName,
      email: register.email,
      phone:register.phone,
      password: register.password
    });

    register.save(function (err: Error, results: any) {
        if (err) {
          throw err;
        }
        return results;
      });
    }
    public findAll(query: any = null) {
        return Register.find(query);
      };
  
public static async existingEmail(user:any){
  const data=await Register.findOne({email:user.email});
  if(data?.email===user.email){
    return true;
  }
  return false;
}
public static async getPassword(user:any){
  const data=await Register.findOne({
    email:user.email
  });
  return data?.password;
}
}
