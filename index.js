/**
 * OpenAI implementation
 */

 var api = require('./lib/api');

 async function main() {

 	// Port
 	const port = api.get('port');
 	await api.listen(port);

 	console.log('LISTENING @ ', port);	
 }

 main();