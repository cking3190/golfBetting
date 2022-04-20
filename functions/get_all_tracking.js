exports = function({ query, headers, body}, response) {
    var pipeline = [
      {$limit: 10}]
      ;
  
  return context.services.get("mongodb-atlas").db("GolfDB").collection("DistanceTracking").aggregate(pipeline).toArray();
};
