import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    },
  },
  model() {
    return this.store.findAll('coins', {reload: true}).then(coins => coins.sortBy('SortOrderNumber'));
  }
});
