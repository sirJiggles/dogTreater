import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import startMirage from '../../helpers/setup-mirage-for-integration';

moduleForComponent('past-sessions', 'Integration | Component | past sessions', {
  integration: true,
  setup: function() {
    startMirage(this.container);
  }
});

test('it shows 3 sessions', function(assert) {
  // create a mock of sessions in the past using MIRAGE!!!
  let users = server.createList('user', 3);
  let treats = server.createList('treat', 3);

  let model = [];
  for (let i=0; i<3; i++) {
    let s = server.create('session');
    s.user = users[i];
    s.treat = treats[i];
    model.push(s);
  }

  // set the model we mocked
  this.set('model', model);

  // render the component with the fake sessions
  this.render(hbs`{{past-sessions sessions=model}}`);

  // Get handle to the dom component
  let $sessions = this.$('.sessions');

  assert.equal(
    $sessions.find('.sessions__session').length,
    3,
    'Three sessions rendered'
  );

  // check the content matches against our model
  assert.equal(
    $sessions.find('.sessions__session__title:eq(0)').text(),
    model[0].user.name,
    'title of first session matches title of first session on model'
  );
});
