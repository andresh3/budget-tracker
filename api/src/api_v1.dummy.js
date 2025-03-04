const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

/*          === Dummy API ===
 * This is a "dummy api" which also serves as a skeleton for the full API
 * later. It "acts" like an API returning values without validating,
 * storing or otherwise actually using data sent to it. It returns and requires
 * API Tokens like the real API will.
 * */
const MAX_AGE = 30 * 24 * 60 * 60 * 1000; // Authentication cookie expries in 30 days

// Middleware
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());
router.use(cookieParser());

/*              === Handle Login + Signup ===
 * When users login, or sign up we need to process the request
 * then return a valid token. The token here is their userid
 * cryptographically signed with a secret. We can then verify
 * that we signed the token later (see authenticateToken(...))
 * */
router.post('/signup',(req,res)=>
{
    const {email, password} = req.body;
    
    // Check valid+available email, password:
    // Store data in database:

    // Return signed token
    var userid = getRandomInt(999999); // TODO: REMOVE LINE, FOR DUMMY API ONLY
    const token = jwt.sign(userid, process.env.ACCESS_TOKEN_SECRET);
    res.cookie('auth',token,{maxAge:MAX_AGE,httpOnly:true});
    res.sendStatus(200);
});


router.post('/login',(req,res)=>
{
    const {email, password} = req.body;
    
    // Check valid email and username combo:

    // Return signed token
    var userid = getRandomInt(999999); // TODO: REMOVE LINE, FOR DUMMY API ONLY
    const token = jwt.sign(userid, process.env.ACCESS_TOKEN_SECRET);
    res.cookie('auth',token,{maxAge:MAX_AGE,httpOnly:true});
    res.sendStatus(200);
});

// Handle Authentication:
function authenticateToken(req,res, next)
{
    const token = req.cookies['auth'];
    if(token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err,decoded) => {
       if(err) return res.sendStatus(401); 
       req.userid = decoded;
       next();
    });
}
/* Require authentication below this line: */
router.use(authenticateToken); 


// Handle all other API Calls
router.get('/', (req,res)=>{
    res.send('hi, ' + req.userid);
});



module.exports = router;

/* Helper Functions */
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
