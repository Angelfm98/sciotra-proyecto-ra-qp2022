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