const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const cors = require('cors');
// initialisations
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const dbPath = path.join(__dirname, 'database.db');
const db = new sqlite3.Database(dbPath);
const ratingMap = {
  'easy': 1,
  'medium': 2,
  'hard': 3,
}

const createTablesIfNotExist = () => {
  const createDsaTableQuery = `
    CREATE TABLE IF NOT EXISTS dsa_questions (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL,
      link TEXT NOT NULL,
      note TEXT,
      need_revision BOOLEAN DEFAULT false,
      rating INTEGER
    );
  `;
  const createCpTableQuery = `
    CREATE TABLE IF NOT EXISTS cp_questions (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL,
      link TEXT NOT NULL,
      note TEXT,
      need_revision BOOLEAN DEFAULT false,
      rating INTEGER
    );
  `;

  db.serialize(() => {
    db.run(createDsaTableQuery);
    db.run(createCpTableQuery);
    console.log('Tables checked and created if they do not exist.');
  });
};
createTablesIfNotExist();

// requests handling
// get dsa questions
app.get('/dsa', (req, res) => {
  let { from, to } = req.query;
  from = from ? from.toLowerCase() : 'easy';
  to = to ? to.toLowerCase() : 'hard';
  let getDsaQuery = 'SELECT * FROM dsa_questions WHERE 1=1';
  const queryParams = [];

  if (from) {
    getDsaQuery += ' AND rating >= ?';
    queryParams.push(ratingMap[from] || 1);
  }
  if (to) {
    getDsaQuery += ' AND rating <= ?';
    queryParams.push(ratingMap[to] || 3);
  }

  db.all(getDsaQuery, queryParams, (err, dsaQuestions) => {
    if (err) { 
      // console.error("Error fetching DSA questions:", err);
      console.log('Error fetching DSA questions:');
      return res.status(500).json({ message: 'Failed to fetch DSA Questions.' });
    }
    res.status(200).json({ dsa_questions: dsaQuestions });
  });
});

app.post('/', (req, res) => {
  const { id, name, link, note, type, rating, needRevision = false } = req.body;

  if (!id) id = Date.now();
  if (!name || !link || !rating || !type) {
    return res.status(400).json({ message: 'Name, link,rating and type are required fields' });
  }
  const numRating = ratingMap[rating.toLowerCase()]
  const tableName = type === 'dsa' ? 'dsa_questions' : type === 'cp' ? 'cp_questions' : null;
  if (!tableName) {
    return res.status(400).json({ message: 'Invalid type. Use "dsa" or "cp".' });
  }
  const query = `
    INSERT INTO ${tableName} (id, name, link, note, need_revision,rating)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  
  console.log('insertin....');
  db.run(query, [id, name, link, note, needRevision, numRating], function (err) {
    if (err) {
      console.error('Error inserting question:', err);
      return res.status(500).json({ message: 'Failed to insert question.' });
    }
    return res.status(200).json({ message: 'Question added successfully.', data: {id, name, link, note,need_revision: needRevision, rating, },});
  });
});

app.put('/:id&:type', (req, res) => {
  console.log('recieved updations')
  const { id, type } = req.params;
  const { name, link, note, needRevision } = req.body;

  if (isNaN(id)) {return res.status(400).json({ message: 'Invalid ID format.' });}
  if (!name || !link || !note || needRevision === undefined) {return res.status(400).json({ message: 'Name, link, note, and needRevision are required fields' });}

  const tableName = type === 'dsa' ? 'dsa_questions' : type === 'cp' ? 'cp_questions' : null;

  if (!tableName) {return res.status(400).json({ message: 'Invalid type. Use "dsa" or "cp".' });}

  const selectQuery = `SELECT * FROM ${tableName} WHERE id = ?`;
  const updateQuery = `
    UPDATE ${tableName}
    SET name = ?, link = ?, note = ?, need_revision = ?
    WHERE id = ?
  `;

  db.get(selectQuery, [id], (err, row) => {
    if (err) { return res.status(500).json({ message: 'Database query error', error: err.message });}
    if (!row) {return res.status(404).json({ message: 'No question found with the given ID.' });}

    db.run(updateQuery, [name, link, note, Boolean(needRevision), id], function (err) {
      if (err) {return res.status(500).json({ message: 'Failed to update the question', error: err.message });}
      return res.status(200).json({
        message: 'Question updated successfully.',
        data: { id, name, link, note, need_revision: Boolean(needRevision) },
      });
    });
  });
});

app.delete('/:id&:type', (req, res) => {
  const { id, type } = req.params;

  console.log(`Attempting to delete question with ID: ${id} and type: ${type}`);
  const tableName = type === 'dsa' ? 'dsa_questions' : type === 'cp' ? 'cp_questions' : null;

  if (!tableName) {return res.status(400).json({ message: 'Invalid type. Use "dsa" or "cp".' });}
  const selectQuery = `SELECT * FROM ${tableName} WHERE id = ?`;
  const deleteQuery = `DELETE FROM ${tableName} WHERE id = ?`;

  db.get(selectQuery, [id], (err, row) => {
    if (err) {
      console.error('Error fetching record:', err.message);
      return res.status(500).json({ message: "Database query error", error: err.message });
    }

    if (!row) {
      console.log(`No record found with ID: ${id}`);
      return res.status(404).json({ message: "No question found with the given ID." });
    }

    db.run(deleteQuery, [id], function (err) {
      if (err) {
        console.error('Error during deletion:', err.message);
        return res.status(500).json({ message: "Failed to delete the question", error: err.message });
      }

      if (this.changes > 0) {
        console.log("Data deleted successfully.");
        return res.status(200).json({
          message: "Question deleted successfully.",
          data: { id, type },
        });
      } else {
        console.log("No data was found after deletion attempt.");
        return res.status(404).json({ message: "No question found with the given ID." });
      }
    });
  });
});

app.listen(5000, () => { console.log('Server is listening on port 5000');});
