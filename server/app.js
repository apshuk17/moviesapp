const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const keys = require("./keys");
const Movie = require('./models/movies');

const DB = `mongodb://${keys.mongoHost}:${keys.mongoPort}/${keys.mongoDb}`;

const app = express();

const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/values/movies", async (req, res) => {
        const movies = await Movie.find({});
        res.status(200).json({ status: 'success', data: { movies } });
    }
);

app.post("/values/movies", async(req, res) => {
    const movie = await Movie.create(req.body);
    res.status(201).json({ status: 'success', data: { movie } });
});

// Connect to Database
const connectDB = async () => {
  await mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });
  console.log("##DB connection successful");
  // Server listening
  app.listen(port, () => console.log(`Server is listening on ${port}`));
};

connectDB();
