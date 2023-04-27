
import mongoose = require("mongoose");
const connectDb = async () => {
  mongoose.set("strictQuery", true);
  await mongoose.connect("mongodb+srv://abeer99:oFJ1COrZ2p74KgU5@epicure.qr9gqso.mongodb.net/?retryWrites=true&w=majority")
    .then(()=>console.log("connected")
    );
};

export {connectDb};
