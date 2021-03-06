import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('landing-copyright', 'Integration | Component | landing copyright', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{landing-copyright}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#landing-copyright}}
      template block text
    {{/landing-copyright}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
