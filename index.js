import express from 'express';

const app = express();

// Middleware para parsear JSON en el body
app.use(express.json());

const PORT = 3000;


const estudiante = [
    { id: 1, nombre: 'Juan Perez', carrera: 'Ingeniería de Sistemas' },
    { id: 2, nombre: 'María Gómez', carrera: 'Ingeniería Industrial' },
    { id: 3, nombre: 'Luis Rodríguez', carrera: 'Ingeniería Civil' },
];

app.get('/', (req, res) => {
    const data = {
        message: "app inicial",
    }
    res.json(data);
});

app.get('/estudiantes', (req, res) => {
    res.json(estudiante);
});

app.post('/estudiantes', (req, res) => {
    const body = req.body;
    estudiante.push(body);
    res.json({
        message: "Estudiante agregado",
        estudiante: body
    });
});

// Nota: el arranque del servidor se realiza en server.js para no mantener handles abiertos en los tests

export default app;