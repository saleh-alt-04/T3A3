/* eslint-disable no-undef */
/* eslint-disable no-undef */
const mongoose = require("mongoose")

const transactionSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["income", "expense"],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

const Transaction = mongoose.model("Transaction", transactionSchema)
module.exports = Transaction
