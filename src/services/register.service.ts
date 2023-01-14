import { Hash } from "crypto";
import { registerDal } from "../dal/register.dal";
const bcrypt = require('bcrypt');

export class RegisterService {
  public async getUsers() {
    const dal = new registerDal();
    const res = await dal.findAll();
    return res;
  }
  
  public static async createUser(user: any) {
    const saltRounds=10;
    const isUserExist=await registerDal.existingEmail(user);
    if(isUserExist){
      return{status:"failure", message:"An account with this email already exists"}
    }
    bcrypt.hash(user.password, saltRounds, async function(err:Error, hash:Hash) {
      user["password"]=hash;
      const response=await registerDal.createNewUser(user);
      return response;
      
  });
  }
  public static async login(user:any){
    const password=await registerDal.getPassword(user);
    if(!password){
      return{status:"failure",message:"Incorrect username or password"}
    }
    const isMatch = await bcrypt.compare(user.password, password);
    if(!isMatch){
      return{status:"failure",message:"Incorrect username or password"}
    }
    return{status:"success"}
  }
}
