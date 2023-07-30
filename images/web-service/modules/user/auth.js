
var utilities = require("../../helper/utilities")





const jwt = require('jsonwebtoken');


// Secret key for JWT
const secretKey = '5dfr#38gfdgdg%9d5bghf8hilkj4mnb3vclytdsxcvbh3y10tfvbnjuytrdxcny$#';

// Middleware for JWT authentication
exports.authenticateToken = function (req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, secretKey, { algorithm:  "HS384" } ,(err, user) => {
    if (err) 
    { 
      console.log(err);
      return res.sendStatus(403);
    }

    req.user = user;
    next();
  });
};





  exports.checkotp = async function (req, res) {
    try {
    res.type('json');
    if(!utilities.VerifyHeader(req.headers)) {res.send({msg : "Bad Request!"}); return; }
    if(!utilities.VerifyPayload(req.body)) {res.send({msg : "Payload Error!"}); return; }
    if(!req.body.username) {res.send({msg : "Error Input Data"}); return; }
    if(!req.body.password) {res.send({msg : "Error Input Data"}); return; }

    if(req.body.password!="1234") {res.send({msg : "unauthorized"}); return; }



    var expiredate = utilities.addMinutes(new Date(),-13);

          if( true){  
                      
                      if(false){
                           
                            res.send({"msg":"NewUser"}); return;
                      }
                      else
                      {
                        var UserID= req.body.username;
                       
                        //////
                        user = { userId : UserID, kid : 'sim2' };

                        const accessToken = jwt.sign(user, secretKey, { expiresIn: '30m', algorithm:  "HS384" });
                        const refreshToken = jwt.sign(user, secretKey, { expiresIn: '60d', algorithm:  "HS384" });
                      
                        // Save the refresh token to a database or other storage mechanism
                      
                       

                        
                        res.send({
                                  "accessToken" : accessToken,
                                  "refreshToken" : refreshToken,
                               
                                 });
                    

                      }
  
          }
          else
          {
          
            
            res.send({"msg":"Expired"}); return;
          }

  
  } //try
  catch (e) {
      if(conn) {conn.release(); console.log("Released"); }
      res.send({"msg":"error","details": e.message}); return;
  }
  
  }
