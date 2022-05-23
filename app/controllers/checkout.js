import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CheckoutController extends Controller {
  @service checkout;

  @action
  removeItem(itemID) {
    this.checkout.itemList.removeAt(itemID);
  }

  get total() {
    return this.checkout.itemList.reduce((a, b) => {
      return a + b.price;
    }, 0);
  }
}
