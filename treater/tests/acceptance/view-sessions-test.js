import { test } from 'qunit';
import moduleForAcceptance from 'treater/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | view sessions');

test('visiting /sessions', function(assert) {

  visit('/sessions');

  andThen(function() {
    assert.equal(currentURL(), '/sessions');
  });

});

// test('three sessions are rendered', function(assert) {
//   // server.loadFixtures();
//
//   // console.log(server.get('sessions'));
//   visit('/sessions');
//   andThen(function() {
//     let $sessions = this.$('.sessions');
//     // console.log($sessions.find('.sessions__session'));
//     assert.equal(
//       $sessions.find('.sessions__session').length,
//       12,
//       'Twelve sessions'
//     );
//   });
// });
