
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable("users", user => {
      user.increments();
      user
        .string("username", 32)
        .notNullable()
        .unique();
      user
        .string("password", 128)
        .notNullable();
      user
        .string("email", 50);
      user
        .string("firstname", 32);
      user
        .string("lastname", 32);
      user
        .bigInteger("phone", 15);
      user
        .string("address");
      // user
      // user <<<<<< future table
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists("users");
};
