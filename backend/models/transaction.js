/* eslint-disable no-undef */
const mongoose = require("mongoose")

const transactionSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
  },
  type: {
    type: String,
    enum: ["income", "expense"],
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
