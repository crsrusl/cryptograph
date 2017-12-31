import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeQueryResponse (store, primaryModelClass, payload) {
    let results = [];
    let recordId = 0;
    
    for (let key in payload) {
      if (payload.hasOwnProperty(key)) {
        let record = {
          id: recordId++,
          type: 'coin',
          attributes: payload[key]
        };
  
        results.push(record);
      }
    }
  
    return {data: results};
  }
});
