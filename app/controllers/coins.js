import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
  router: Ember.inject.service('-routing'),
  queryParams: ['page'],
  currentPage: 1,
  results: 10,
  pageRange: Ember.computed('currentPage', function () {
    let currentPage = this.get('currentPage');
    let pageRange = [];
    
    for (let i = 0; i < 5; i++) {
      pageRange.push(currentPage+i+1);
    }
    
    return pageRange;
    
  }),
  coins: Ember.computed('currentPage', function () {
    return this.get('model')
      .slice(this.get('currentPage') * this.get('results') - this.get('results'),
        this.get('currentPage') * this.get('results'));
  }),
  actions: {
    goToPage(number) {
      this.set('currentPage', number);
      this.set('page', number)
    },
    next() {
      let page = this.get('currentPage') + 1;
      this.set('currentPage', page);
      this.set('page', page)
    },
    previous() {
      let currentPage = this.get('currentPage');
      
      if (currentPage > 1) {
        this.set('currentPage', currentPage - 1);
        this.set('page', currentPage - 1)
      }
    }
  }
});
