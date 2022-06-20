/**
 * OpenAi module
 */
 
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
	apiKey: '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',
});

const openai = new OpenAIApi(configuration);

module.exports = {
	openai
}