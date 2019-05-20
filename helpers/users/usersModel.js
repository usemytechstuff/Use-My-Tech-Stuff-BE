const db = require('../../data/dbConfig');

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db('users')
    .select('id', 'username', 'password')
}

function findBy(filter) {
  return db('users')
    .where(filter)
    .first();
}

async function add(user) {
  console.log('firing')
  const [id] = await db('users').insert(user).returning("id");
  console.log(id)
  return findById(id);
}

function findById(id) {
  console.log('next')
  return db('users')
    .where({ id })
    .first();
}
