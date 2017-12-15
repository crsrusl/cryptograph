import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
  router: Ember.inject.service('-routing'),
  fiatCurrency: null,
  currency: null,
  price: null,
  difference: null,
  differencePositive: false,
  init() {
    this._super(...arguments);
    this.set('fiatCurrency', this.get('router').router.currentState.routerJs.state.fullQueryParams.currency);
    this.set('coin', this.get('router').router.currentState.routerJs.state.params.coin.id);
    this.set('price', this.get('model.price'));
  
    let item = this.get('model.coin.firstObject');
    
    // TODO rework this to display low results cleary
    let difference = parseFloat(Math.round((this.get('price') - item.get('close')) * 100) / 100).toFixed(2);
    
    if (difference > 0) this.set('differencePositive', true);
    
    this.set('difference', difference);
  }
});
