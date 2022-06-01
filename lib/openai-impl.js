/**
 * OpenAi module
 */
 
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
	apiKey: 'FingerUpTheAss'
});

const openai = new OpenAIApi(configuration);

module.exports = {
	configuration,
	openai
}