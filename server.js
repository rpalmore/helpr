const express = require('express');
const db = require('./models');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

db.sequelize.sync().then(function() {
   app.listen(port, () => console.log(`Listening on port ${port}\nNODE_ENV: ` + process.env.NODE_ENV));
});

db.sequelize
  .query('SELECT * FROM users', { raw: true })
  .then(users => {
    console.log(users)
  })