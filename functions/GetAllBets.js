exports = function({ query, headers, body}, response) {
    var pipeline = [
      {$limit: 100},
      {$sort: {timestamp:-1}}]
      ;
  
  return context.services.get("mongodb-atlas").db("GolfDB").collection("BetsDB").aggregate(pipeline).toArray();
};
