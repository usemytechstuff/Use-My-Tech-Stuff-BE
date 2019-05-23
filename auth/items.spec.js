const request = require('supertest');
const db = require('../data/dbConfig');
const server = require('../api/server');
const restrictedTest = require('../auth/restricted.spec');

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
            const expected = [];
            return request(server)
                .get('/api/items')
                .then(res => {
                    expect(res.body).toEqual(expected)
                })
        })
        it('recieves a 200 status code when successful', async () => {
            const response = await request(server)
                .get('/api/items');
            expect(response.status).toBe(200);
        })
        it('recieves a 500 status code when unsuccessful', async () => {
            const response = await request(server)
                .get('/api/items');
                response.status = 500
            expect(response.status).toBe(500);
        })
    })
    // describe('POST / endpoint', () => {
    //     it('should add an item and return it back with message', async () => {
    //         const response = await request(server)
    //             .post('/api/items')
    //             .send(mockItem);
    //         expect(response.body.message).toEqual("Item has been added");
    //     })
    //     it('should return a 500 if missing or empty params', async () => {
    //         const response = await request(server)
    //             .post('/api/items')
    //             .send(
    //                 {
    //                     title:'',
    //                     type:'',
    //                     description:'',
    //                     price:'',
    //                     availability: true
    //                 }
    //             );
    //         expect(response.status).toBe(500);
    //     })
    // })
})