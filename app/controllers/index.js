import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class IndexController extends Controller {
  // @tracked page = 1;
  // @action
  // async getNewPage(selectedPage) {
  //     this.page = selectedPage;
  //     const newModel = await fetch(
  //         'https://picsum.photos/v2/list?page=' + selectedPage + '&limit=3'
  //     ).then((response) =>
  //         response.json().then((res) => {
  //             return res;
  //         })
  //     );
  //     console.log(newModel);
  //     this.set('model', newModel);
  // }
}
