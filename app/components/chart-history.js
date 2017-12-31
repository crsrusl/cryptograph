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
    let labels = this.get('model.meta.labels').map((i) => {
      return window.moment.unix(i).format(this.formatDate());
    });
    
    let ctx = document.getElementById("myChart").getContext('2d');
    
    this.set('chart', new window.Chart(ctx, {
      "type": "line",
      "data": {
        "labels": labels,
        "datasets": [
          {
            "label": "Price",
            "borderWidth": 2,
            "data": this.get('model.meta.price'),
            "fill": true,
            "lineTension": 0,
            "pointRadius": 0,
            "pointHoverRadius": 1,
            "borderColor": "rgba(24, 122, 92, 1)",
            "backgroundColor": "rgba(255,255,255,0)",
            "pointBackgroundColor": "rgba(24, 122, 92, 1)"
          },
          {
            "label": "Fib38",
            "borderWidth": 1,
            "borderDash": [5, 5],
            "data": this.get('model.meta.fib38'),
            "fill": true,
            "lineTension": 0,
            "pointRadius": 0,
            "pointHoverRadius": 3,
            "borderColor": "rgba(207, 85, 101, 1)",
            "backgroundColor": "rgba(255,255,255,0)",
            "pointBackgroundColor": "rgba(24, 122, 92, 1)"
          },
          {
            "label": "Fib50",
            "borderWidth": 1,
            "borderDash": [5, 5],
            "data": this.get('model.meta.fib50'),
            "fill": true,
            "lineTension": 0,
            "pointRadius": 0,
            "pointHoverRadius": 3,
            "borderColor": "rgba(207, 85, 101, 1)",
            "backgroundColor": "rgba(255,255,255,0)",
            "pointBackgroundColor": "rgba(24, 122, 92, 1)"
          },
          {
            "label": "Fib61",
            "borderWidth": 1,
            "borderDash": [5, 5],
            "data": this.get('model.meta.fib61'),
            "fill": true,
            "lineTension": 0,
            "pointRadius": 0,
            "pointHoverRadius": 3,
            "borderColor": "rgba(207, 85, 101, 1)",
            "backgroundColor": "rgba(255,255,255,0)",
            "pointBackgroundColor": "rgba(24, 122, 92, 1)"
          },
          {
            "label": "Low",
            "borderWidth": 2,
            "data": this.get('model.meta.low'),
            "fill": true,
            "lineTension": 0,
            "pointRadius": 0,
            "pointHoverRadius": 3,
            "borderColor": "rgba(0, 0, 0, 1)",
            "backgroundColor": "rgba(255,255,255,0.5)",
            "pointBackgroundColor": "rgba(24, 122, 92, 1)"
          },
          {
            "label": "High",
            "borderWidth": 2,
            "data": this.get('model.meta.high'),
            "fill": true,
            "lineTension": 0,
            "pointRadius": 0,
            "pointHoverRadius": 3,
            "borderColor": "rgba(0, 0, 0, 1)",
            "backgroundColor": "rgba(255,255,255,0.5)",
            "pointBackgroundColor": "rgba(24, 122, 92, 1)"
          }]
      },
      options: {
        legend: false,
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
