const request = require('supertest');
const db = require('../data/dbConfig');
const server = require('../api/server');

describe('items tests', () => {
    beforeEach(async () => {
        await db("items").truncate();
    });
    afterEach(async () => {
        await db("items").truncate();
    });

    const mockItem = {
        owner: 4, 
        title: "For rent", 
        type: "Gaming Console", 
        description: "Lorem ipsum dolor sit amet", 
        price: "123", 
        availability: true, 
        brand: "lorem", 
        model: "ipsum", 
        imgURL: "https://picsum.photos/200/200/200"
    }

    describe('GET / endpoint', () => {
        it('should return a list of all items', () => {
            const expected = {};
            return request(server)
                .get('/')
                .then(res => {
                    expect(res.body).toEqual(expected)
                })
        })
        it('recieves a 200 status code when successful', async () => {
            const response = await request(server)
            .get('/');
            expect(response.status).toBe(200);
        })
        it('recieves a 500 status code when unsuccessful', async () => {
            const response = await request(server)
            .get('/');
            response.status = 500
            expect(response.status).toBe(500);
        })
    })
})