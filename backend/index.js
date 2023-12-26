const express = require('express');
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
var smtpTransport = require('nodemailer-smtp-transport');
var cors = require('cors');
const app = express();
app.use(bodyParser.json()); // Parse JSON data
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded data
app.use(cors());
const pdfFilePath = path.join(__dirname, 'static', 'Vikas arakhada May 2023-1.pdf');
const PORT = 3000;

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

app.listen(PORT, (error) => {
  if (!error)
    console.log("Server is Successfully Running,and App is listening on port " + PORT)
  else
    console.log("Error occurred, server can't start", error);
}
);