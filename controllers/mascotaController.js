const Mascota = require('../models/mascota');

exports.getMascotas = (req, res) => {
  Mascota.getAll((err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
};

exports.getMascota = (req, res) => {
  Mascota.getById(req.params.id, (err, row) => {
    if (err) return res.status(500).json(err);
    if (row.length === 0) return res.status(404).json({ mensaje: 'Mascota no encontrada' });
    res.json(row[0]);
  });
};

exports.createMascota = (req, res) => {
  Mascota.create(req.body, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ mensaje: 'Mascota creada', id: result.insertId });
  });
};

exports.updateMascota = (req, res) => {
  Mascota.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ mensaje: 'Mascota actualizada' });
  });
};

exports.deleteMascota = (req, res) => {
  Mascota.delete(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ mensaje: 'Mascota eliminada' });
  });
};