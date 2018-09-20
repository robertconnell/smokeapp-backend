exports.up = function(knex, Promise) {
    return knex.schema.createTable('smoker', smoker => {
        smoker.increments();
        smoker.string('name');
        smoker.time('day_start');
        smoker.time('day_end');
        smoker.integer('cigarette_limit')
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('smoker');
};
