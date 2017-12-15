import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  "Url": DS.attr('text'),
  "ImageUrl": DS.attr('text'),
  "Name": DS.attr('text'),
  "Symbol": DS.attr('text'),
  "CoinName": DS.attr('text'),
  "FullName": DS.attr('text'),
  "Algorithm": DS.attr('text'),
  "ProofType": DS.attr('text'),
  "FullyPremined": DS.attr('text'),
  "TotalCoinSupply": DS.attr('text'),
  "PreMinedValue": DS.attr('text'),
  "TotalCoinsFreeFloat": DS.attr('text'),
  "SortOrder": DS.attr('text'),
  "SortOrderNumber": computed('SortOrder', function () {
    return parseInt(this.get('SortOrder'));
  }),
  "Sponsored": DS.attr('boolean')
});
