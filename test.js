var express = require('express');
var bodyParser = require("body-parser");
var cors = require('cors');
var app = express();
var db = require('./testdb');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: '*' }));
app.get('/Campus', function (req, res) {
    var queryString = "select CampusId,CampusName,CollegeTypeId,CampusAddress,Latitude,Longitude,Accuracy from Campus";
    // punitha
    console.log(queryString);
    db.query(queryString, function (err, recordset) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        }
        else {
            res.status(200).json({ recordset });
        }
    });
});
app.listen(200, function () {
    console.log("nodejs app is listening port 200");
});