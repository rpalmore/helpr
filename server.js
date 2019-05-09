const express = require('express');
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

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}\nNODE_ENV: ` + process.env.NODE_ENV));