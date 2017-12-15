import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
  router: Ember.inject.service('-routing'),
  isSelected: 'hour',
  options: [{
    name: 'Year',
    view: 'year',
    unit: 'day',
    limit: 365
  },
    {
      name: 'Month',
      view: 'month',
      unit: 'hour',
      limit: 730
    }, {
      name: '7 days',
      view: 'day',
      unit: 'hour',
      limit: 168
    }, {
      name: '24 hours',
      view: 'hour',
      unit: 'minute',
      limit: 228
    }, {
      name: '1 hour',
      view: 'minute',
      unit: 'minute',
      limit: 60
    }],
  didInsertElement() {
    this.set('isSelected', this.get('router').router.currentState.routerJs.state.fullQueryParams.view)
  },
  actions: {
    updateValue(value) {
      let values = JSON.parse(value);
      
      this.get('router').transitionTo('coin', null, {
        unit: values.unit,
        limit: values.limit,
        view: values.view
      })
    }
  }
});
