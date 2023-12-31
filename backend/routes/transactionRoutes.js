/* eslint-disable no-undef */
const express = require("express")
const Transaction = require("../models/transaction")
const router = express.Router()

// Create new transaction
router.post("/", async (req, res) => {
  try {
    const transaction = new Transaction(req.body)
    await transaction.save()
    res.status(201).send(transaction)
  } catch (error) {
    res.status(400).send(error)
  }
})

// Read all transactions
router.get("/", async (req, res) => {
  try {
    const transactions = await Transaction.find({})
    res.send(transactions)
  } catch (error) {
    res.status(500).send(error)
  }
})

// Read individual transaction
router.get("/:id", async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id)
    if (!transaction) {
      return res.status(404).send()
    }
    res.send(transaction)
  } catch (error) {
    res.status(500).send(error)
  }
})

// Update transaction
router.patch("/:id", async (req, res) => {
  try {
    const transaction = await Transaction.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    )
    if (!transaction) {
      return res.status(404).send()
    }
    res.send(transaction)
  } catch (error) {
    res.status(400).send(error)
  }
})

// Delete transaction
router.delete("/:id", async (req, res) => {
  try {
    const transaction = await Transaction.findByIdAndDelete(req.params.id)
    if (!transaction) {
      return res.status(404).send()
    }
    res.send(transaction)
  } catch (error) {
    res.status(500).send(error)
  }
})

module.exports = router
