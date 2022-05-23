import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class NavBarComponent extends Component {
  @service checkout;

  get itemCount() {
    return this.checkout.itemList.reduce((total, item) => {
      console.log(total.count);
      return (total += 1);
    }, 0);
  }
}
