import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class CheckoutService extends Service {
  @tracked itemList = [];
  addItem(item) {
    this.itemList = [...this.itemList, item];
  }
}
