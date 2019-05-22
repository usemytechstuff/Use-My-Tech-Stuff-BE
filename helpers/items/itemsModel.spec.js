const db = require('../../data/dbConfig');
const items = require('../items/itemsModel');
const users = require('../users/usersModel');

describe('items model', () => {
    beforeEach(async () => {
        await db("items").truncate();
    });
    afterEach(async () => {
        await db("items").truncate();
    });
    beforeEach(async () => {
        await db("users").truncate();
    });
    afterEach(async () => {
        await db("users").truncate();
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

    const mockUser = {
        username: "JohnSmith123", 
        password: "password", 
        email: "JohnSmith123@gmail.com", 
        firstname: "John", 
        lastname: "Smith", 
        phone: "1234567", 
        address: "123 street"
    }

    describe('getItems()', () => {
        it('gets item fom the items table', async () => {
            const itemArr = await items.getItems();
            expect(Array.isArray(itemArr)).toBe(true);
        })
    })
    describe('addItem(item)', () => {
        it('adds and returns the newly created item data', async () => {
            const newUser = await users.add(mockUser);
            const newItem = await items.addItem({ ...mockItem, id: newUser.id });
            expect(newItem.title).toEqual(mockItem.title);
        })
    })
})