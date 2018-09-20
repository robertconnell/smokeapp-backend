exports.up = function(knex, Promise) {
    return knex.schema.createTable('smoke_break', smoke_break => {
        smoke_break.increments();
        smoke_break.integer('smoker_id')
            .notNullable()
            .references('id')
            .inTable('smoker')
            .onDelete('CASCADE') 
            .index();
        smoke_break.integer('break_interval');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('smoke_break');
};