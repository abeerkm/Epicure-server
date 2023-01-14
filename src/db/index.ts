
var mongoose = require('mongoose');
const connectDb = async () => {
  mongoose.set("strictQuery", true);
  await mongoose.connect("mongodb://127.0.0.1:27017/EpicureDB")
  .then(()=>console.log("connected")
  );
};

export { connectDb };