const express = require('express');
const cors = require('cors');  // Import the 'cors' middleware
const connectToMongo = require("./db");

connectToMongo();

const app = express();
const port = 3000;

// Use CORS middleware
app.use(cors());
app.use(express.json());

app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'));

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`);
});
