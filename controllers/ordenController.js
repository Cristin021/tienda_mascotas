const Orden = require('../models/orden');
const DetalleOrden = require('../models/detalleorden');

exports.getOrdenes = (req, res) => {
  Orden.getAll((err, ordenes) => {
    if (err) return res.status(500).json(err);
    res.json(ordenes);
  });
};

exports.getOrden = (req, res) => {
  Orden.getById(req.params.id, (err, orden) => {
    if (err) return res.status(500).json(err);
    if (orden.length === 0) return res.status(404).json({ mensaje: 'Orden no encontrada' });

    DetalleOrden.getByOrdenId(req.params.id, (err, detalles) => {
      if (err) return res.status(500).json(err);
      res.json({ ...orden[0], detalles });
    });
  });
};

exports.createOrden = (req, res) => {
  const { usuario_id, productos } = req.body;

  const nuevaOrden = {
    usuario_id,
    fecha: new Date()
  };

  Orden.create(nuevaOrden, (err, result) => {
    if (err) return res.status(500).json(err);

    const ordenId = result.insertId;

    // Generar array para insert masivo
    const detalles = productos.map(p => [ordenId, p.producto_id, p.cantidad]);

    DetalleOrden.create(detalles, (err) => {
      if (err) return res.status(500).json(err);
      res.json({ mensaje: 'Orden creada', orden_id: ordenId });
    });
  });
};