var cloudmine = require('cloudmine');

/*
This is an example of how you can use the .api() function of the CloudMine Web Service in order
to  copy a file that you've already uploaded to your app.

Below, we will first go through uploading a file to your app, and associating it with a key. We
will then go through copying that file and associating the copied file with a new key.
*/

// Enter your CloudMine app information here
var APP_ID = 'dsjiofh8934jf93482g5h2497vh47v8h'; // Your application ID
var API_KEY = 'cuh3498hf2975hv059874hjv04589jvw'; // Your desired API key

var FILE_KEY = 'fileKey'; // The key for the first upload of the file
var FILE_LOCATION = 'path/to/file'; // The path to the file that you'd like to upload / copy

var COPY_KEY = 'copyKey'; // The key for the copied version of the file

// Creating the CloudMine web service object
var ws = new cloudmine.WebService({
	appid: APP_ID,
	apikey: API_KEY
});

// Calling the WebService's upload function to upload the original file to CloudMine
// Notice how we associate the FILE_KEY with the file we're uploading. This is necessary
// in order to appropriately copy the file in the next step.
ws.upload(FILE_KEY, FILE_LOCATION)
		.on('success', function(data, response){
			console.log('upload success');
			console.log(response);
			console.log(data);
		})
		.on('error', function(data, response) {
			console.log('upload error');
			console.log(response);
			console.log(data);
		});

// Here we're updating the CloudMine WebService object to default to POST requests, in
// preparation for the copy file api call. 
ws.method = "POST";

// Making the generic API call using the ws.api() call. As you can see, we're making a
// POST request to the 
ws.api('binary/' + FILE_KEY + '/copy/' + COPY_KEY)
		.on('success', function(data, response) {
			console.log('copy success');
			console.log(response);
			console.log(data);
		})
		.on('error', function(data, response){
			console.log('copy error');
			console.log(response);
			console.log(data);
		});
