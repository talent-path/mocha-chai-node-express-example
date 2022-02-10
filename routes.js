let {COURSES} = require('./db-data');

function getCourses(req, res) {
    res.status(200).json(COURSES);
}


/*
 * GET /book/:id route to retrieve a book given its id.
 */

function getCourse(req, res) {
    let course = COURSES[req.params.id];

    if(!course) {return res.status(404).send('Course Not Found');}
    
    res.json(course);
}

//export all the functions
module.exports = { getCourses, getCourse};