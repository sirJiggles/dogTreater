import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  treat: belongsTo('treat'),
  user: belongsTo('user')
});
