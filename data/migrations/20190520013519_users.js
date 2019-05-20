
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable("users", user => {
      user.increments();
      user
        .string("username", 32)
        .notNullable();
        //.unique() <<<<<< uncomment before final
      user
        .string("password", 128)
        .notNullable();
      user
        .string("email", 50);
      // user
      // user <<<<<< future table
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists("users");
};
