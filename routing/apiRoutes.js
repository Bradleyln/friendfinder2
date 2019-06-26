var friends = require("../data/friends");
module.exports = function (app) {

//get request for a json response
app.get("/api", function(req, res){
  	res.json(friends);
  });

// saves the post request as the newFriend, pushes the new friend to the frienda array,
// then posts that array to /api. 
  app.post("/api", function(req, res){
   	console.log(req.body);
    	var newFriend = req.body;
      friends.push(newFriend);
  });


};
