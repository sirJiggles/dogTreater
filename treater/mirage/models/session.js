import { Model, hasOne } from 'ember-cli-mirage';

export default Model.extend({
  treat: hasOne,
  user: hasOne
});
