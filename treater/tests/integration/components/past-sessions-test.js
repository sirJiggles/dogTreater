import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import startMirage from '../../helpers/setup-mirage-for-integration';

moduleForComponent('past-sessions', 'Integration | Component | past sessions', {
  integration: true,
  setup: function() {
    startMirage(this.container);
  }
});

// Create a function to set the fixtures up and render the component
// as could not do this in before Each
function setUpComponent(server, that) {
  server.loadFixtures();
  // use fixtures rather than generate related data
  let model = server.schema.session.all();
  // set the model we mocked
  that.set('model', model);
  // render the component with the fake sessions
  that.render(hbs`{{past-sessions sessions=model}}`);

  return model;
}

test('it shows 12 sessions', function(assert) {

  setUpComponent(server, this);

  // Get handle to the dom component
  let $sessions = this.$('.sessions');

  assert.equal(
    $sessions.find('.sessions__session').length,
    12,
    'Twelve sessions rendered'
  );

});

test('The session shows the users name', function(assert) {
  let model = setUpComponent(server, this);
  assert.equal(
    this.$('.sessions__session__title:eq(0)').text(),
    model[0].user.name,
    'First session user name is same as model'
  );
});

test('The session shows the treat name', function(assert) {
  let model = setUpComponent(server, this);
  assert.equal(
    this.$('.sessions__session__treat__name:eq(0)').text().trim(),
    model[0].treat.name,
    'First session treat name is same as model'
  );
});

test('The session shows the size of the treat', function(assert) {
  let model = setUpComponent(server, this);
  assert.equal(
    this.$('.sessions__session__treat__size:eq(0)').text().trim(),
    `Size: ${model[0].treat.size}`,
    'First session treat size is same as model'
  );
});

test('The session shows how healthy the treat is', function(assert) {
  let model = setUpComponent(server, this);
  assert.equal(
    this.$('.sessions__session__treat__health:eq(0)').text().trim(),
    `Health: ${model[0].treat.health}`,
    'First session treat health is same as model'
  );
});

test('The session has a delete session button', function(assert) {
  setUpComponent(server, this);
  assert.equal(
    this.$('.sessions__session__delete:eq(0)').text().trim(),
    'Delete session',
    'First session has a delete button'
  );

});
