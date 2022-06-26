const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 4,
    maxlength: 10,
    required: true,
    unique: true
  },
  price: {
    type: Number,
    min: 10,
    max: 500,
    default: 25
  }
}, {
  timestamps: true
});

// method
productSchema.method({
  transform() {
    const transformed = {};
    const fields = ['id', 'name', 'price', 'createdAt'];

    fields.forEach((field) => {
      transformed[field] = this[field];
    });

    return transformed;
  },
});


module.exports = mongoose.model("Product", productSchema);
