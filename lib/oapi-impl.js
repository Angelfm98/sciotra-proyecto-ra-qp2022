/**
 * OpenAPI definition
 */
const openapi = require('@wesleytodd/openapi');

// OpenAPI (swagger) definition
const oapi = openapi({
	openapi: '3.0.0',
	info: {
		title: 'OpenAI implementation',
		descriptor: 'OpenAPI implementation test',
		version: '1.0.0',
	}
});

module.exports = oapi;