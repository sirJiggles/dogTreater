import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import startMirage from '../../helpers/setup-mirage-for-integration';

moduleForComponent('treater-treats', 'Integration | Component | treater treats', {
  integration: true,
  setup: function() {
    startMirage(this.container);
  }
});

function setUpComponent(server, that) {
  server.loadFixtures();
  // use fixtures rather than generate related data
  let model = server.schema.treat.all();
  // set the model we mocked
  that.set('model', model);
  // render the component with the fake sessions
  that.render(hbs`{{treater-treats treats=model}}`);

  return model;
}

test('it shows the 6 treats', function(assert) {
  setUpComponent(server, this);
  let $treats = this.$('.treats');
  assert.equal(
    $treats.find('.treats__treat').length,
    6,
    'there are 6 treats shown by the component'
  );
});

test('a treat shows the name of the treat', function(assert) {
  let model = setUpComponent(server, this);
  assert.equal(
    this.$('.treats__treat__name:eq(0)').text().trim(),
    model[0].name,
    'treat name is the same as the model and dispalyed'
  );
});

test('a treat shows the health of a treat', function(assert) {
  let model = setUpComponent(server, this);
  assert.equal(
    this.$('.treats__treat__health:eq(0)').text().trim(),
    `Health: ${model[0].health}`,
    'treat health is the same as the model and dispalyed'
  );
});

test('a treat shows the size of a treat', function(assert) {
  let model = setUpComponent(server, this);
  assert.equal(
    this.$('.treats__treat__size:eq(0)').text().trim(),
    `Size: ${model[0].size}`,
    'treat size is the same as the model and dispalyed'
  );
});
