import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
  router: Ember.inject.service('-routing'),
  chart: null,
  formatDate() {
    let view = this.get('router').router.currentState.routerJs.state.fullQueryParams.view;
    let format;
    
    switch (view) {
      case 'year':
        format = 'MM/YY';
        break;
      case 'month':
        format = 'MM/D';
        break;
      case 'day':
        format = 'MM/DD HH:mm';
        break;
      case 'hour':
        format = 'H:mm';
        break;
      case 'minute': {
        format = 'H:mm';
        break;
      }
      default:
        format = 'ddd'
    }
    
    return format;
  },
  didInsertElement() {
    let labels = [], price = [], resistanceLine = [];
    let resistance = 0;
    let model = this.get('model.coin');
    
    model.map(i => {
      let time = window.moment.unix(i.get('time')).format(this.formatDate());
      let close = i.get('close');
      let high = i.get('high');
      
      if (high > resistance) resistance = high;
      
      labels.push(time);
      price.push(close);
    });
  
    resistanceLine = price.map(() => {
      return resistance;
    });
    
    let ctx = document.getElementById("myChart").getContext('2d');
    this.set('chart', new Chart(ctx, {
      "type": "line",
      "data": {
        "labels": labels,
        "datasets": [
          // {
          //   "label": "Resistance",
          //   "borderWidth": 2,
          //   "data": resistanceLine,
          //   "fill": true,
          //   "lineTension": 0,
          //   "pointRadius": 0,
          //   "pointHoverRadius": 3,
          //   "borderColor": "rgba(207, 85, 101, 1)",
          //   "backgroundColor": "rgba(255,255,255,0)",
          //   "pointBackgroundColor": "rgba(24, 122, 92, 1)"
          // },
          {
            "label": "Price",
            "borderWidth": 2,
            "data": price,
            "fill": true,
            "lineTension": 0,
            "pointRadius": 0,
            "pointHoverRadius": 3,
            "borderColor": "rgba(24, 122, 92, 1)",
            "backgroundColor": "rgba(255,255,255,0)",
            "pointBackgroundColor": "rgba(24, 122, 92, 1)"
          }]
      },
      options: {
        tooltips: {
          enabled: true
        },
        animation: false,
        responsive: true,
        scales: {
          xAxes: [{
            gridLines: {
              display: true,
              color: "rgba(0,0,0,0.05)"
            }
          }],
          yAxes: [{
            gridLines: {
              display: false
            }
          }]
        }
      }
    }));
  }
});
