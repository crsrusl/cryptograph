import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
  router: Ember.inject.service('-routing'),
  isSelected: 'GBP',
  currency: [{
    name: 'GBP',
    value: 'GBP'
  }, {
    name: 'USD',
    value: 'USD'
  }, {
    name: 'BTC',
    value: 'BTC'
  }],
  didInsertElement() {
    this.set('isSelected', this.get('router').router.currentState.routerJs.state.fullQueryParams.currency)
  },
  actions: {
    updateValue(value) {
      this.get('router').transitionTo('coin', null, {
        currency: value
      })
    }
  }
});
