const express = require('express');
const app = express();
app.use(express.json());

const notes = [];

app.get('/notes', (req, res) => {
  res.json(notes);
});

app.post('/notes', (req, res) => {
  const note = { id: Date.now(), ...req.body };
  notes.push(note);
  res.status(201).json(note);
});

app.delete('/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = notes.findIndex(note => note.id === id);
  if (index === -1) return res.status(404).send();
  notes.splice(index, 1);
  res.status(204).send();
});

const PORT = 3000;

if (require.main === module) {
    app.listen(PORT, () => console.log(`App. corriendo en puerto ${PORT}`));
  }


module.exports = app;
