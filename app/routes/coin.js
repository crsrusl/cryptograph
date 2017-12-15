import Route from '@ember/routing/route';
import Ember from 'ember';
import RSVP from 'rsvp';

export default Route.extend({
  queryParams: {
    unit: {
      refreshModel: true
    },
    currency: {
      refreshModel: true
    },
    limit: {
      refreshModel: true
    },
    view: {
      refreshModel: true
    }
  },
  model(params) {
    return RSVP.hash({
      coin: this.store.query('coin', params, {reload: true}),
      price: Ember.$.getJSON(`https://min-api.cryptocompare.com/data/price`, `fsym=${params.id}&tsyms=${params.currency}`)
        .then((result) => {
          return result[params.currency];
        })
    })
  }
});
