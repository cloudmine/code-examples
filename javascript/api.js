var cloudmine = require('cloudmine');
var moment = require('moment');
var util = require('util');

/*
This is an example of how you can use the .api() function of the CloudMine Web Service in order
to make custom calls to the CloudMine API. 

Below, we examine how to schedule a specific code snippet (stored in your dashboard as custom
server code) to run at a specified date in the future.
*/

// Enter your CloudMine app information here
var APP_ID = '3a1fd1d4c6d24b2aaf43236a6d5c50bc' // Your application ID
var API_KEY = 'e98b1b676a3549f2bd86ceec68afb196' // Your desired API key
var SNIPPET = '' // The name of the code snippet you wish to schedule

// Scheduling parameters
var YEAR = 2015
var MONTH = 4 // Months are counted from 0(January) to 11(December), so remember to subtract 1 from the standard month number
var DAY = 15
var HOUR = 17 // 24 Hour timescale
var MINUTE = 30

// Creating the CloudMine web service object
var ws = new cloudmine.WebService({
	appid: APP_ID,
	apikey: API_KEY
});

// Custom function to generate a correct datetime string
var genTime = function(year, month, day, hour, minute, second){
	return moment(new Date(year, month, day, hour, minute, second, 0)).format('YYYY-MM-DD[T]HH:mm:ss[Z]');
};

// The date on which we will call the scheduled event, based on the variables entered at the top of the script
var on_datetime = genTime(YEAR, MONTH, DAY, HOUR, MINUTE, 0);

// Making the generic api call through out CloudMine variable
ws.api("code/schedule", {method:"PUT"}, {
	on_datetime : on_datetime,		// Scheduling parameter - run once on this date
	appid : APP_ID,					// Your application identifier, as defined above
	apikey : API_KEY,				// Your desired API key, as defined above
	snippet : SNIPPET,				// The name of the snippet you wish to run, as defined above
	params : {						// Parameters to include in the snippet call's header
		// Enter the parameters you wish to include in the snippet call here.
	}
}).on("complete", function(res){
	// Examine the results of the call
	console.log(res);
	console.log(util.inspect(res, null, 5));
});