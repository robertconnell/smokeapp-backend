const database = require("./database-connection");

module.exports = {
    list(){
        return database('smoker').select();
    },
    read(id){
        return database('smoker').select().where('id', id).first();
    },
    create(smoker){
        return database('smoker').insert(smoker).returning('*').then(record => record[0]);
    },
    update(id, smoker){
        return database('smoker').update(smoker).returning('*').then(record => record[0]);
    },
    delete(id){
        return database('smoker').delete().where('id', id);
    },
    listBreak(){
        return database('smoke_break').select();
    }
};