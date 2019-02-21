const bookshelf = require('./bookshelf');

class User extends bookshelf.Model{
  get tableName() {return 'users';}
  get hasTimestamps() {return true;}
  
  contact() {
    return this.hasMany('Contact', 'contacts_id', 'contacts_id');
  };
};
module.exports = bookshelf.model('User', User);