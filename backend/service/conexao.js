import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'projetoleads',
    password: 'senhaleads',
    database: 'projetoleads_db'
});

export default pool;