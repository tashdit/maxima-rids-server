const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

/// Middlewarw
app.use(cors());
app.use(express.json());

// name maxim-books
//pass 1H4G1Hevs6ghrFlh

/// Tashdit Diganta

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bvzf0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        const database = client.db('maxim-books');
        const servicesCollection = database.collection('rides')

        //GET API
        app.get('/rides', async (req, res) => {
            const cursor = servicesCollection.find({});
            const services = await cursor.toArray();
            res.send(services);
        })

        //POST API
        app.post('/rides', async (req, res) => {
            const rides = req.body
            // const rides = {}
            console.log('Hit the pos api', rides);


            const result = await servicesCollection.insertOne(rides);
            // console.log(result);
            res.send(result)
        })

    } finally {
        // await client.close()
    }
}

run().catch(console.dir)


app.get("/", (req, res) => {
    res.send("Ema-john  running");
});

app.listen(port, () => {
    console.log("Hitting server", port);
});