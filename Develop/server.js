// Dependencies
// =============================================================
const express = require('express');
const path = require('path');

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// // Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// const tables = [];
// const waitlist = [];

// const guest = {
//   customerName: '',
//   phoneNumber: '',
//   customerEmail: '',
//   customerID: '',
// };

// // Routes
// // =============================================================

// // Basic route that sends the user first to the AJAX Page
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'main.html'));
// });

// app.get('/main.html', (req, res) => {
//   res.sendFile(path.join(__dirname, 'main.html'));
// });

// app.get('/tables.html', (req, res) => {
//   res.sendFile(path.join(__dirname, 'tables.html'));
// });

// app.get('/reservations.html', (req, res) => {
//   res.sendFile(path.join(__dirname, 'reservations.html'));
// });


// app.get('/api/tables', (req, res) => {
//   return res.json(tables);
// });

// app.get('/api/waitlist', (req, res) => {
//   return res.json(waitlist);
// });

// app.post('/api/clear', (req, res) => {
//   tables.empty();
//   return res.json(clear);
// });

// app.post('/api/tables', (req, res) => {
//   const data = req.body;
  
//   if (tables.length < 6) {
//     tables.push(data);
//   }   else {
//     waitlist.push(data);
//   }

//   return res.json(data);
// });

// // Starts the server to begin listening
// // =============================================================
// app.listen(PORT, () => {
//   console.log(`App listening on PORT ${PORT}`);
// });
