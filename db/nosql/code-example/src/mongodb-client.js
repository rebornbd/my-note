const { MongoClient } = require("mongodb");
const URI = "mongodb://localhost:27017";
const CLIENT = new MongoClient(URI);
const DB = CLIENT.db("mongodb-client");
const PRODUCTS = DB.collection('products');
const SALES = DB.collection('sales');


const insert_products = async () => {
  await PRODUCTS.insertMany([
    { name: "Milk", price: 60 },
    { name: "Cap", price: 53 },
    { name: "Cake", price: 10 },
    { name: "Suger", price: 90 }
  ]);
}

const insert_sales = async () => {
  await SALES.insertMany([
    { "_id" :  1, "item" : "Americanos", "price" : 5,  "size": "Short",  "quantity" : 22 },
    { "_id" :  2, "item" : "Cappuccino", "price" : 6,  "size": "Short",  "quantity" : 12 },
    { "_id" :  3, "item" : "Lattes",     "price" : 15, "size": "Grande", "quantity" : 25 },
    { "_id" :  4, "item" : "Mochas",     "price" : 25, "size": "Tall",   "quantity" : 11 },
    { "_id" :  5, "item" : "Americanos", "price" : 10, "size": "Grande", "quantity" : 12 },
    { "_id" :  6, "item" : "Cappuccino", "price" : 7,  "size": "Tall",   "quantity" : 20 },
    { "_id" :  7, "item" : "Lattes",     "price" : 25, "size": "Tall",   "quantity" : 30 },
    { "_id" :  8, "item" : "Americanos", "price" : 10, "size": "Grande", "quantity" : 21 },
    { "_id" :  9, "item" : "Cappuccino", "price" : 10, "size": "Grande", "quantity" : 17 },
    { "_id" : 10, "item" : "Americanos", "price" : 8,  "size": "Tall",   "quantity" : 15 }
  ]);
}

const view = async () => {
  const products = await PRODUCTS.find({}, { projection: { _id: 0, name: 1, price: 1 } }).sort({ price: -1 });
  // products.forEach(p => {
  //   console.log(p);
  // });
  products.toArray((err, results) => {
    if (!err) {
      console.log(results)
    }
  });
}

const view_aggregate = async () => {
  const data = await SALES.aggregate([
    {
      $group: {
        _id: "$item",
        avgQuantity: { $avg: "$quantity" },
        avgAmount: { $avg: { $multiply: ["$quantity", "$price"] } }
      }
    },
    {
      $sort: { avgAmount: -1 }
    },
    {
      $project: { _id: 1, avgQuantity: 1, avgAmount: 1 }
    }
  ])
  data.toArray((err, results) => {
    if (!err) {
      console.log(results)
    }
  });
}

const minPriceDetails = async () => {
  const data = await SALES.find({}).sort({ price: 1, quantity: -1 }).limit(1);
  data.toArray((err, results) => {
    if (!err) {
      console.log(results)
    }
  });
}


const main = async () => {
  try {
    // await insert_products();
    // await insert_sales();

    // await view();
    await view_aggregate();
    await minPriceDetails();

  } catch(err) {
    console.log(err.message);
  }
}


// main fun
main()
