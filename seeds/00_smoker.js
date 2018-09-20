exports.seed = function(knex, Promise) {
  return knex('smoker').del()
    .then(function () {
      return knex('smoker').insert([{
          name: 'Robert',
          day_start: 1030,
          day_end: 2000,
          cigarette_limit: 5
        }]);
      });
    };
