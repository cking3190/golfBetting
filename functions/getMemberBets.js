exports = function({ query, headers, body}, response) {
   var user = query.username
    var pipeline = [
      {$match: 100}]
      ;
  
  return context.services.get("mongodb-atlas").db("GolfDB").collection("BetsDB").aggregate(pipeline).toArray();
};
