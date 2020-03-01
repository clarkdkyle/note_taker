// Dependencies
// =============================================================

const express = require('express');
const path = require('path');
const fs = require('fs');

// Sets up the Express App
// =============================================================
const app = express();
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'));
});

app.get('/api/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/db/db.json'));
});

app.post('/api/notes', (req, res) => {
  
    // Unique ID
  var id = Date.now();
  var data = req.body;
  
  var note = {
    id: id,
    title: data.title,
    text: data.text,
  };


 
 
  const db = fs.readFileSync(path.join(__dirname, '/db/db.json'), 'utf8');
 
  
  const dbObj = JSON.parse(db);

  dbObj.push(note);
  // Saving and returning file
  fs.writeFileSync(path.join(__dirname, '/db/db.json'), JSON.stringify(dbObj), 'utf8');
  res.sendFile(path.join(__dirname, '/db/db.json'));
});

app.delete('/api/notes/:id', (req, res) => {
   var id = req.params.id;
 
  const db = fs.readFileSync(path.join(__dirname, '/db/db.json'), 'utf8');
  const dbObj = JSON.parse(db);
  for (let x = 0; x < dbObj.length; x++) {
    if (dbObj[x].id.toString() === id) {
      dbObj.splice(x, 1);
      break;
    }
  }
    // Saving and returning file
  fs.writeFileSync(path.join(__dirname, '/db/db.json'), JSON.stringify(dbObj), 'utf8');
  res.sendFile(path.join(__dirname, '/db/db.json'));
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
