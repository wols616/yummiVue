const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Ruta para leer el archivo de usuarios
app.get('/api/usuarios', async (req, res) => {
  try {
    const data = await fs.readFile(path.join(__dirname, 'public', 'json', 'usuarios.json'), 'utf8');
    res.json(JSON.parse(data));
  } catch (error) {
    res.status(500).json({ error: 'Error al leer el archivo de usuarios' });
  }
});

// Ruta para agregar un nuevo usuario
app.post('/api/usuarios', async (req, res) => {
  try {
    const nuevoUsuario = req.body;
    const data = await fs.readFile(path.join(__dirname, 'public', 'json', 'usuarios.json'), 'utf8');
    const usuarios = JSON.parse(data);
    
    nuevoUsuario.id = usuarios.length > 0 ? Math.max(...usuarios.map(u => u.id)) + 1 : 1;
    
    usuarios.push(nuevoUsuario);
    
    await fs.writeFile(path.join(__dirname, 'public', 'json', 'usuarios.json'), JSON.stringify(usuarios, null, 2));
    res.json({ success: true, message: 'Usuario agregado correctamente', usuario: nuevoUsuario });
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar el usuario' });
  }
});

// Ruta para logeo
app.post('/api/login', async (req, res) => {
  try {
    const {correo, contrasena} = req.body;
    const data = await fs.readFile(path.join(__dirname, 'public', 'json', 'usuarios.json'), 'utf8');
    const usuarios = JSON.parse(data);
    
    const usuario = usuarios.find(u => u.correo === correo);

    if (!usuario){
      return res.status(401).json({success: false, message: 'Correo o contraseña incorrecta'})
    }

    if (usuario.contrasena != contrasena){
      return res.status(401).json({success: false, message: 'Correo o contraseña incorrecta'})
    }

    res.json({
      success: true,
      message: 'Inicio de sesión exitoso',
      usuario: {id: usuario.id, nombre: usuario.nombre, apellido: usuario.apellido, correo: usuario.correo}
    });

  } catch (error) {
    res.status(500).json({ error: 'Erros en la solicitud para iniciar sesión' });
  }
});

app.listen(port, () => {
  console.log(`API corriendo en http://localhost:${port}`);
});