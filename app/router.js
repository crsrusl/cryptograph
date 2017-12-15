import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('coins');
  this.route('coin', {path: '/coins/:id'});
  this.route('loading');
});

export default Router;
