
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let port = 8080;
let courses = require('./routes');

//parse application/json and look for raw text                                        
app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));               
app.use(bodyParser.text());                                    
app.use(bodyParser.json({ type: 'application/json'}));  

app.get("/", (req, res) => res.json({message: "Welcome to the course catalog"}));

app.route("/courses")
    .get(courses.getCourses);
   
app.route("/courses/:id")
    .get(courses.getCourse);

app.listen(port);
console.log("Listening on port " + port);

module.exports = app; // for testing