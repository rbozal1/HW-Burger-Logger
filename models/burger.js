var orm = require("../config/orm.js");

var burger = {
    insert: function(some_val, cb){
      orm.insert('burgers', 'burger_name', some_val, function(res){
        cb(res);
      });
    },


}

module.exports = burger;