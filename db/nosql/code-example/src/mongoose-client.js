const mongoose = require('mongoose');
const URI = "mongodb://127.0.0.1:27017/mongoose-client";


mongoose.connect(URI)
  .then(() => console.log("mongoDB connected..."))
  .catch(err => process.exit(-1))


const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    min: 0,
    max: 10000,
    default: 50
  }
}, {
  timestamps: true
});

productSchema.index({ name: 1 }, { unique: true });
const Product = mongoose.model("Product", productSchema);


const insert = async () => {
  try {
    await Product.insertMany([
      { name: "Coke", price: 43 },
      { name: "Milk", price: 60 },
      { name: "Cap", price: 53 },
      { name: "Cake", price: 10 },
      { name: "Suger", price: 90 },
    ]);
  
  } catch (err) {
    console.log(err.message);
  }
}

const view = async () => {
  try {
    const products = await Product.find({}, { _id: 0, name: 1, price: 1 }).sort({ price: 1 });
    console.log(products);
  
  } catch (err) {
    console.log(err.message);
  }
}



const main = async () => {
  try {
    await insert();
    await view();
  
  } catch (err) {
    console.log(err.message);
  }
}


// main fun
main();
