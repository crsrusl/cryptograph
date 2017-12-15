import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['currency', 'unit', 'limit', 'view'],
  currency: null,
  unit: null,
  limit: null,
  view: null
});
