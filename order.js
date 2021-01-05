const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    userId: { type: String, required: true },
    price: { type: Number, required: true },
});
  
module.exports = new mongoose.model('order', orderSchema)

