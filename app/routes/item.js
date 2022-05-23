import Route from '@ember/routing/route';

export default class ItemRoute extends Route {
  model(params) {
    return fetch('https://picsum.photos/id/' + params.pic_id + '/info').then(
      (response) =>
        response.json().then((res) => {
          return res;
        })
    );
  }
}
