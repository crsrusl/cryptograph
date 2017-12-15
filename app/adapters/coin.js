import DS from 'ember-data';
import Ember from 'ember';

export default DS.Adapter.extend({
  query(store, type, query) {
    return new Ember.RSVP.Promise(function (resolve, reject) {
      Ember.$.getJSON(`https://min-api.cryptocompare.com/data/histo${query.unit}`, `fsym=${query.id.toUpperCase()}&tsym=${query.currency}&limit=${query.limit}`).then(function (data) {
        resolve(data.Data);
      }, function (jqXHR) {
        reject(jqXHR);
      });
    });
  }
});
