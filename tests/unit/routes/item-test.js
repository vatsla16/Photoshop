import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { click } from '@ember/test-helpers';

module('Unit | Route | item', function(hooks) {
    setupTest(hooks);

    test('it exists', async function(assert) {
        let route = this.owner.lookup('route:item');
        assert.ok(route);

        // // check if breadcrumb exists and if all links work
        // assert.dom('ol').hasClass('breadcrumb');
        // assert.dom('.breadcrumb a').hasClass('menu-index');
        // await click('.breadcrumb a.menu-index');
        // assert.strictEqual(currentURL(), '/');

        // assert.dom('.breadcrumb a').hasClass('menu-item');
        // await click('.breadcrumb a.menu-item');
        // assert.strictEqual(currentURL(), '/item');

        // // check if page has has info

        // assert.dom('.item_content p').hasClass('title');
        // assert.dom('.item_content p').hasClass('price');
        // assert.dom('.item_content p').hasClass('size');
        // assert.dom('.item_content input').hasClass('button');
    });
});