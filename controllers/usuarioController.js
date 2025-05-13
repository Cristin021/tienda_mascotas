const Usuario = require('../models/usuario');

exports.getUsuarios = (req, res) => {
  Usuario.getAll((err, rows) => {
    if (err) return res.status(500).json({ error: err });
    res.json(rows);
  });
};

exports.getUsuario = (req, res) => {
  Usuario.getById(req.params.id, (err, row) => {
    if (err) return res.status(500).json({ error: err });
    res.json(row[0]);
  });
};

exports.createUsuario = (req, res) => {
  Usuario.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ id: result.insertId, message: 'Usuario creado correctamente' });
  });
};

exports.updateUsuario = (req, res) => {
  Usuario.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Usuario actualizado correctamente' });
  });
};

exports.deleteUsuario = (req, res) => {
  Usuario.delete(req.params.id, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Usuario eliminado correctamente' });
  });
};