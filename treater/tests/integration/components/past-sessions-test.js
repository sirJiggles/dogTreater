import { moduleForComponent, test } from 'ember-qunit';
import createSessions from '../../helpers/create-sessions';
// import startApp from '../../helpers/start-app';
// import Ember from 'ember';

// var App,
//     createSessions;

import hbs from 'htmlbars-inline-precompile';

moduleForComponent('past-sessions', 'Integration | Component | past sessions', {
  integration: true

  // beforeEach: function() {
  //   App = startApp();
  // },
  // afterEach: function() {
  //   Ember.run(App, App.destroy);
  // }
});

test('it shows 3 sessions', function(assert) {

  // create a mock of sessions in the past
  var model = createSessions(3);

  console.log(model);

  // set the model we mocked
  this.set('model', model);

  // render the component with the fake sessions
  this.render(hbs`{{past-sessions sessions=model}}`);

  // Get handle to the dom component
  var $sessions = this.$('.sessions');

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
