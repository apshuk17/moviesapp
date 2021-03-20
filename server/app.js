const express = require("express");
const cors = require('cors');

const app = express();

const port = process.env.PORT;

app.use(cors());

app.get("/", (req, res) =>
  res.json({ movies: [{ name: "Movie 1" }, { name: "Movie 2" }] })
);

app.listen(port, () => console.log(`Server is listening on ${port}`));
