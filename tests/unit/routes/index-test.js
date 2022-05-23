import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | index', function(hooks) {
    setupTest(hooks);

    test('it exists', async function(assert) {
        let route = this.owner.lookup('route:index');
        assert.ok(route);
    });

    test('it works', function(assert) {
        // assert.dom('h1').hasText('Your one stop shop for all of your photo-shoppin');

        // // check if page has a button with specific class
        // assert.dom('div').hasClass('photo_card');
        // assert.dom('.photo_card a').hasClass('ember-view');

        // // check if pagination exists
        // assert.dom('ol').hasClass('pages');
        // assert.dom('.pages p').hasClass('button');
    })
});