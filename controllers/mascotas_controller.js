let mascotas = [
  {
    id: 1,
    nombre: 'Firulais',
    especie: 'Perro',
    edad: 4,
    adoptado: false
  },
  {
    id: 2,
    nombre: 'Chito',
    especie: 'Perro',
    edad: 2,
    adoptado: true
  },
  {
    id: 3,
    nombre: 'Michi',
    especie: 'Gato',
    edad: 1,
    adoptado: false
  }
];

let siguienteId = mascotas.length + 1;

const obtenerMascotas = (req, res) => {
  res.json(mascotas);
};

const obtenerMascotaPorId = (req, res) => {
  const mascota = mascotas.find(m => m.id === Number(req.params.id));

  if (!mascota) {
    return res.status(404).json({ mensaje: 'Mascota no encontrada' });
  }

  res.json(mascota);
};

const crearMascota = (req, res) => {
  const { nombre, especie, edad, adoptado } = req.body;

  if (!nombre || !especie || edad === undefined || adoptado === undefined) {
    return res.status(400).json({
      mensaje: 'nombre, especie, edad y estado de adopcion son obligatorios'
    });
  }

  const mascota = {
    id: siguienteId++,
    nombre,
    especie,
    edad,
    adoptado
  };

  mascotas.push(mascota);
  res.status(201).json(mascota);
};

const actualizarMascota = (req, res) => {
  const indice = mascotas.findIndex(m => m.id === Number(req.params.id));

  if (indice === -1) {
    return res.status(404).json({ mensaje: 'Mascota no encontrada' });
  }

  const { nombre, especie, edad, adoptado } = req.body;
  mascotas[indice] = {
    id: mascotas[indice].id,
    nombre,
    especie,
    edad,
    adoptado
  };

  res.json(mascotas[indice]);
};

const eliminarMascota = (req, res) => {
  const id = Number(req.params.id);
  const mascotaEliminada = mascotas.find(m => m.id === id);

  if (!mascotaEliminada) {
    return res.status(404).json({ mensaje: 'Mascota no encontrada' });
  }

  mascotas = mascotas.filter(m => m.id !== id);
  res.json(mascotaEliminada);
};

module.exports = {
  obtenerMascotas,
  obtenerMascotaPorId,
  crearMascota,
  actualizarMascota,
  eliminarMascota
};
