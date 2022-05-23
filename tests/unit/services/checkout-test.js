import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { click, currentURL } from '@ember/test-helpers';

module('Unit | Service | checkout', function(hooks) {
    setupTest(hooks);

    // TODO: Replace this with your real tests.
    test('it exists', async function(assert) {
        let service = this.owner.lookup('service:checkout');
        assert.ok(service);

        // check if breadcrumb exists and if all links work
        // assert.dom('.breadcrumb a').hasClass('menu-index');
        // await click('.breadcrumb a.menu-index');
        // assert.strictEqual(currentURL(), '/');

        // assert.dom('.breadcrumb a').hasClass('menu-checkout');
        // await click('.breadcrumb a.menu-item');
        // assert.strictEqual(currentURL(), '/checkout');

        // // check if page has has items
        // assert.dom('.checkout_item p').hasClass('title');
        // assert.dom('.checkout_item p').hasClass('price');
        // assert.dom('.checkout_item p').hasClass('size');
        // assert.dom('.checkout_item input').hasClass('button');
        // assert.dom('.checkout_item input.button').hasValue('Remove');

        // // check if page has has amount section
        // assert.dom('.checkout_amount input').hasClass('button');
        // assert.dom('.checkout_amount input.button').hasValue('Checkout');
    });

    test('it works', function(assert) {
        const service = this.owner.lookup('service:checkout');
        assert.equal(service.itemList.length, 0);
    });
});