const bookshelf = require('./bookshelf');

class Contact extends bookshelf.Model {
  get tableName() {return 'createdBy';}
  get hasTimestamps() {return true;}

  contacts() {
    return this.belongsTo('User', 'id');
  }
}
module.exports = bookshelf.model('Contact', Contact);
