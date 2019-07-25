import { findAll } from '@ember/test-helpers';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('data-table', 'Integration | Component | data table', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('content', []);
  this.set('content.meta', {
    pagination: {
      first: { number: 1 },
      last: { number: 10 }
    }
  });

  this.render(hbs`{{data-table content=content enableSizes=false}}`);

  assert.equal(findAll('.data-table-content').length, 1);

});
