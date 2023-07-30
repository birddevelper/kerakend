var cluster = require('cluster');
if (cluster.isMaster) {

     // Count the machine's CPUs
    var cpuCount = require('os').cpus().length;
	console.log("CPU Count :" + cpuCount );
    // Create a worker for each CPU
    for (var i = 0; i < 1; i += 1) {
        cluster.fork();
    }

// Code to run if we're in a worker process
} else {

var gaproPersonId=1;

var app_version=1;
var db_version=1;





const express = require('express'),
bodyParser = require("body-parser"),
swaggerUi = require("swagger-ui-express");

const app = express();
var cron = require('node-cron');





app.use(express.json({limit: '50mb'}));       // to support JSON-encoded bodies
app.use(express.urlencoded({ extended: true,limit: '50mb'}));
app.disable('x-powered-by');

var multer  = require('multer');

var uploading = multer({
  dest: __dirname + '/tmp/',limits: {fileSize: 1000000, files:1}
});



var soap = require('soap');

app.use(express.json({limit: '50mb'}));       // to support JSON-encoded bodies
app.use(express.urlencoded({ extended: true,limit: '50mb'}));

global_y = 0;

var auth =  require("./modules/user/auth");


////// Authentication //////////////////////////////////////
app.post('/login', auth.checkotp);


app.listen(3000/*+cluster.worker.id*/, () => console.log(cluster.worker.id + ' - Example app listening on port '+ (3000)));

}





