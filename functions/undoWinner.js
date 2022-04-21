exports = function({ query, headers, body}, response) {
    var body = EJSON.parse(body.text())
    
   return context.services.get("mongodb-atlas").db("GolfDB").collection("BetsDB").updateOne( 
  { _id: BSON.ObjectId(body.id) },
  {
    $set: {
      "active": true, 
      "winner": {}
    }
  })
};