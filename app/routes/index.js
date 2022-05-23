import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    return fetch('https://picsum.photos/v2/list?page=1&limit=25').then(
      (response) =>
        response.json().then((res) => {
          return res;
        })
    );
  }
}
