const db = require('../config/db');

const Mascota = {
  getAll: (callback) => {
    const query = `
      SELECT m.id, m.nombre, m.especie, m.usuario_id, u.nombre AS dueño
      FROM mascotas m
      JOIN usuarios u ON m.usuario_id = u.id
    `;
    db.query(query, callback);
  },

  getById: (id, callback) => {
    const query = `
      SELECT m.id, m.nombre, m.especie, m.usuario_id, u.nombre AS dueño
      FROM mascotas m
      JOIN usuarios u ON m.usuario_id = u.id
      WHERE m.id = ?
    `;
    db.query(query, [id], callback);
  },

  create: (data, callback) => {
    const query = `INSERT INTO mascotas SET ?`;
    db.query(query, [data], callback);
  },

  update: (id, data, callback) => {
    const query = `UPDATE mascotas SET ? WHERE id = ?`;
    db.query(query, [data, id], callback);
  },

  delete: (id, callback) => {
    const query = `DELETE FROM mascotas WHERE id = ?`;
    db.query(query, [id], callback);
  }
};

module.exports = Mascota;