const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'tienda_mascotas'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Conexión a MySQL exitosa');
});

module.exports = connection; 