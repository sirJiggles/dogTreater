import { test } from 'qunit';
import moduleForAcceptance from 'treater/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | view sessions');

test('visiting /sessions', function(assert) {

  visit('/sessions');

  andThen(function() {
    assert.equal(currentURL(), '/sessions');
  });

});

test('twelve sessions are rendered', function(assert) {
  // for now the fixtures are a very simular to the scenario file
  server.loadFixtures();

  visit('/sessions');
  andThen(function() {
    let $sessions = this.$('.sessions');
    assert.equal(
      $sessions.find('.sessions__session').length,
      12,
      'Twelve sessions'
    );
  });
});
