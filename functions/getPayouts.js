exports = function(arg){
  var pipeline = [
  {
    '$addFields': {
      'toWin': {
        '$multiply': [
          {
            '$size': '$members'
          }, '$wager'
        ]
      }
    }
  }, {
    '$unwind': {
      'path': '$members'
    }
  }, {
    '$addFields': {
      'payout': {
        '$cond': {
          'if': {
            '$eq': [
              '$members.name', '$winner.name'
            ]
          }, 
          'then': {
            '$multiply': [
              '$toWin', 1
            ]
          }, 
          'else': {
            '$multiply': [
              '$wager', -1
            ]
          }
        }
      }
    }
  }, {
    '$match': {
      'active': false
    }
  }
]

  return context.services.get("mongodb-atlas").db("GolfDB").collection("BetsDB").aggregate(pipeline).toArray();
};