var cloudmine = require('cloudmine');

// Enter your information here
var APP_ID = '12345678900987654321';
var API_KEY = 'APIAPIAPIAPIAPIAPIAPI';

var wsOptions = {
	appid: APP_ID,
	apikey: API_KEY
};

var webService = new cloudmine.WebService(wsOptions);

// Instead of making your API calls directly, store them in a variable.
var apiCall = webService.get();

// To print out debugging information, simply log the actual call in the success or failure listener events.
apiCall.on('success', function(data) {

	// The API call has returned successfully
	console.log('Api call success with debug info:\n');
	console.log(apiCall);

}).on('error', function(error) {

	// The API call failed
	console.log('Api call failure with debug info:\n');
	console.log(apiCall);

});