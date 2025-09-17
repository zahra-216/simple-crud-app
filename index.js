const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express(); //create a new webserver application

//Middleware to parse JSON requests
app.use(express.json());
//middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

mongoose
  .connect(
    "mongodb+srv://admin:admin123@backenddb.yqr48eq.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })

  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.get("/", (req, res) => {
  res.send("Hello from Node API Server");
});
