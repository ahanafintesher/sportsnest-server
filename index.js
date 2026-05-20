const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const uri = process.env.MONGODB_URI;

// ── Middleware ──
app.use(cors());
app.use(express.json());

// ── MongoDB ──
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();

    const db = client.db('sportsnest');
    const facilitiesCollection = db.collection('facilities');

    // all facilities
   app.get("/facilities", async (req, res) => {
  try {
    const search = req.query.search || "";
    const type = req.query.type || "";

    console.log(type)

    const query = {};

    if (search) {
      query.name = {
        $regex: search,
        $options: "i",
      };
    }

    if (type && type!=='All') {
      query.facility_type = type;
    }

    const result = await facilitiesCollection.find(query).toArray();

    res.send(result);

  } catch (error) {
    res.status(500).send({
      message: "Failed to fetch facilities",
    });
  }
});

   // featured facilities
    app.get('/featured-facilities', async (req, res) => {
      const result = await facilitiesCollection.find({ isFeatured: true }).toArray();
      res.json(result);
    });

        // get single facility
    app.get('/facilities/:id', async (req, res) => {
      const { id } = req.params;
      const result = await facilitiesCollection.findOne({ _id: new ObjectId(id) });
      res.json(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log("Connected to MongoDB successfully!");
  } catch (err) {
    console.error(err);
  }
}

run();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});