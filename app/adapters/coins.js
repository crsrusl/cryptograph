import DS from 'ember-data';
import Ember from 'ember';

export default DS.Adapter.extend({
  findAll() {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.getJSON(`https://min-api.cryptocompare.com/data/all/coinlist`, null).then(function(data) {
        resolve(data.Data);
      }, function(jqXHR) {
        reject(jqXHR);
      });
    });
  }
});
