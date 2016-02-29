import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  size: DS.attr('string'),
  health: DS.attr('number'),
  sessions: DS.hasMany('session')
});
