import app from './index.js';
import request from 'supertest';
import test from 'node:test';

console.log("ejecutando pruebas....");

describe('Prueba de los endpoints de express', () => {
    test("GET / devoler mensaje de bienvenida con estado 200", async () => {
        const response =  await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe("app inicial");
    });
});

console.log("pruebas ejecutadas correctamente!");