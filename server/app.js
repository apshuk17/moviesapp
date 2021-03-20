const express = require('express');

const app = express();

const port = process.env.PORT

app.get('/', (req, res) => res.json({"app": "Movies App", "client": "React"}));

app.listen(port, () => console.log(`Server is listening on ${port}`));