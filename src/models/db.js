const mysql = require('mysql2');

// Create connection to database
const db = mysql.createConnection({
    host: 'localhost',  // Your MySQL server
    user: 'root',       // Your MySQL username
    password: 'Aai@123',       // Your MySQL password
    database: 'gym_management'
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected to the gym_management database.');
    }
});

module.exports = db;
