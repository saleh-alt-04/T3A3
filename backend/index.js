/* eslint-disable no-undef */
const express = require("express")
const mongoose = require("mongoose")
const userRouter = require("./routes/userRoutes")
const customerRouter = require("./routes/customerRoutes")
const transactionRouter = require("./routes/transactionRoutes")
const cors = require("cors")

const app = express()
app.use(cors())

const port = process.env.PORT || 5000
const db = "mongodb+srv://tim:191996@t3a3.hotc13k.mongodb.net/t3a3"

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err))

app.use(express.json())

app.use("/users", userRouter)
app.use("/customers", customerRouter)
app.use("/transactions", transactionRouter)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
