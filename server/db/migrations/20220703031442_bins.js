exports.up = function (knex) {
  return knex.schema.createTable('bins', function (table) {
    table.increments('id').primary()
    table.integer('materials_id')
    table.specificType('rules')
    table.longtext('notes')
    table.date('collectionday')
    table.string('location')
    table.string('image')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('bins')
}
