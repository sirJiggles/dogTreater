import {Factory} from 'ember-cli-mirage';

export default Factory.extend({
  name() { return faker.name.firstName(); }
});
