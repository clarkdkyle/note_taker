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

  var id = Date.now();
  var data = req.body;

  const note = {
    id: id,
    title: data.title,
    text: data.text,
  };


  const db = fs.readFileSync(path.join(__dirname, '/db/db.json'), 'utf8');
  const noteobj = JSON.parse(db);

  noteobj.push(note);
  // Saving and returning file
  fs.writeFileSync(path.join(__dirname, '/db/db.json'), JSON.stringify(noteobj), 'utf8');
  res.sendFile(path.join(__dirname, '/db/db.json'));
});


app.delete('/api/notes/:id', function (req, res) {
  res.send('Got a DELETE request for id ' + req.params.id);

  let temp = [];

  const db = fs.readFileSync(path.join(__dirname, '/db/db.json'), 'utf8');
  var noteobj = JSON.parse(db);

  noteobj.map(e => {
    if (e.id != req.params.id) {
      temp.push(e)
    }
  })

  noteobj = temp;

  fs.writeFileSync('./db/db.json', JSON.stringify(noteobj), (err) => {
    if (err) throw err;
    console.log("Write Status: Success")
  })
  res.end();
})


// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
