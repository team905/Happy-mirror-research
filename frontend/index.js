const express = require('express');
const path = require('path');

const app = express();
const port = 80;

// Set the view engine to Pug
app.set('view engine', 'ejs');

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'static')));

// Define a route for the homepage
app.get('/', (req, res) => {
  // Render the 'index.ejs' template and pass data if needed
  res.render('index', { pageTitle: 'Welcome to Happy Mirror Research' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
