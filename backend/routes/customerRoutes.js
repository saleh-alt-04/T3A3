const express = require("express")
const Customer = require("../models/customer")
const router = express.Router()

// Create new customer
router.post("/", async (req, res) => {
  try {
    const customer = new Customer(req.body)
    await customer.save()
    res.status(201).send(customer)
  } catch (error) {
    res.status(400).send(error)
  }
})

// Read all customers
router.get("/", async (req, res) => {
  try {
    const customers = await Customer.find({})
    res.send(customers)
  } catch (error) {
    res.status(500).send(error)
  }
})

// Read individual customer
router.get("/:id", async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id)
    if (!customer) {
      return res.status(404).send()
    }
    res.send(customer)
  } catch (error) {
    res.status(500).send(error)
  }
})

// Update customer
router.patch("/:id", async (req, res) => {
  try {
    const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
    if (!customer) {
      return res.status(404).send()
    }
    res.send(customer)
  } catch (error) {
    res.status(400).send(error)
  }
})

// Delete customer
router.delete("/:id", async (req, res) => {
  try {
    const customer = await Customer.findByIdAndDelete(req.params.id)
    if (!customer) {
      return res.status(404).send()
    }
    res.send(customer)
  } catch (error) {
    res.status(500).send(error)
  }
})

module.exports = router
