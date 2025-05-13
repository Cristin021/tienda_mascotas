const db = require('../config/db');

const DetalleOrden = {
  getByOrdenId: (orden_id, callback) => {
    const query = `
      SELECT d.id, d.producto_id, p.nombre AS producto, d.cantidad, p.precio, (p.precio * d.cantidad) AS total
      FROM detalle_orden d
      JOIN productos p ON d.producto_id = p.id
      WHERE d.orden_id = ?
    `;
    db.query(query, [orden_id], callback);
  },

  create: (data, callback) => {
    const query = `INSERT INTO detalle_orden (orden_id, producto_id, cantidad) VALUES ?`;
    db.query(query, [data], callback); // data debe ser un array de arrays [[orden_id, producto_id, cantidad], ...]
  }
};

module.exports = DetalleOrden;