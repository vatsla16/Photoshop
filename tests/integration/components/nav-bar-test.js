import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, currentURL, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | nav-bar', function(hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function(assert) {
        await render(hbs `<NavBar />`);

        // check if nav exists
        // assert.dom('div').hasClass('nav');

        // // check if button has specified class and if on click, it reaches the desired page
        // assert.dom('.menu a').hasClass('menu-index');
        // await click('.menu a.menu-index');
        // assert.strictEqual(currentURL(), null);

        // await click('.menu a.menu-checkout');
        // assert.strictEqual(currentURL(), '/checkout');
    });
});