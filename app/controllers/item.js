import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ItemController extends Controller {
  @tracked size = 'small';
  @tracked price = { original: 10, current: 5 };
  @service checkout;

  @action
  onChangeSize(newSize) {
    this.size = newSize;
    switch (newSize) {
      case 'small':
        this.price = { original: 20, current: 10 };
        break;
      case 'medium':
        this.price = { original: 30, current: 15 };
        break;
      case 'large':
        this.price = { original: 40, current: 20 };
        break;
      case 'xlarge':
        this.price = { original: 50, current: 25 };
        break;
      default:
        this.price = { original: 60, current: 30 };
        break;
    }
  }

  @action
  addToCart() {
    this.checkout.addItem({
      author: this.model.author,
      id: this.model.id,
      size: this.size,
      price: this.price.current,
      image: this.model.download_url,
    });
  }
}
