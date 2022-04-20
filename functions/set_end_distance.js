exports = function({ query, headers, body}, response) {
  
  
    var lat = (query.lat) ? parseFloat(query.lat) : 0;
    var lon = (query.lon) ? parseFloat(query.lon) : 0;
    var id = (query.id) ? parseInt(query.id) : 0;

    
    var rec = {
      id: id,
      start_point: {type: "Point", coordinates: [lon, lat] },
    };
    
    context.services.get("mongodb-atlas").db("GolfDB").collection("DistanceTracking").updateOne( 
  { id: id },
  {
    $set: {
      end_point: {type: "Point", coordinates: [lon, lat] },
      complete: true
    }
  })
    
    return 'completed';
};