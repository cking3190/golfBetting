exports = function({ query, headers, body}, response) {

    var pipeline = [
        {
            '$match': {
                'active': False
            }
        },
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
        '$group': {
            '_id': '$members.name', 
            'winnings': {
                '$sum': '$payout'
            }
        }
    }, {
        '$sort': {
            'winnings': -1
        }
    }
]
      ;
  
  return context.services.get("mongodb-atlas").db("GolfDB").collection("BetsDB").aggregate(pipeline).toArray();
};
