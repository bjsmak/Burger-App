//Require ORM callbacks for model
const orm = require('../config/orm.js');

const burger = {
    select: function(cb) {
        orm.select("burgers", function(res){
                cb(res);
        });
    },
    insert: function(cols, vals, cb) {
        orm.insert("burgers", cols, vals, function(res){
            cb(res);
        });
    },
    update: function(objColVals, condition, cb){
        orm.update("burgers", objColVals, condition, function(res){
            cb(res);
        });
    },
    /* check if delete is required
    delete: function(condition, cb){
        orm.delete("burgers", condition, function(res){
            cb(res);
        });
    }*/
};

module.exports = burger;