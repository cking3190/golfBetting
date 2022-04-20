exports = function({ query, headers, body}, response) {
  var id = query.bet_id
  
  return context.services.get("mongodb-atlas").db("GolfDB").collection("BetsDB").findOne({_id : BSON.ObjectId(id)}).toArray();
};
