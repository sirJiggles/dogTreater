import { test } from 'qunit';
import moduleForAcceptance from 'treater/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | view treats');

test('visiting /treats', function(assert) {
  visit('/treats');

  andThen(function() {
    assert.equal(currentURL(), '/treats');
  });
});

test('see 6 treats on the screen from the component', function(assert) {
  server.loadFixtures();
  visit('/treats');

  andThen(function() {
    let $treats = this.$('.treats');
    assert.equal(
      $treats.find('.treats__treat').length,
      6,
      'there are 6 treats on the screen'
    );
  });
});
