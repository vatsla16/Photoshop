import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | photo shop', function(hooks) {
    setupApplicationTest(hooks);

    test('visiting /', async function(assert) {
        await visit('/');
        // check if url is of correct page
        assert.strictEqual(currentURL(), '/');
    });

    test('visiting /item', async function(assert) {
        await visit('/item');
        // check if url is of correct page
        assert.strictEqual(currentURL(), '/item');
    });
    test('visiting /checkout', async function(assert) {
        await visit('/checkout');
        // check if url is of correct page
        assert.strictEqual(currentURL(), '/checkout');
    });
});