// archivo: index.js
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '1234',
  database: 'app_rutinas_db'
});

app.get('/ejercicios/split/:nombre', (req, res) => {
  const split = req.params.nombre;
  const query = 'SELECT * FROM ejercicios WHERE split = ?';

  db.query(query, [split], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`API corriendo en http://localhost:${port}`);
});
