import DS from 'ember-data';

export default DS.Model.extend({
  "time": DS.attr('number'),
  "high": DS.attr('number'),
  "low": DS.attr('number'),
  "open": DS.attr('number'),
  "volumefrom": DS.attr('number'),
  "volumeto": DS.attr('number'),
  "close": DS.attr('number')
});
