exports.seed = function(knex, Promise) {
  return knex('smoke_break').del()
    .then(function () {
      return knex('smoke_break').insert([{
          smoker_id: 1,
          break_interval: 930,
          breaks_left: 5
        }]);
      });
    };
