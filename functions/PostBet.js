
  
  
exports = function({ query, headers, body}, response) {

  var body = EJSON.parse(body.text())
  
        
  const betDoc = {
      owner: body.betOwner,
      bet: body.bet,
      timestamp: new Date(),
      members: body.members,
      hole : body.hole,
      wager : body.wager,
      active: body.active
  };
    
  context.services.get("mongodb-atlas").db("GolfDB").collection("BetsDB").insertOne(betDoc);
  return 'Successfully Created Bet'
};
