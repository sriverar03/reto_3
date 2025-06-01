const request = require('supertest');
const app = require('../src/index');

describe('API /notes', () => {
  it('GET /notes should return an array', async () => {
    const res = await request(app).get('/notes');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('POST /notes should create a note', async () => {
    const res = await request(app).post('/notes').send({ content: 'test note' });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('content', 'test note');
  });
});
