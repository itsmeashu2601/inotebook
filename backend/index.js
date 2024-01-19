const express = require('express');
const cors = require('cors');  // Import the 'cors' middleware
const connectToMongo = require("./db");

connectToMongo();

const app = express();
const port = 3000;

// Use CORS middleware
app.use(cors());

app.route('/')
   .get((req, res) => {
      res.send('Hello World!')
   })
   .post((req, res) => {
      res.send('Received a POST request')
   });

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`);
});
