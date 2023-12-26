const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
var cors = require('cors');
const port = 5000;

app.use(bodyParser.json()); // Parse JSON data
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded data
app.use(cors());

const pdfFilePath = path.join(__dirname, 'static/pdf', 'Vikas arakhada May 2023-1.pdf');

// Set the view engine to Pug
app.set('view engine', 'ejs');

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'static')));

// Define a route for the homepage
app.get('/', (req, res) => { 
  // Render the 'index.ejs' template and pass data if needed
  res.render('index', { pageTitle: 'Welcome to Happy Mirror Research' });
});

app.get('/downloadpdf', (req, res) => {
  console.log('innn');
  try {
    res.setHeader('Content-Disposition', 'attachment; filename="Vikas arakhada May 2023-1.pdf"');
    res.setHeader('Content-Type', 'application/pdf');

    // Read the PDF file and stream it to the response
    const pdfStream = fs.createReadStream(pdfFilePath);
    pdfStream.pipe(res);
  } catch (error) {
    console.log(error);
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
