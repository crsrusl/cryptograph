import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import Ember from 'ember';

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
      meta: this.store.query('coin', params, {reload: true}).then((results) => {
        let labels = [];
        let price = [];
        let high = 0;
        let low;
        let lowArray = [],
          highArray = [],
          fib38 = [],
          fib50 = [],
          fib61 = [];
        
        results.map(i => {
          let time = i.get('time');
          let close = i.get('close');
          let highResult = i.get('high');
          let lowResult = i.get('low');
          
          if (highResult > high) {
            high = highResult;
            if (!low) low = highResult;
          }
          if (lowResult < low) low = lowResult;
          
          labels.push(time);
          price.push(close);
        });
        
        let fib38c = (((high - low) / 100) * 38.2) + low;
        let fib50c = (((high - low) / 100) * 50) + low;
        let fib61c = (((high - low) / 100) * 61.8) + low;
        
        labels.map(() => {
          lowArray.push(low);
          highArray.push(high);
          fib38.push(fib38c);
          fib50.push(fib50c);
          fib61.push(fib61c);
        });
        
        return {
          labels: labels,
          price: price,
          high: highArray,
          low: lowArray,
          fib38: fib38,
          fib50: fib50,
          fib61: fib61
        };
        
      }),
      price: Ember.$.getJSON(`https://min-api.cryptocompare.com/data/price`, `fsym=${params.id}&tsyms=${params.currency}`)
        .then((result) => {
          return result[params.currency];
        })
    })
  }
});
