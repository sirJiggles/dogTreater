import { moduleForModel, test } from 'ember-qunit';

moduleForModel('treat', 'Unit | Model | treat', {
  // Specify the other units that are required for this test.
  needs: ['model:session']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
