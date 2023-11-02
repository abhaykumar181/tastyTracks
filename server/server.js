require("../server/database/connection");
const express = require('express');
const port = process.env.PORT || 3000;
const app = express();

app.get('/register', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () =>
  console.log(`App listening on port ${port}`),
);