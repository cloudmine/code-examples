var cloudmine = require('cloudmine');


// Enter your information here
// var APP_ID = '12345678900987654321';
var APP_ID = 'd46948e3e8bb49aeac5716d84258d7dd';
// var API_KEY = 'APIAPIAPIAPIAPIAPIAPI';
var API_KEY = 'CC05B5846DC445ECA848F35AB11EE70F';

var wsOptions = {
	appid: APP_ID,
	apikey: API_KEY
};

var webService = new cloudmine.WebService(wsOptions);

// To print out debugging information, simply log the actual call in the success or failure listener events.
var apiCall = webService.get();

apiCall.on('success', function(data) {
	console.log('Api call success with debug info:\n');
	console.log(apiCall);
}).on('error', function(error) {
	console.log('Api call failure with debug info:\n');
	console.log(apiCall);
});