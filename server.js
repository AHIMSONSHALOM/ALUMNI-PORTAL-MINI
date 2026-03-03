const express = require('express');
const mysql = require('mysql');
const app = express();

// Middleware
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'student_erp'
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL Connected...');
});

// API endpoints

// Get all students
app.get('/api/students', (req, res) => {
    db.query('SELECT * FROM students', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Get a student by ID
app.get('/api/students/:id', (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM students WHERE id = ?', [id], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

// Create a new student
app.post('/api/students', (req, res) => {
    const newStudent = req.body;
    db.query('INSERT INTO students SET ?', newStudent, (err, result) => {
        if (err) throw err;
        res.status(201).json(result);
    });
});

// Enroll a student in a course
app.post('/api/enrollments', (req, res) => {
    const enrollment = req.body;
    db.query('INSERT INTO enrollments SET ?', enrollment, (err, result) => {
        if (err) throw err;
        res.status(201).json(result);
    });
});

// Get attendance
app.get('/api/attendance', (req, res) => {
    db.query('SELECT * FROM attendance', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Get grades
app.get('/api/grades', (req, res) => {
    db.query('SELECT * FROM grades', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});