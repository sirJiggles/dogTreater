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
  const MODEL = server.createList('session', 3);

  console.log(MODEL);

  // set the model we mocked
  this.set('model', MODEL);

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
    MODEL[0].user.name,
    'title of first session matches title of first session on model'
  );
});
