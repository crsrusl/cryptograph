import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  normalizeFindAllResponse(store, primaryModelClass, payload) {
    let results = [];
    
    for (let key in payload) {
      if (payload.hasOwnProperty(key)) {
        let record = {
          id: payload[key].Id,
          type: 'coins',
          attributes: payload[key]
        };
        
        delete record.attributes.Id;
        results.push(record);
      }
    }
    
    return {data: results};
  }
});
