import request from 'supertest';
import app from './index.js';

describe('Prueba de los endpoints de express', () => {
  test('GET / devuelve mensaje de bienvenida con estado 200', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('app inicial');
  });
});

console.log('ejecutando pruebas....');
console.log('pruebas ejecutadas correctamente!');
