const request = require('supertest');
const db = require('../data/dbConfig');
const server = require('../api/server');

describe('auth tests', () => {
    beforeEach(async () => {
        await db("users").truncate();
    });
    afterEach(async () => {
        await db("users").truncate();
    });
    describe('POST /register endpoint', () => {
        it('returns 201 if user is registered with required params', async () => {
            const response = await request(server)
                .post('/api/register')
                .send({ username: 'username', password: 'password' });
            expect(response.status).toEqual(201);
        })
    })
})


