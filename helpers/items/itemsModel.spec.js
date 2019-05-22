const db = require('../../data/dbConfig');
const items = require('../items/itemsModel');

describe('items model', () => {
    beforeEach(async () => {
        await db("items").truncate();
    });
    afterEach(async () => {
        await db("items").truncate();
    });

    const mockItem = {
        owner: 1, 
        title: "For rent", 
        type: "Camera", 
        description: "local only", 
        price: "20", 
        availability: true, 
        brand: "Canon", 
        model: "EOS 200"
    }
    describe('getItems()', () => {
        it('gets item fom the items table', async () => {
            const itemArr = await items.getItems();
            expect(Array.isArray(itemArr)).toBe(true);
        })
    })
})