const db = require('../../data/dbConfig');

module.exports = {
    getItems,
    getItem,
    addItem,
    updateitem,
    removeItem,
};

function getItems() {
    return db('items')
}

function getItem(id) {
    return db('items')
    .where({ id })
    .first();
}

async function addItem(item) {
    const [id] = await db('items').insert(item);
    return getItem(id);
}

function updateitem(id, changes) {
    return db('items')
    .where({ id })
    .update(changes);
}

function removeItem(id) {
    return db('items')
    .where('id', id)
    .del();
}