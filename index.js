const express = require("express");
// const { MongoClient } = require("mongodb");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

/// Middlewarw
app.use(cors());
app.use(express.json());

console.log('hy');

/// Tashdit Diganta


app.get("/", (req, res) => {
    res.send("Ema-john Server is running");
});

app.listen(port, () => {
    console.log("Hitting server", port);
});