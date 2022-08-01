exports.up = function (knex) {
  return knex.schema.createTable('things', function (table) {
    table.increments('id').primary()
    table.string('name')
    table.string('alt_name')
    table.boolean('compostable')
    table.boolean('foodsafe')
    table.boolean('flammable')
    table.string('notes')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('things')
}
