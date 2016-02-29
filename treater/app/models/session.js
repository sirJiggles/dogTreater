import DS from 'ember-data';

export default DS.Model.extend({
  treat: DS.belongsTo('treat', { async: true }),
  user: DS.belongsTo('user', { async: true })
});
