exports = function({ query, headers, body}, response) {

  var body = EJSON.parse(body.text())
  
    context.services.get("mongodb-atlas").db("GolfDB").collection("BetsDB").updateOne( 
  { _id :BSON.ObjectId(body.id), "members.username" : body.username },
  {
    $set: {
      "members.$.score": body.score
    }
  })
    
    return 'completed';
};