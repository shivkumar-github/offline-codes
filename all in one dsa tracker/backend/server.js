const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const dbPath = path.join(__dirname, 'database.db');
const db = new sqlite3.Database(dbPath);

const createTablesIfNotExist = () => {
  const createDsaTableQuery = `
    CREATE TABLE IF NOT EXISTS dsa_questions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      link TEXT NOT NULL,
      note TEXT,
      need_revision BOOLEAN DEFAULT false
    );
  `;
  const createCpTableQuery = `
    CREATE TABLE IF NOT EXISTS cp_questions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      link TEXT NOT NULL,
      note TEXT,
      need_revision BOOLEAN DEFAULT false
    );
  `;

  db.serialize(() => {
    db.run(createDsaTableQuery);
    db.run(createCpTableQuery);
    console.log('Tables checked and created if they do not exist.');
  });
};

createTablesIfNotExist();

app.get('/', (req, res) => {
  const getDsaQuery = 'SELECT * FROM dsa_questions';
  const getCpQuery = 'SELECT * FROM cp_questions';

  db.serialize(() => {
    db.all(getDsaQuery, [], (err, dsaQuestions) => {
      if (err) {
        console.error("Error fetching DSA questions:", err);
        return res.status(500).json({ message: 'Failed to fetch DSA Questions.' })
      }

      db.all(getCpQuery, [], (err, cpQuestions) => {
        if (err) {
          console.error('Error fetching CP questions: ', err);
          return res.status(500).json({ message: 'Failed to fetch Cp Questions.' })
        }

        res.status(200).json({
          dsa_questions: dsaQuestions,
          cp_questions: cpQuestions,
        });
      });
    });
  });

});

app.post('/', (req, res) => {
  const { name, link, note, type, needRevision } = req.body;
  let tableName = '';

  if (type === 'dsa') {
    tableName = 'dsa_questions';
  } else if (type === 'cp') {
    tableName = 'cp_questions';
  } else {
    return res.status(400).json({ message: 'Invalid type. Use "dsa" or "cp".' });
  }

  const query = `
    INSERT INTO ${tableName} (name, link, note, need_revision)
    VALUES (?, ?, ?, ?)
  `;

  db.run(query, [name, link, note, needRevision], function (err) {
    if (err) {
      console.error('Error inserting question:', err);
      return res.status(500).json({ message: 'Failed to insert question.' });
    }

    return res.status(200).json({
      message: 'Question added successfully.',
      data: {
        id: this.lastID,
        name,
        link,
        note,
        need_revision: needRevision,
      },
    });
  });
});

app.delete('/:id', (req, res) => {
  const id = req.params.id; // Get the ID from the URL
  const query = `DELETE FROM dsa_questions WHERE id = ?`;

  db.run(query, [id], function (err) {
    if (err) {
      console.error('Error:', err.message);
      return res.status(500).json({
        message: "Failed to delete the question.",
        error: err.message,
      });
    }

    if (this.changes > 0) {
      console.log("Data deleted successfully.");
      return res.status(200).json({
        message: "Question deleted successfully.",
        data: { id },// can only return id as record is deleted
      });
    } else {
      console.log("No data was found.");
      return res.status(404).json({
        message: "No question found with the given ID.",
      });
    }
  });
});


app.listen(5000, () => {
  console.log('Server is listening on port 5000');
});
