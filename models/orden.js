const db = require('../config/db');

const Orden = {
  getAll: (callback) => {
    const query = `
      SELECT o.id, o.usuario_id, u.nombre as cliente, o.fecha
      FROM ordenes o
      JOIN usuarios u ON o.usuario_id = u.id
    `;
    db.query(query, callback);
  },

  getById: (id, callback) => {
    const query = `
      SELECT o.id, o.usuario_id, u.nombre as cliente, o.fecha
      FROM ordenes o
      JOIN usuarios u ON o.usuario_id = u.id
      WHERE o.id = ?
    `;
    db.query(query, [id], callback);
  },

  create: (data, callback) => {
    const query = `INSERT INTO ordenes SET ?`;
    db.query(query, [data], callback);
  }
};

module.exports = Orden;