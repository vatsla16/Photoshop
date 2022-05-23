import EmberRouter from '@ember/routing/router';
import config from 'photo-shop/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('checkout');
  this.route('item', { path: '/item/:pic_id' });
  this.route('not-found', { path: '/*path' });
});
