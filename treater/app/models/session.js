import DS from 'ember-data';

export default DS.Model.extend({
  treat: DS.belongsTo('treat'),
  user: DS.belongsTo('user')
});
