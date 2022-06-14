/**
 * OpenAi module
 */
 
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
	apiKey: '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'
});

const openai = new OpenAIApi(configuration);

module.exports = {
	configuration,
	openai
}